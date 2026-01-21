const translations = {
    es: {
        packingList: "PACKING LIST",
        exportador: "Exportador",
        importador: "Importador",
        fechaPedido: "Fecha pedido",
        fechaEnvio: "Fecha envío",
        transportista: "Transportista",
        numeroPedido: "Nº Pedido",
        poCliente: "PO Cliente",
        mercancias: "Mercancías",
        bultos: "Bultos",
        pesoUnitario: "Peso unit.",
        pesoBruto: "Peso bruto",
        pesoNeto: "Peso neto",
        descripcion: "Descripción (embalaje)",
        referencia: "Referencia",
        bultosTotales: "Bultos totales",
        pesoBrutoTotal: "Peso bruto total",
        pesoNetoTotal: "Peso neto total",
        observaciones: "Observaciones",
        firma: "Firma del exportador"
    },
    en: {
        packingList: "PACKING LIST",
        exportador: "Exporter",
        importador: "Importer",
        fechaPedido: "Order date",
        fechaEnvio: "Shipping date",
        transportista: "Carrier",
        numeroPedido: "Order No.",
        poCliente: "Customer PO",
        mercancias: "Goods",
        bultos: "Packages",
        pesoUnitario: "Unit weight",
        pesoBruto: "Gross weight",
        pesoNeto: "Net weight",
        descripcion: "Description (packaging)",
        referencia: "Reference",
        bultosTotales: "Total packages",
        pesoBrutoTotal: "Total gross weight",
        pesoNetoTotal: "Total net weight",
        observaciones: "Remarks",
        firma: "Exporter signature"
    }
};

function agregarFila() {
    const tbody = document.querySelector("#tablaMercancias tbody");
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td data-label="Bultos"><input type="number"></td>
        <td data-label="Peso unit. (g)"><input type="number"></td>
        <td data-label="Peso bruto (g)"><input type="number"></td>
        <td data-label="Peso neto (g)"><input type="number"></td>
        <td data-label="Descripción"><input type="text"></td>
        <td data-label="Referencia"><input type="text"></td>
    `;

    tbody.appendChild(fila);
}

document.getElementById("documentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    generarPackingList();
});

function generarPackingList() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");

    const languageSelect = document.getElementById("languageSelect");
    let lang = languageSelect.value; // "es" o "en"

    let y = 15;
    doc.setFont("helvetica");

    // =====================
    // TÍTULO
    // =====================
    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text(translations[lang].packingList, 105, y, { align: "center" });

    y += 10;
    doc.setFontSize(9);
    doc.setFont(undefined, "normal");

    // =====================
    // EXPORTADOR / IMPORTADOR
    // =====================
    const exportador = document.getElementById("exportador").value;
    const importador = document.getElementById("importador").value;

    doc.text(translations[lang].exportador + ":", 10, y);
    doc.text(exportador, 10, y + 5, { maxWidth: 90 });

    doc.text(translations[lang].importador + ":", 110, y);
    doc.text(importador, 110, y + 5, { maxWidth: 90 });

    y += 25;

    // =====================
    // DATOS DEL ENVÍO
    // =====================
    doc.autoTable({
        startY: y,
        theme: "grid",
        styles: { fontSize: 8 },
        headStyles: {
        fillColor: [0, 123, 255],
        },
        head: [[
            translations[lang].fechaPedido,
            translations[lang].fechaEnvio,
            translations[lang].transportista,
            translations[lang].numeroPedido,
            translations[lang].poCliente
        ]],
        body: [[
            document.getElementById("fechaPedido").value,
            document.getElementById("fechaEnvio").value,
            document.getElementById("transportista").value,
            document.getElementById("numeroPedido").value,
            document.getElementById("numeroPO").value
        ]]
    });

    y = doc.lastAutoTable.finalY + 5;

    // =====================
    // MERCANCÍAS
    // =====================
    const filas = [];
    let totalBultos = 0;
    let totalPesoBruto = 0;
    let totalPesoNeto = 0;

    document.querySelectorAll("#tablaMercancias tbody tr").forEach(tr => {
        const celdas = tr.querySelectorAll("input");

        const bultos = Number(celdas[0].value) || 0;
        const pesoBruto = Number(celdas[2].value) || 0;
        const pesoNeto = Number(celdas[3].value) || 0;

        totalBultos += bultos;
        totalPesoBruto += pesoBruto;
        totalPesoNeto += pesoNeto;

        filas.push([
            celdas[0].value,
            celdas[1].value,
            celdas[2].value,
            celdas[3].value,
            celdas[4].value,
            celdas[5].value
        ]);
    });

    doc.autoTable({
        startY: y,
        theme: "grid",
        styles: { fontSize: 8 },
        headStyles: {
        fillColor: [0, 123, 255],
        },
        head: [[
            translations[lang].bultos,
            translations[lang].pesoUnitario + " (g)",
            translations[lang].pesoBruto + " (g)",
            translations[lang].pesoNeto + " (g)",
            translations[lang].descripcion,
            translations[lang].referencia
        ]],
        body: filas
    });

    y = doc.lastAutoTable.finalY + 6;

    doc.autoTable({
        startY: y,
        theme: "grid", // MISMA estética que la tabla principal
        styles: {
            fontSize: 8,
            fontStyle: "bold"
        },
        headStyles: {
        fillColor: [0, 123, 255],
        },
        head: [[
            translations[lang].bultosTotales,
            translations[lang].pesoBrutoTotal + " (g)",
            translations[lang].pesoNetoTotal + " (g)",
        ]],
        body: [[
            totalBultos,
            totalPesoBruto.toFixed(2),
            totalPesoNeto.toFixed(2),
        ]]
    });

    y = doc.lastAutoTable.finalY + 6;

// =====================
// OBSERVACIONES + FIRMA (FIJAS ABAJO)
// =====================
    const pageHeight = doc.internal.pageSize.height;
    const bloqueAltura = 55; // espacio total que ocupa observaciones + firma
    const margenInferior = 15;

    // Si no hay espacio suficiente, nueva página
    if (y + bloqueAltura > pageHeight - margenInferior) {
        doc.addPage();
        y = 15;
    }

    // Posicionar el bloque desde abajo
    const yBase = pageHeight - bloqueAltura;

    // Parámetros del rectángulo y margen interno
    const rectX = 10;
    const rectY = yBase;
    const rectWidth = 190;
    const rectHeight = 25;
    const padding = 4; // margen interno dentro del rectángulo

    // OBSERVACIONES
    doc.setFont(undefined, "normal");
    doc.text(translations[lang].observaciones + ":", rectX, rectY + padding); // título con margen
    doc.rect(rectX, rectY, rectWidth, rectHeight); // rectángulo
    doc.text(
        document.getElementById("observaciones").value,
        rectX + padding,
        rectY + padding + 5, // contenido dentro del rectángulo
        { maxWidth: rectWidth - padding * 2 }
    );
    // FIRMA
    doc.line(20, yBase + 36, 90, yBase + 36);
    doc.text(translations[lang].firma, 20, yBase + 41);

    doc.save("packing_list.pdf");
}

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