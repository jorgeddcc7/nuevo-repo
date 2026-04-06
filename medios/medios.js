        // Seleccionamos todos los hotspots
        const hotspots = document.querySelectorAll('.hotspot');

        hotspots.forEach(hotspot => {
            hotspot.addEventListener('click', function(e) {
                // Evitamos que el clic se propague (importante)
                e.stopPropagation();

                // Si el que hemos pinchado ya estaba activo, lo cerramos
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    // Cerramos cualquier otro que esté abierto primero
                    hotspots.forEach(h => h.classList.remove('active'));
                    // Abrimos el actual
                    this.classList.add('active');
                }
            });
        });

        // Si el usuario pincha en cualquier otra parte de la pantalla, cerramos los globos
        document.addEventListener('click', function() {
            hotspots.forEach(h => h.classList.remove('active'));
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

document.addEventListener('DOMContentLoaded', function() {
            const searchInput = document.getElementById('searchInput');
            const blogCards = document.querySelectorAll('.blog-card');
            const noResultsMsg = document.getElementById('no-results-msg');
            const filterBtns = document.querySelectorAll('.filter-btn');

            let currentCategory = 'all'; // Por defecto muestra todo

            // Función maestra que filtra por texto y por categoría a la vez
            function filterArticles() {
                const searchTerm = searchInput.value.toLowerCase().trim();
                let hasVisibleCards = false;

                blogCards.forEach(function(card) {
                    const title = card.querySelector('h2').textContent.toLowerCase();
                    // Extraemos la categoría exacta de la tarjeta (quitando espacios extra)
                    const category = card.querySelector('.category-tag').textContent.trim();

                    // Comprobamos si coincide el texto
                    const matchesSearch = title.includes(searchTerm);
                    // Comprobamos si coincide la categoría (o si es "all")
                    const matchesCategory = (currentCategory === 'all' || category === currentCategory);

                    // Si cumple AMBAS condiciones, se muestra
                    if (matchesSearch && matchesCategory) {
                        card.style.display = 'flex';
                        hasVisibleCards = true;
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Mostrar/Ocultar mensaje de "No hay resultados"
                if (hasVisibleCards) {
                    noResultsMsg.style.display = 'none';
                } else {
                    noResultsMsg.style.display = 'block';
                }
            }

            // Cuando el usuario ESCRIBE en el buscador
            searchInput.addEventListener('input', filterArticles);

            // Cuando el usuario PINCHA en una categoría
            filterBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    // 1. Quitar la clase "active" a todos los botones
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // 2. Poner la clase "active" solo al botón pinchado
                    this.classList.add('active');
                    
                    // 3. Guardar qué categoría se ha pinchado
                    currentCategory = this.getAttribute('data-filter');
                    
                    // 4. Volver a filtrar las tarjetas
                    filterArticles();
                });
            });
        });