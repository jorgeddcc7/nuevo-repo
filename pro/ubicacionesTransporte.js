const ubicacionesTransporte = {
  // --------- UNIÓN EUROPEA (27) ---------
  "Alemania": {
    mar: ["Hamburgo", "Bremerhaven", "Bremen"],
    aire: ["Frankfurt", "Múnich"]
  },
  "Austria": {
    mar: [],
    aire: ["Viena"]
  },
  "Bélgica": {
    mar: ["Amberes", "Zeebrugge"],
    aire: ["Bruselas"]
  },
  "Bulgaria": {
    mar: ["Varna", "Burgas"],
    aire: ["Sofía"]
  },
  "Chequia": {
    mar: [],
    aire: ["Praga"]
  },
  "Chipre": {
    mar: ["Limassol", "Larnaca", "Vasilikos"],
    aire: ["Larnaca", "Pafos"]
  },
  "Croacia": {
    mar: ["Rijeka", "Split", "Ploce"],
    aire: ["Zagreb"]
  },
  "Dinamarca": {
    mar: ["Aarhus", "Copenhague", "Fredericia"],
    aire: ["Copenhague-Kastrup"]
  },
  "Eslovaquia": {
    mar: [],
    aire: ["Bratislava"]
  },
  "Eslovenia": {
    mar: ["Koper"],
    aire: ["Liubliana"]
  },
  "España": {
    mar: ["Valencia", "Algeciras", "Barcelona", "Bilbao", "Las Palmas"],
    aire: ["Madrid-Barajas", "Barcelona-El Prat", "Zaragoza"]
  },
  "Estonia": {
    mar: ["Tallin"],
    aire: ["Tallin"]
  },
  "Finlandia": {
    mar: ["Helsinki", "Turku", "Kotka–Hamina"],
    aire: ["Helsinki-Vantaa"]
  },
  "Francia": {
    mar: ["Le Havre", "Marsella", "Dunkerque"],
    aire: ["París Charles de Gaulle"]
  },
  "Grecia": {
    mar: ["El Pireo", "Tesalónica"],
    aire: ["Atenas"]
  },
  "Hungría": {
    mar: [],
    aire: ["Budapest"]
  },
  "Irlanda": {
    mar: ["Dublín", "Cork", "Shannon–Foynes"],
    aire: ["Dublín"]
  },
  "Italia": {
    mar: ["Génova", "Livorno", "Trieste", "Gioia Tauro", "Venecia"],
    aire: ["Roma Fiumicino", "Milán Malpensa"]
  },
  "Letonia": {
    mar: ["Riga", "Ventspils"],
    aire: ["Riga"]
  },
  "Lituania": {
    mar: ["Klaipėda"],
    aire: ["Vilna"]
  },
  "Luxemburgo": {
    mar: [],
    aire: ["Luxemburgo"]
  },
  "Malta": {
    mar: ["Valletta", "Malta Freeport"],
    aire: ["Luqa"]
  },
  "Países Bajos": {
    mar: ["Róterdam", "Ámsterdam"],
    aire: ["Ámsterdam Schiphol"]
  },
  "Polonia": {
    mar: ["Gdansk", "Gdynia", "Szczecin–Świnoujście"],
    aire: ["Varsovia"]
  },
  "Portugal": {
    mar: ["Sines", "Lisboa", "Oporto"],
    aire: ["Lisboa"]
  },
  "Rumanía": {
    mar: ["Constanza"],
    aire: ["Bucarest"]
  },
  "Suecia": {
    mar: ["Gotemburgo", "Helsingborg"],
    aire: ["Estocolmo-Arlanda"]
  },

  // --------- RESTO DE PAÍSES ---------

  "Arabia Saudita": {
    mar: ["Jeddah", "Dammam", "King Abdullah Port"],
    aire: ["Riad", "Jeddah"]
  },
  "Argentina": {
    mar: ["Buenos Aires", "Rosario", "Bahía Blanca", "Dock Sud"],
    aire: ["Buenos Aires - Ezeiza"]
  },
  "Argelia": {
    mar: ["Argel", "Orán"],
    aire: ["Argel"]
  },
  "Australia": {
    mar: ["Sydney", "Melbourne", "Brisbane"],
    aire: ["Sydney", "Melbourne"]
  },
  "Bolivia": {
    mar: [],
    aire: ["Santa Cruz", "La Paz"]
  },
  "Bosnia y Herzegovina": {
    mar: [],
    aire: ["Sarajevo"]
  },
  "Brasil": {
    mar: ["Santos", "Rio de Janeiro", "Paranaguá", "Itajaí"],
    aire: ["Sao Paulo-Guarulhos"]
  },
  "Canadá": {
    mar: ["Vancouver", "Montreal"],
    aire: ["Toronto", "Vancouver", "Prince Rupert", "Halifax"]
  },
  "Chile": {
    mar: ["Valparaíso", "San Antonio"],
    aire: ["Santiago"]
  },
  "China": {
    mar: ["Shanghai", "Shenzhen", "Ningbo", "Guangzhou", "Qingdao"],
    aire: ["Hong-Kong", "Beijing Capital", "Shanghai Pudong", "Guangzhou"]
  },
  "Colombia": {
    mar: ["Cartagena", "Buenaventura", "Santa Marta", "Barranquilla"],
    aire: ["Bogotá"]
  },
  "Corea del Sur": {
    mar: ["Busan", "Incheon"],
    aire: ["Seúl Incheon"]
  },
  "Costa de Marfil": {
    mar: ["Abiyán"],
    aire: ["Abiyán"]
  },
  "Costa Rica": {
    mar: ["Puerto Limón", "Caldera"],
    aire: ["San José"]
  },
  "Cuba": {
    mar: ["La Habana"],
    aire: ["La Habana"]
  },
  "Egipto": {
    mar: ["Alejandría", "Port Said"],
    aire: ["El Cairo"]
  },
  "Emiratos Árabes Unidos": {
    mar: ["Jebel Ali (Dubái)", "Abu Dhabi"],
    aire: ["Dubái", "Abu Dhabi"]
  },
  "El Salvador": {
    mar: [],
    aire: ["San Salvador"]
  },
  "Estados Unidos": {
    mar: ["Los Ángeles", "Nueva York", "Houston", "Long Beach", "Houston", "Savannah"],
    aire: ["Los Ángeles", "Chicago", "Nueva York JFK"]
  },
  "Filipinas": {
    mar: ["Manila", "Cebu"],
    aire: ["Manila"]
  },
  "Guatemala": {
    mar: ["Puerto Quetzal", "Santo Tomás de Castilla"],
    aire: ["Ciudad de Guatemala"]
  },
  "Honduras": {
    mar: ["Puerto Cortés"],
    aire: ["Tegucigalpa"]
  },
  "India": {
    mar: ["Mumbai", "Chennai"],
    aire: ["Delhi", "Mumbai"]
  },
  "Indonesia": {
    mar: ["Yakarta", "Surabaya"],
    aire: ["Yakarta"]
  },
  "Israel": {
    mar: ["Haifa", "Ashdod"],
    aire: ["Tel Aviv - Ben Gurion"]
  },
  "Jamaica": {
    mar: ["Kingston"],
    aire: ["Kingston"]
  },
  "Japón": {
    mar: ["Yokohama", "Kobe"],
    aire: ["Tokio Narita", "Osaka Kansai"]
  },
  "Líbano": {
    mar: ["Beirut"],
    aire: ["Beirut"]
  },
  "México": {
    mar: ["Manzanillo", "Veracruz", "Lázaro Cárdenas", "Altamira"],
    aire: ["Ciudad de México"]
  },
  "Nicaragua": {
    mar: [],
    aire: ["Managua"]
  },
  "Nueva Zelanda": {
    mar: ["Auckland"],
    aire: ["Auckland"]
  },
  "Noruega": {
    mar: ["Oslo"],
    aire: ["Oslo"]
  },
  "Panamá": {
    mar: ["Balboa", "Colón"],
    aire: ["Ciudad de Panamá"]
  },
  "Paraguay": {
    mar: [],
    aire: ["Asunción"]
  },
  "Perú": {
    mar: ["Callao"],
    aire: ["Lima"]
  },
  "Qatar": {
    mar: ["Hamad Port"],
    aire: ["Doha Hamad"]
  },
  "Reino Unido": {
    mar: ["Felixstowe", "Southampton", "Liverpool"],
    aire: ["Londres Heathrow"]
  },
  "República Dominicana": {
    mar: ["Caucedo", "Haina"],
    aire: ["Santo Domingo"]
  },
  "Rusia": {
    mar: ["San Petersburgo", "Vladivostok", "Ust-Luga", "Novorossiysk"],
    aire: ["Moscú Sheremétievo"]
  },
  "Singapur": {
    mar: ["Puerto de Singapur"],
    aire: ["Changi"]
  },
  "Sudáfrica": {
    mar: ["Durban", "Ciudad del Cabo"],
    aire: ["Johannesburgo"]
  },
  "Suiza": {
    mar: [],
    aire: ["Zúrich", "Ginebra"]
  },
  "Tailandia": {
    mar: ["Laem Chabang"],
    aire: ["Bangkok Suvarnabhumi"]
  },
  "Turquía": {
    mar: ["Estambul", "Mersin"],
    aire: ["Estambul"]
  },
  "Uruguay": {
    mar: ["Montevideo", "Nueva Palmira"],
    aire: ["Montevideo"]
  },
  "Venezuela": {
    mar: ["La Guaira", "Puerto Cabello", "Maracaibo"],
    aire: ["Caracas"]
  },
  "Vietnam": {
    mar: ["Haiphong", "Ho Chi Minh"],
    aire: ["Hanoi", "Ho Chi Minh"]
  }
};

const transporteCorrecto = {
  maritimo: "Marítimo",
  aereo: "Aéreo",
  terrestre: "Terrestre",
  ferroviario: "Ferroviario",
  multimodal: "Multimodal"
};

// 🔹 Recomendaciones de Incoterm según transporte
const recomendacionesTransporte = {
    "mar": { evitar: [], recomendar: ["FCA", "CIP"] },
    "aereo": { evitar: ["FAS", "FOB", "CFR", "CIF"], recomendar: ["FCA", "CIP"] },
    "terrestre": { evitar: [], recomendar: [] },
    "ferroviario": { evitar: [], recomendar: [] },
    "multimodal": { evitar: [], recomendar: ["FCA", "CIP"] }
};

function actualizarPuertosAereopuertos(pais, transporte, tipo) {
    // tipo: "salida" o "llegada"
    const contenedor = document.getElementById(`contenedor-puerto-aeropuerto-${tipo}`);
    const select = document.getElementById(`select-puerto-aeropuerto-${tipo}`);
    if (!select || !contenedor || !pais) return;

    select.innerHTML = "";

    // Mapear transporte a clave correcta
    const transporteKey = transporte === "maritimo" ? "mar" : transporte;

    // Mostrar solo si transporte es marítimo o aéreo
    if (transporteKey === "mar" || transporteKey === "aereo") {
        contenedor.style.display = "block";
    } else {
        contenedor.style.display = "none";
        return;
    }

    const infoPais = ubicacionesTransporte[pais];
    if (!infoPais) return;

    if (transporteKey === "mar") {
        if (infoPais.mar.length === 0) {
            select.innerHTML = `<option disabled>⚠️ ${pais} no tiene puerto marítimo</option>`;
            select.disabled = true;
        } else {
            infoPais.mar.forEach(puerto => {
                const option = document.createElement("option");
                option.value = puerto;
                option.textContent = puerto;
                select.appendChild(option);
            });
            select.disabled = false;
        }
    } else if (transporteKey === "aereo") {
        infoPais.aire.forEach(aeropuerto => {
            const option = document.createElement("option");
            option.value = aeropuerto;
            option.textContent = aeropuerto;
            select.appendChild(option);
        });
        select.disabled = false;
    }
}

// 🔹 Función para mostrar recomendaciones de Incoterm según transporte
function mostrarRecomendacionesIncoterm(transporte) {
    const recomendacionDiv = document.getElementById("recomendaciones-incoterm");
    if (!recomendacionDiv) return;

    const { evitar, recomendar } = recomendacionesTransporte[transporte] || { evitar: [], recomendar: [] };
    let html = "";
    if (evitar.length) html += `<p style="color:#f39c12;">⚠️ Evitar: ${evitar.join(", ")}</p>`;
    if (recomendar.length) html += `<p style="color:#2ecc71;">✅ Recomendado: ${recomendar.join(", ")}</p>`;
    recomendacionDiv.innerHTML = html;
}

function actualizarIncotermsDisponibles(transporte) {
    const incotermSelect = document.getElementById("incoterm-select");
    if (!incotermSelect) return;

    const todosIncoterms = ["EXW","FCA","FAS","FOB","CFR","CIF","CPT","CIP","DAP","DPU","DDP"];
    let incotermsFiltrados = [...todosIncoterms];

    if (["aereo", "terrestre", "ferroviario", "multimodal"].includes(transporte)) {
        incotermsFiltrados = incotermsFiltrados.filter(i => !["FAS","FOB","CFR","CIF"].includes(i));
    }

    const seleccionActual = incotermSelect.value;
    incotermSelect.innerHTML = "";
    incotermsFiltrados.forEach(inc => {
        const option = document.createElement("option");
        option.value = inc;
        option.textContent = inc;
        incotermSelect.appendChild(option);
    });

    const paramURL = new URLSearchParams(window.location.search).get('incoterm');
    const incotermPrioritario = paramURL ? paramURL.toUpperCase() : seleccionActual;

    if (incotermsFiltrados.includes(incotermPrioritario)) {
        incotermSelect.value = incotermPrioritario;
    } else {
        incotermSelect.value = incotermsFiltrados[0];
    }
}

// 🔹 Eventos para actualizar automáticamente cuando cambien transporte o país
document.getElementById("tipo-transporte").addEventListener("change", () => {
    const transporte = document.getElementById("tipo-transporte").value;

    actualizarPuertosAereopuertos(document.getElementById("lugar-exportacion").value, transporte, "salida");
    actualizarPuertosAereopuertos(document.getElementById("lugar-importacion").value, transporte, "llegada");
    mostrarRecomendacionesIncoterm(transporte);

    // 🔹 Filtrar Incoterms según transporte
    actualizarIncotermsDisponibles(transporte);
});

document.getElementById("lugar-exportacion").addEventListener("change", () => {
    actualizarPuertosAereopuertos(document.getElementById("lugar-exportacion").value, document.getElementById("tipo-transporte").value, "salida");
});

document.getElementById("lugar-importacion").addEventListener("change", () => {
    actualizarPuertosAereopuertos(document.getElementById("lugar-importacion").value, document.getElementById("tipo-transporte").value, "llegada");
});

// Preseleccionar Incoterm desde URL al cargar la página
(function() {
    const paramURL = new URLSearchParams(window.location.search).get('incoterm');
    if (!paramURL) return;
    
    const incoterm = paramURL.toUpperCase();
    
    // Esperar a que todos los scripts terminen de cargar
    window.addEventListener('load', function() {
        const select = document.getElementById('incoterm-select');
        if (!select) return;
        
        // Intentar varias veces por si algo lo sobreescribe
        [0, 100, 300].forEach(delay => {
            setTimeout(() => {
                if (select.querySelector(`option[value="${incoterm}"]`)) {
                    select.value = incoterm;
                }
            }, delay);
        });
    });
})();
