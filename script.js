const scene = document.getElementById('scene');
const title = document.getElementById('sceneTitle');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

const SCENES = {
  home: {
    title: 'HOME',
    html: `
      <div class="homeBg"></div>
      <div class="floorGrid"></div>
      <div class="hero">
        <h1>RONERA RUBBER<br>DIGITAL METROLOGY EXPERIENCE CENTER</h1>
        <p>From physical part to final certification. CMM dimensional inspection, ATOS 3D scanning, GD&T analysis, roughness control, material moisture verification, optical profile measurement, 3D printing and technical reporting for audit, PPAP and customer validation.</p>
        <div class="enter" onclick="loadScene('entrance')">ENTER THE LABORATORY</div>
      </div>
      <div class="cards">
        <div class="card"><b>CMM / PC-DMIS</b><span>Dimensional inspection, GD&T, PPAP, customer reports and deviation analysis.</span></div>
        <div class="card"><b>ATOS / GOM Inspect</b><span>3D optical scanning, color map, CAD vs part, reverse engineering.</span></div>
        <div class="card"><b>Surface & Material</b><span>Keyence profile measurement, roughness, XM66 moisture analyzer.</span></div>
        <div class="card"><b>3D Printing</b><span>Rapid prototyping, fixtures, support concepts and functional validation.</span></div>
      </div>
    `
  },

  entrance: {
    title: 'ENTRANCE',
    photo: 'assets/entrance_branded.png',
    panelTitle: 'ENTRANCE',
    panel: 'Controlled access to the Digital Metrology Experience Center. The tour begins with the CMM area and continues with 3D scanning, surface, material, prototyping and technical reports.',
    hotspots: [
      ['Enter Laboratory', 'cmm', 52, 56],
      ['Laboratory Overview', 'overview', 24, 30],
      ['Contact', 'contact', 78, 25]
    ]
  },

  cmm: {
    title: 'CMM ROOM',
    photo: 'assets/cmm_room_clean.png',
    panelTitle: 'CMM ROOM - Precision that inspires confidence',
    panel: 'Tactile dimensional inspection and CMM scanning for injection molded parts, prototypes, devices and technical components. Controlled flow: CAD, strategy, measurement, reporting and technical decision.',
    hotspots: [
      ['Hexagon GLOBAL Advantage', 'cmmInfo',32, 30],
      ['PC-DMIS Software', 'cmmWorkstation', 72, 48],
      ['CMM Reports', 'cmmReports', 65, 58],
      ['Go to 3D Scanning Room', 'atos', 1, 75],
      ['Go to Surface Measurement and Prototyping', 'surface', 10, 12]
    ]
  },

  atos: {
    title: 'ATOS SCAN',
    photo: 'assets/atos_station.png',
    panelTitle: 'ATOS SCAN - CAD vs Scaned Part.',
    panel: '3D optical scanning transforms each component into a complete digital model, used for CAD comparison, dimensional analysis, deviation maps, reverse engineering and product validation.',
    hotspots: [
      ['ATOS Core Scanner', 'atosInfo', 78, 42],
      ['Scan Part', 'atosPart', 37, 26],
      ['GOM / ATOS Report', 'atosReport', 57, 26],
      ['Go to Surface Measurement and Prototyping', 'surface', 84, 16],
      ['Back to CMM', 'cmm', 4, 84]
    ]
  },

  surface: {
    title: 'Advanced Materials & Surface Engineering Lab',
    photo: 'assets/surface_room_clean.png',
    panelTitle: 'Advanced Materials & Surface Engineering Lab',
    panel: 'A multidisciplinary laboratory combining additive manufacturing, material characterization and precision surface metrology. The facility integrates FDM 3D printing, moisture analysis, optical profile measurement and surface roughness evaluation to accelerate product development, validate manufacturing processes and ensure compliance with customer requirements.',
    hotspots: [
      ['Engineering Lab Overview', 'room2Overview', 10, 08],
      ['3D Printer', 'printer', 18, 50],
      ['XM66 Moisture', 'xm66', 35, 50],
      ['Keyence Profilometer', 'profilometer', 50, 30],
      ['Roughness Tester', 'roughness', 70, 50],
      ['Go to Storage', 'storage', 84, 18]
    ]
  },

  storage: {
    title: 'STORAGE',
    photo: 'assets/storage_room_clean.png',
    panelTitle: 'STORAGE - Golden samples, Devices, Tools.',
    panel: 'Area for standard parts, devices, accessories, technical boxes and validated samples.',
    hotspots: [
      ['Reference Parts', 'referenceParts', 66, 62],
      ['Fixtures / Gauges', 'fixtures', 46, 27],
      ['Prototype Storage', 'prototype', 69, 22],
      ['Reports Center', 'reports', 86, 36],
      ['Back to Entrance', 'entrance', 2, 78]
    ]
  },

  reports: {
    title: 'REPORTS CENTER',
    html: `
      <div class="homeBg"></div>
      <div class="floorGrid"></div>
      <div class="hero">
        <h1>ENGINEERING RESOURCE CENTER</h1>
        <p>Explore sample CMM reports, ATOS/GOM analyses, SPC capability studies, PPAP documentation, laboratory presentations and technical brochures, highlighting our engineering capabilities and reporting standards.</p>
        <a class="linkBtn" href="assets/Bracing - Blind Cover - 004 _ 31.01.24 - BR 174 680 53 01 E1_16.02.2024.PDF" target="_blank">CMM Report</a>
        <a class="linkBtn" href="assets/RC_Poincon_de_forme_17_06_2025.pdf.pdf" target="_blank">ATOS Report</a>
        <a class="linkBtn" href="assets/fisa_xr_capabilitate.pdf" target="_blank">Fisa X-R / Capabilitate</a>
        <a class="linkBtn" href="assets/rnr_capabilities_brochure.pdf" target="_blank">RNR Capabilities Brochure</a>
        <a class="linkBtn" href="assets/rnr_laboratoare_2026.pdf" target="_blank">RNR Laboratory Presentation</a>
      </div>
      <div class="cards">
        <div class="card"><b>CMM Reports</b><span>Dimensional report, GD&T, position, perpendicularity and deviation display.</span></div>
        <div class="card"><b>ATOS Reports</b><span>Color map, CAD comparison and visual report for customer discussion.</span></div>
        <div class="card"><b>Capability</b><span>X-R chart, SPC, Cp/Cpk, Pp/Ppk and process trend.</span></div>
      </div>
    `
  }
};

const MODALS = {
  overview: {
    title: 'Laboratory Overview',
    body: `
      <p>RONERA Rubber - Plastic Division Metrology & Technical Support Laboratory integrates CMM measurement, 3D optical scanning, surface inspection, material moisture control, prototyping and technical reporting.</p>
      <p>Supported capabilities: CMM inspection, 3D scanning, GD&T, CAD vs part, roughness, capability, PPAP, dimensional reports and audit support.</p>
      <a class="linkBtn" href="assets/rnr_capabilities_brochure.pdf" target="_blank">Open Brochure</a>
      <a class="linkBtn" href="assets/rnr_laboratoare_2026.pdf" target="_blank">Open Laboratory Presentation</a>
    `
  },

  contact: {
    title: 'Contact',
    body: `
      <p><b>S.C. RONERA RUBBER S.A.</b><br>Str. Serelor, Nr. 3, 117045, Bascov, Arges, Romania.</p>
      <p>office@ronera.ro | +40 248 270 390</p>
      <p>e.gheorghe@ronera.ro | +40 746 050 426</p>
      <p>Ing. Dipl. Eduard GHEORGHE</p>
    `
  },

  cmmInfo: {
    title: 'Hexagon GLOBAL Advantage CMM',
    body: `
      <div class="modalGrid">
        <img src="assets/cmm_room_clean.png" alt="CMM Room">
        <div>
          <p>CMM for advanced dimensional inspection, tactile measurement and CMM scanning. Use for injection molded parts, prototypes, devices and technical components.</p>
          <p>Capabilities: GD&T, position, perpendicularity, flatness, profile, PPAP, audit and process support.</p>
          <a class="linkBtn" href="assets/Bracing - Blind Cover - 004 _ 31.01.24 - BR 174 680 53 01 E1_16.02.2024.PDF" target="_blank">Open CMM Report</a>
        </div>
      </div>
      <div class="gallery">
  <img src="assets/raport1.png" onclick="openImage('assets/raport1.png')">
  <img src="assets/warpage and measurement.png" onclick="openImage('assets/warpage and measurement.png')">
  <img src="assets/Analiza concentricitate.png" onclick="openImage('assets/Analiza concentricitate.png')">
</div>
    `
  },

  cmmWorkstation: {
    title: 'PC-DMIS Workstation',
    body: `
      <div class="modalGrid">
        <img src="assets/cmm1monitor.png" alt="CMM Workstation">
        <div>
          <p>Dedicated workstation for the Hexagon DEA GLOBAL Advantage CMM system 09.15.08. This is where inspection programs are developed, automatic measurements are performed by tactile probing and continuous scanning, GD&T features are analyzed and full dimensional reports are generated for product validation, PPAP and technical communication with customers.</p>
          <p>Measuring volume 800 × 1500 × 800 mm, Renishaw PH10M automatic indexing head and PC-DMIS software for ISO 10360 compliant inspections, used in the automotive industry and precision engineering.</p>
          <p>CMM DEA GLOBAL Advantage, the performance declared by the manufacturer reaches up to MPEE = 1.4 + L/333 µm, ensuring high repeatability and accuracy for industrial metrology applications.</p>
        </div>
      </div>
    `
  },

  cmmReports: {
    title: 'CMM Reports',
    body: `
      <p>Examples of CMM reporting: dimensional report, GD&T graphical report, position, perpendicularity, flatness and deviation analysis.</p>
      <a class="linkBtn" href="assets/Bracing - Blind Cover - 004 _ 31.01.24 - BR 174 680 53 01 E1_16.02.2024.PDF" target="_blank">CMM Report</a>
      <a class="linkBtn" href="assets/cmm_thumb_nut_report.pdf" target="_blank">Thumb Nut Report</a>
      <a class="linkBtn" href="assets/cmm_thumb_screw_report.pdf" target="_blank">Thumb Screw Report</a>
      <iframe class="reportFrame" src="assets/cmm_manifold_report.pdf"></iframe>
    `
  },

  atosInfo: {
    title: 'ATOS Core / GOM Inspect',
    body: `
      <div class="modalGrid">
        <img src="assets/atos_station1.png" alt="ATOS Station">
        <div>
          <p>Engineering Intelligence Starts Here</p>
          <p>Here, millions of points captured through 3D scanning are transformed into essential information for technical decision-making. The software platform enables advanced dimensional analysis, CAD comparison, GD&T evaluation, reverse engineering, PPAP and FAI documentation, as well as the development of professional reports used for product validation, manufacturing process optimization and technical communication with OEM and Tier 1 partners.</p>
        </div>
      </div>
    `
  },

  atosPart: {
    title: 'ATOS Scan Part',
    body: `
      <div class="modalGrid">
        <img src="assets/atos_part_scan.jpg" alt="ATOS part scan">
        <div>
          <p>This stage represents the starting point of digital inspection. </p>
          <p>The component is scanned with high-resolution optical technology, generating a complete 3D model used for CAD comparison, dimensional analysis, GD&T feature evaluation, reverse engineering and validation of compliance with customer requirements.</p>
        </div>
      </div>
    `
  },

  atosReport: {
    title: 'GOM / ATOS Report',
    body: `
      <div class="modalGrid">
        <img src="assets/1.png" alt="GOM Report">
        <div>
          <p>GOM Inspect software used for 3D dimensional analysis, CAD comparison, deviation maps and GD&T feature evaluation.</p>
          <p>Supports PPAP validation, FAI, reverse engineering, defect cause analysis, manufacturing process optimization and technical communication with customers through comprehensive graphical reports.</p>
        </div>
      </div>
    `
  },

  room2Overview: {
    title: 'Surface / Material / Prototype',
    body: `
      <div class="modalGrid">
        <img src="assets/room2_surface_overview.png" alt="Room 2 Overview">
        <div>
          <p>Auxiliary validation equipment: 3D printer, XM66 moisture analyzer, Keyence profilometer and Insize roughness meter.</p>
          <p>The area closes the technical flow: material, surface, prototype, device and reporting.</p>
        </div>
      </div>
    `
  },

  printer: {
    title: '3D Printer - 3DKreator',
    body: `
      <div class="modalGrid">
        <img src="assets/3D_printer.png" alt="3D Printer">
        <div>
          <p>3D printer for rapid prototyping, fixture concepts, supports, form checks and development assistance.</p>
          <p>Role: rapid transformation from CAD idea to physical part for internal validation.</p>
        </div>
      </div>
    `
  },

  xm66: {
    title: 'Precisa XM-66 Moisture Analyzer',
    body: `
      <div class="modalGrid">
        <img src="assets/PrecisaXM66.png" alt="Precisa XM-66 Moisture Analyzer">
        <div>
          <p>Moisture analyzer for material control and plastic injection process support.</p>
          <p>Role: checking material condition before process and supporting investigations regarding dimensional variation.</p>
        </div>
      </div>
    `
  },

  profilometer: {
    title: 'Keyence Profilometer',
    body: `
      <div class="modalGrid">
        <img src="assets/Keyence.png" alt="Keyence Profilometer">
        <div>
          <p>Optical profilometer for 2D measurement, profile checks, local elevations and functional areas.</p>
          <p>Useful for quick checks, assisted visual inspection and local geometric analysis.</p>
        </div>
      </div>
    `
  },

  roughness: {
    title: 'Insize Roughness Tester',
    body: `
      <div class="modalGrid">
        <img src="assets/Insize.png" alt="Roughness Tester">
        <div>
          <div>
    <p>INSIZE surface roughness tester mounted on a rigid measuring stand for highly stable and repeatable surface texture evaluation. The system measures a comprehensive range of roughness parameters in accordance with ISO 4287, ISO 4288 and ISO 21920, including Ra, Rq, Rz, Rt, Rp, Rv, Rc, RSm, Rmr(c), Rsk, Rku, Rmax and other functional surface characteristics.</p>

    <p>The dedicated fixture enables reliable measurements on flat surfaces, external and internal cylindrical features, shafts, bores, sealing grooves, O-ring seats and other functional geometries, minimizing operator influence while ensuring excellent repeatability.</p>

    <p>Typical applications include validation of machining and molding processes, inspection of sealing and contact surfaces, wear analysis, process optimization, product conformity verification, and generation of technical documentation for PPAP, FAI and OEM customer requirements.</p>
</div>
      </div>
    `
  },

  referenceParts: {
    title: 'Reference Parts',
    body: `
      <p>Area for validated parts, reference samples, audit support parts and historical comparisons.</p>
      <img src="assets/arhivapiese.png" style="width:100%;border-radius:16px;border:1px solid var(--line)">
    `
  },

  fixtures: {
    title: 'Fixtures / Gauges',
    body: `
      <p>Devices, accessories and fixtures used for measurement, control and repeatability.</p>
      <img src="assets/fixture.png" style="width:100%;border-radius:16px;border:1px solid var(--line)">
    `
  },

  prototype: {
    title: 'Prototype Storage',
    body: `
      <p>Area for prototypes, development parts, and technical support for industrialization.</p>
      <img src="assets/proto.png" style="width:100%;border-radius:16px;border:1px solid var(--line)">
    `
  }
};

function loadScene(name){
  const s = SCENES[name];
  if(!s) return;

  document.querySelectorAll('.nav').forEach(button => {
    button.classList.toggle('active', button.dataset.scene === name);
  });

  title.textContent = s.title;

  if(s.html){
    scene.className = 'scene ' + name;
    scene.innerHTML = s.html;
    return;
  }

  scene.className = 'scene photo ' + name;
  scene.innerHTML = `
    <div class="roomPhoto" style="background-image:url('${s.photo}')"></div>
    <div class="cleanMask"></div>
    <div class="panel3d">
      <h2>${s.panelTitle}</h2>
      <p>${s.panel}</p>
    </div>
  `;
  const isMobile = window.innerWidth <= 768;

if (isMobile) {
    scene.style.transform = "scale(1)";
    scene.style.transformOrigin = "top left";
} else {
    scene.style.transform = "";
    scene.style.transformOrigin = "";
}

  s.hotspots.forEach(h => {
    const btn = document.createElement('button');
    btn.className = 'hotspot';
    btn.style.left = h[2] + '%';
    btn.style.top = h[3] + '%';
    btn.textContent = h[0];
    btn.onclick = () => handleHotspot(h[1]);
    scene.appendChild(btn);
  });
}

function handleHotspot(id){
  if(SCENES[id]){
    loadScene(id);
    return;
  }

  const content = MODALS[id];
  if(content){
    openModal(content.title, content.body);
  }
}

function openModal(t,b){
  modalTitle.textContent = t;
  modalBody.innerHTML = b;
  modal.classList.remove('hidden');
}

function openImage(src){
  openModal('Image Preview', `<img src="${src}" style="width:100%;border-radius:16px;border:1px solid var(--line)">`);
}

document.getElementById('closeModal').onclick = () => {
  modal.classList.add('hidden');
};

modal.onclick = e => {
  if(e.target === modal){
    modal.classList.add('hidden');
  }
};

document.querySelectorAll('.nav').forEach(button => {
  button.onclick = () => loadScene(button.dataset.scene);
});

document.getElementById('auditMode').onclick = () => {
  const sequence = ['entrance','cmm','atos','surface','storage','reports'];
  let i = 0;
  loadScene(sequence[i]);

  const timer = setInterval(() => {
    i++;
    if(i >= sequence.length){
      clearInterval(timer);
      return;
    }
    loadScene(sequence[i]);
  }, 4200);
};

document.addEventListener('keydown', e => {
  const keys = ['home','entrance','cmm','atos','surface','storage','reports'];

  if(e.key >= '1' && e.key <= '7'){
    loadScene(keys[Number(e.key) - 1]);
  }

  if(e.key === 'Escape'){
    modal.classList.add('hidden');
  }
});

loadScene('home');
window.addEventListener("resize", () => {

    const active = document.querySelector(".nav.active");

    if (active) {
        loadScene(active.dataset.scene);
    }

});
