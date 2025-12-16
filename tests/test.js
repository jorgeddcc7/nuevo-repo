const SECCIONES = [
  { id: "comercio", name: "Comercio Internacional (general)", exams: 10 },
  { id: "incoterms", name: "Incoterms", exams: 4 },
  { id: "logistica", name: "Logística", exams: 4 },
  { id: "gestion-adm", name: "Gestión Administrativa", exams: 4 },
  { id: "transporte", name: "Transporte", exams: 4 },
  { id: "casos-practicos", name: "Casos prácticos", exams: 10 }
];

function getLevel(num, sectionId) {
  // Comercio Internacional y Casos Prácticos
  if (sectionId === "comercio" || sectionId === "casos-practicos") {
    if ([1,2].includes(num)) return "Fácil";
    if ([3,4,5].includes(num)) return "Medio";
    if ([6,7,8].includes(num)) return "Difícil";
    return "Experto"; // 9,10
  }

  // Para secciones de 4 exámenes
  if (num === 1) return "Fácil";
  if (num === 2) return "Medio";
  if (num === 3) return "Difícil";
  return "Experto";
}

const sectionsGrid = document.getElementById("sections-grid");
const examsPanel = document.getElementById("exams-panel");
const examsGrid = document.getElementById("exams-grid");
let currentSection = null;

/* ====== TARJETAS DE SECCIÓN ====== */
SECCIONES.forEach(sec => {
  const card = document.createElement("div");
  card.className = "section-card";

  let desc = "";
  if (sec.id === "comercio") {
    desc = "10 exámenes · Niveles: Fácil → Experto";
  } else if (sec.id === "casos-practicos") {
    desc = "10 casos prácticos";
  } else {
    desc = "4 exámenes · Niveles: Fácil → Experto";
  }

  card.innerHTML = `
    <h3>${sec.name}</h3>
    <p class="small-desc">${desc}</p>
    <div style="display:flex; gap:10px; margin-top:10px;">
      <button class="boton-calcular start-btn" data-section="${sec.id}">
        Seleccionar
      </button>
    </div>
  `;
  sectionsGrid.appendChild(card);
});

/* ====== EVENTOS ====== */
document.addEventListener("click", (ev) => {
  const secBtn = ev.target.closest("[data-section]");
  if (secBtn) {
    currentSection = secBtn.dataset.section;
    showExams(currentSection);
  }

  const examBtn = ev.target.closest("[data-exam]");
  if (examBtn) {
    const examNum = examBtn.dataset.exam;
    const url = `./exams.html?section=${encodeURIComponent(currentSection)}&exam=${encodeURIComponent(examNum)}`;
    window.location.href = url;
  }

  if (ev.target.id === "back-btn") {
    examsPanel.style.display = "none";
    sectionsGrid.style.display = "grid";
  }
});

/* ====== MOSTRAR EXÁMENES ====== */
function showExams(sectionId) {
  examsGrid.innerHTML = "";
  sectionsGrid.style.display = "none";
  examsPanel.style.display = "block";

  const section = SECCIONES.find(s => s.id === sectionId);

  document.getElementById("exams-title").textContent =
    `Exámenes — ${section.name}`;

  for (let i = 1; i <= section.exams; i++) {
    const level = getLevel(i, section.id);

    const card = document.createElement("div");
    card.className = "exam-card";
    card.innerHTML = `
      <div class="exam-left">
        <div class="exam-num">${section.id === "casos-practicos" ? "Caso" : "Examen"} ${i}</div>
        <div class="exam-level">${level}</div>
      </div>
      <div class="exam-actions">
        <button class="boton-calcular" data-exam="${i}">Empezar</button>
      </div>
    `;
    examsGrid.appendChild(card);
  }
}

document.getElementById("mostrar-todos").addEventListener("click", function() {
    var itemsOcultos = document.querySelectorAll(".glosario-oculto");
    itemsOcultos.forEach(function(item) {
        item.style.display = "table-row"; // Muestra los términos ocultos
    });
    this.style.display = "none"; // Oculta el botón una vez se presiona
});

function openModal(id, event) {
  event.preventDefault(); // ¡Evita el salto hacia arriba!
    document.getElementById('modal-' + id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById('modal-' + id).style.display = 'none';
}

    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    
    const GA_MEASUREMENT_ID = 'G-9G78K6JBFB';
    
    if (!localStorage.getItem('cookies-analytics')) {
        banner.style.display = 'block';
    } else if (localStorage.getItem('cookies-analytics') === 'accepted') {
        banner.style.display = 'none';
        loadAnalytics();
    } else {
        banner.style.display = 'none';
    }
    
      // Función para cargar Google Analytics
    function loadAnalytics() {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);
    
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
    }
    
      // Aceptar cookies
    acceptBtn.onclick = () => {
        localStorage.setItem('cookies-analytics', 'accepted');
        loadAnalytics();
        banner.style.display = 'none';
    };
    
      // Rechazar cookies
    rejectBtn.onclick = () => {
        localStorage.setItem('cookies-analytics', 'rejected');
        banner.style.display = 'none';
    };
    
      // Si ya aceptó anteriormente, cargar Analytics automáticamente
    if (localStorage.getItem('cookies-analytics') === 'accepted') {
        loadAnalytics();
    }

    function savePreferences() {
    const analiticas = document.getElementById('cookies-analiticas').checked;
    const marketing = document.getElementById('cookies-marketing').checked;

  // Guarda en localStorage (o cookies)
    localStorage.setItem('cookies_analiticas', analiticas);
    localStorage.setItem('cookies_marketing', marketing);

    alert('Preferencias guardadas.');

    closeModal('preferencias');

    if (!analiticas) {
    // Desactivar Google Analytics (puedes borrar cookies o bloquear scripts)
        console.log('Google Analytics desactivado');
    } else {
        console.log('Google Analytics activado');
    }
}
