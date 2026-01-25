function calcular() {
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const alto = parseFloat(document.getElementById("alto").value);
    const pesoReal = parseFloat(document.getElementById("pesoReal").value);

    if (!largo || !ancho || !alto) {
        document.getElementById("resultado").innerHTML =
          "<p>Introduce todas las dimensiones.</p>";
        document.getElementById("resultado").style.display = "block";
        return;
    }

    const volumen = (largo * ancho * alto) / 1000000;
    const pesoVolumetrico = (largo * ancho * alto) / 6000;

    let pesoFacturable = pesoVolumetrico;
    let mensajePeso = "Se aplica el peso volumétrico.";

    if (!isNaN(pesoReal) && pesoReal > pesoVolumetrico) {
        pesoFacturable = pesoReal;
        mensajePeso = "Se aplica el peso real.";
    }

    document.getElementById("resultado").innerHTML = `
        <p><strong>Volumen:</strong> ${volumen.toFixed(3)} m³</p>
        <p><strong>Peso volumétrico:</strong> ${pesoVolumetrico.toFixed(2)} kg</p>
        ${!isNaN(pesoReal) ? `<p><strong>Peso facturable:</strong> ${pesoFacturable.toFixed(2)} kg</p>
        <p>${mensajePeso}</p>` : ""}
    `;

    // Mostrar el div ahora que hay resultado
    document.getElementById("resultado").style.display = "block";
}

function moverAlSiguienteInput(event) {
    if (event.key === 'Enter') {
        const inputs = Array.from(document.querySelectorAll('input[type="number"], input[type="checkbox"], input[type="range"]'));
        const index = inputs.indexOf(event.target);

        if (index >= 0 && index < inputs.length - 1) {
            inputs[index + 1].focus();
            event.preventDefault();
        }
    }
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('keydown', moverAlSiguienteInput);
});

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