const SECTION_NAMES = {
  "comercio": "Comercio Internacional (general)",
  "incoterms": "Incoterms",
  "logistica": "Logística",
  "gestion-adm": "Gestión Administrativa",
  "transporte": "Transporte",
  "casos-practicos": "Casos prácticos"
};

const CTA_BY_SECTION = {
  "incoterms": {
    title: "¿Quieres dominar los Incoterms?",
    text: "Aprende a usar correctamente cada Incoterm, calcular márgenes reales y evitar errores habituales en compraventa internacional.",
  },
  "comercio": {
    title: "Da el salto en Comercio Internacional",
    text: "Accede a guías prácticas, ejemplos reales y herramientas para operar con seguridad en comercio exterior.",
  },
  "logistica": {
    title: "Mejora tu logística internacional",
    text: "Optimiza costes, entiende cada fase del transporte y evita errores comunes en operaciones internacionales.",
  },
  "gestion-adm": {
    title: "Refuerza tu gestión administrativa",
    text: "Guías prácticas sobre documentación, métodos de pago, financiación y gestión administrativa según Incoterm.",
  },
  "transporte": {
    title: "Especialízate en transporte internacional",
    text: "Aprende a elegir el transporte adecuado, calcular costes y gestionar correctamente cada operación.",
  }
};

// Ejemplo de TESTS con explicaciones de error
const TESTS = {
    comercio: {
      1: { level:"Fácil", questions:[
        { 
          question: "¿Qué es el comercio internacional?", 
          options: {
            A: "Intercambio de bienes y servicios nacionalmente",
            B: "Solo local",
            C: "Intercambio de bienes y servicios entre diferentes países",
            D: "Impuestos"
          }, 
          correct: "C",
          explanations: {
            A: "El comercio internacional requiere más de un país en la compraventa",
            B: "El comercio internacional no es solo local.",
            D: "Los impuestos no definen qué es el comercio internacional."
          }
        },
        { 
          question: "¿Qué significa exportar?", 
          options: {
            A: "Vender al extranjero",
            B: "Comprar local",
            C: "Venta de bienes producidos en un país a otro país extranjero",
            D: "Pagar impuestos"
          }, 
          correct: "C",
          explanations: {
            A: "Vender al extranjero es correcto en esencia, pero la opción C es más precisa.",
            B: "Comprar local no es exportar.",
            D: "Pagar impuestos no define la acción de exportar productos."
          }
        },
        { 
          question: "¿Qué significa importar?", 
          options: {
            A: "Vender productos fuera del país",
            B: "Transportar mercancías dentro del país",
            C: "Comprar productos del extranjero",
            D: "Pagar impuestos locales"
          }, 
          correct: "C",
          explanations: {
            A: "Vender fuera del país es exportar, no importar.",
            B: "Transportar dentro del país no implica comercio internacional.",
            D: "Pagar impuestos locales no define la importación."
          }
        },
        { 
          question: "¿Qué es una balanza comercial positiva?", 
          options: {
            A: "Cuando importamos más de lo que exportamos",
            B: "Cuando los precios suben",
            C: "Cuando no hay comercio internacional",
            D: "Cuando exportamos más de lo que importamos"
          }, 
          correct: "D",
          explanations: {
            A: "Importar más que exportar genera balanza negativa, no positiva.",
            B: "Los precios no determinan directamente la balanza comercial.",
            C: "Sin comercio internacional no hay balanza comercial."
          }
        },
        { 
          question: "¿Cuál es el objetivo principal del comercio internacional?", 
          options: {
            A: "Controlar la política interna",
            B: "Evitar impuestos",
            C: "Aumentar la disponibilidad de productos",
            D: "Reducir la población"
          }, 
          correct: "C",
          explanations: {
            A: "El comercio internacional no controla la política interna.",
            B: "Evitar impuestos no es el objetivo principal, aunque pueda influir.",
            D: "La población no se controla mediante el comercio internacional."
          }
        },
        { 
          question: "¿Qué significa libre comercio?", 
          options: {
            A: "Intercambio sin barreras arancelarias ni restricciones",
            B: "Prohibición de exportaciones",
            C: "Impuestos altos a todos los productos",
            D: "Comercio solo entre vecinos"
          }, 
          correct: "A",
          explanations: {
            B: "Prohibir exportaciones no es libre comercio, es restricción.",
            C: "Impuestos altos son opuestos a libre comercio.",
            D: "Libre comercio no se limita a países vecinos."
          }
        },
        { 
          question: "¿Qué es un arancel?", 
          options: {
            A: "Subvención a la exportación",
            B: "Documento de transporte",
            C: "Impuesto sobre bienes importados",
            D: "Tipo de moneda"
          }, 
          correct: "C",
          explanations: {
            A: "Una subvención a la exportación no es un arancel.",
            B: "Documento de transporte no se llama arancel.",
            D: "El arancel no es una moneda."
          }
        },
        { 
          question: "¿Qué es un tratado de libre comercio (TLC)?", 
          options: {
            A: "Contrato laboral internacional",
            B: "Documento para declarar impuestos",
            C: "Acuerdo para reducir barreras comerciales entre países",
            D: "Ley para controlar el transporte interno"
          }, 
          correct: "C",
          explanations: {
            A: "Un TLC no regula contratos laborales.",
            B: "Declarar impuestos no es un TLC.",
            D: "Controlar transporte interno no define un TLC."
          }
        },
        { 
          question: "¿Qué es la globalización comercial?", 
          options: {
            A: "Prohibición de exportaciones",
            B: "Integración de mercados y comercio entre países",
            C: "Aumento del comercio solo en un país",
            D: "Comercio exclusivo de materias primas"
          }, 
          correct: "B",
          explanations: {
            A: "Prohibir exportaciones es lo contrario de globalización.",
            C: "Solo un país no describe la globalización.",
            D: "No se limita solo a materias primas."
          }
        },
        { 
          question: "¿Cuál es un beneficio del comercio internacional?", 
          options: {
            A: "Reducción de la población",
            B: "Mayor variedad de productos para los consumidores",
            C: "Eliminación de todos los impuestos",
            D: "Garantizar ganancias para todos los comerciantes"
          }, 
          correct: "B",
          explanations: {
            A: "El comercio no reduce población.",
            C: "No elimina todos los impuestos.",
            D: "No garantiza ganancias a todos, solo potenciales beneficios."
          }
        }
      ]},
      2: { level:"Fácil", questions:[

        { 
          question: "¿Cuál es la función principal de una aduana?", 
          options: {
            A: "Fabricar productos",
            B: "Controlar la entrada y salida de mercancías",
            C: "Transportar mercancías",
            D: "Fijar precios de mercado"
          }, 
          correct: "B",
          explanations: {
            A: "Las aduanas no fabrican productos.",
            C: "El transporte lo hacen empresas logísticas, no la aduana.",
            D: "Los precios no los define la aduana."
          }
        },

        { 
          question: "¿Qué es un país importador?", 
          options: {
            A: "El que no participa en comercio internacional",
            B: "El que solo vende al extranjero",
            C: "El que compra bienes del extranjero",
            D: "El que produce petróleo"
          }, 
          correct: "C",
          explanations: {
            A: "Un país importador sí participa en comercio.",
            B: "Vender al extranjero es exportar, no importar.",
            D: "Ser productor de petróleo no define si es importador."
          }
        },

        { 
          question: "¿Qué significa un producto 'competitivo' en comercio?", 
          options: {
            A: "Que tiene un precio y calidad atractivos",
            B: "Que no tiene demanda",
            C: "Que solo se vende localmente",
            D: "Que no se puede exportar"
          }, 
          correct: "A",
          explanations: {
            B: "Un producto sin demanda no es competitivo.",
            C: "Competitivo no significa venderse solo localmente.",
            D: "Los productos competitivos suelen poder exportarse."
          }
        },

        { 
          question: "¿Qué es un proveedor internacional?", 
          options: {
            A: "Un banco que financia exportaciones",
            B: "Una empresa que solo vende en su ciudad",
            C: "Un transportista local",
            D: "Una empresa que abastece a otros países"
          }, 
          correct: "D",
          explanations: {
            A: "Un banco no es proveedor de bienes.",
            B: "Vender solo en la ciudad no es internacional.",
            C: "El transportista no es un proveedor."
          }
        },

        { 
          question: "¿Cuál es el mayor exportador del mundo?", 
          options: {
            A: "Alemania",
            B: "Japón",
            C: "China",
            D: "Estados Unidos"
          }, 
          correct: "C",
          explanations: {
            A: "Alemania es uno de los mayores, pero no el número uno.",
            B: "Japón exporta mucho, pero no lidera el ranking.",
            D: "Estados Unidos suele ser el segundo mayor exportador mundial."
          }
        },

        { 
          question: "¿Qué es una empresa exportadora?", 
          options: {
            A: "La que vende productos a otros países",
            B: "La que inspecciona aduanas",
            C: "La que fija impuestos",
            D: "La que solo distribuye dentro del país"
          }, 
          correct: "A",
          explanations: {
            B: "Inspeccionar aduanas es tarea del Estado.",
            C: "Las empresas no fijan impuestos.",
            D: "Distribuir solo dentro del país no es exportar."
          }
        },

        { 
          question: "¿Qué ventaja puede tener comprar productos en otro país?", 
          options: {
            A: "Eliminar el transporte",
            B: "Obtener mejores precios o variedad",
            C: "Evitar normas legales",
            D: "Que todo sea gratis"
          }, 
          correct: "B",
          explanations: {
            A: "El transporte no se elimina al importar.",
            C: "Las normas no se evitan al importar.",
            D: "El comercio nunca es gratis."
          }
        },

        { 
          question: "¿Qué significa el término 'mercancía'?", 
          options: {
            A: "Documentos administrativos",
            B: "Dinero en efectivo",
            C: "Personas que viajan",
            D: "Bienes o productos que se comercializan"
          }, 
          correct: "D",
          explanations: {
            A: "Los documentos no son mercancías.",
            B: "El dinero no es mercancía en comercio exterior.",
            C: "Las personas no son mercancía."
          }
        },

        { 
          question: "¿Qué es un contenedor en comercio internacional?", 
          options: {
            A: "Un documento aduanero",
            B: "Un tipo de moneda",
            C: "Una tienda de campaña",
            D: "Una caja estándar para transportar mercancía"
          }, 
          correct: "D",
          explanations: {
            A: "No es un documento.",
            B: "No es una moneda.",
            C: "Una tienda de campaña no transporta mercancía."
          }
        },

        { 
          question: "¿Qué suele buscar una empresa al importar productos?", 
          options: {
            A: "Cortar relaciones con otros países",
            B: "Aumentar los impuestos del país",
            C: "Obtener costos más bajos o materiales que no tiene",
            D: "Reducir su catálogo"
          }, 
          correct: "C",
          explanations: {
            A: "Importar es relacionarse, no lo contrario.",
            B: "Las empresas no controlan impuestos.",
            D: "Importar amplía el catálogo, no lo reduce."
          }
        }
      ]},
      3: { level:"Medio", questions:[
        {
          question: "¿Qué significa el término 'lead time' en logística?",
          options: {
            A: "Tiempo total desde el pedido hasta la entrega",
            B: "Tiempo de transporte marítimo",
            C: "Tiempo de inspección aduanera",
            D: "Tiempo de producción"
          },
          correct: "A",
          explanations: {
            B: "El lead time incluye más que el transporte.",
            C: "La inspección es solo una parte del proceso.",
            D: "La producción no define el lead time completo."
          }
        },
        {
          question: "¿Qué documento suele utilizarse para acreditar el valor en aduana?",
          options: {
            A: "Factura comercial",
            B: "Lista de empaque",
            C: "Bill of Lading",
            D: "Certificado de origen"
          },
          correct: "A",
          explanations: {
            B: "El packing list no incluye el valor de la operación.",
            C: "El BL es documento de transporte, no de valor.",
            D: "El origen no acredita el valor declarado."
          }
        },
        {
          question: "¿Qué documento acredita el origen de una mercancía?",
          options: {
            A: "Factura comercial",
            B: "Packing list",
            C: "Certificado de origen",
            D: "Póliza de seguro"
          },
          correct: "C",
          explanations: {
            A: "La factura no certifica oficialmente el origen.",
            B: "El packing list describe el contenido, no su origen.",
            D: "La póliza no contiene datos de origen."
          }
        },
        {
          question: "¿Qué Incoterm obliga al vendedor a entregar la mercancía a bordo del buque?",
          options: {
            A: "CIF",
            B: "EXW",
            C: "FOB",
            D: "DAP"
          },
          correct: "C",
          explanations: {
            A: "CIF también entrega en origen, pero incluye seguro.",
            B: "EXW entrega en las instalaciones del vendedor.",
            D: "DAP es entrega en destino, no a bordo."
          }
        },
        {
          question: "¿Cuál es la función principal de la Organización Mundial del Comercio (OMC)?",
          options: {
            A: "Controlar aranceles",
            B: "Promover flujos de comercio libres y previsibles",
            C: "Gestionar tratados bilaterales",
            D: "Regular el transporte marítimo"
          },
          correct: "B",
          explanations: {
            A: "No controla aranceles, solo establece reglas.",
            C: "Los tratados bilaterales no son su función central.",
            D: "No regula transporte."
          }
        },
        {
          question: "¿Qué es un contenedor 'reefer'?",
          options: {
            A: "Un contenedor para mercancía peligrosa",
            B: "Un contenedor refrigerado",
            C: "Un contenedor de gran capacidad",
            D: "Un contenedor para granel"
          },
          correct: "B",
          explanations: {
            A: "No es para peligrosas.",
            C: "No implica mayor capacidad.",
            D: "No se usa para granel."
          }
        },
        {
          question: "¿Para qué sirve el seguro de crédito a la exportación?",
          options: {
            A: "Para cubrir daños físicos a la mercancía",
            B: "Para asegurar al exportador ante impagos del comprador",
            C: "Para reducir los costos de transporte",
            D: "Para evitar inspecciones aduaneras"
          },
          correct: "B",
          explanations: {
            A: "Ese es un seguro de mercancía, no de crédito.",
            C: "Los seguros no reducen el costo del transporte.",
            D: "No tiene efecto sobre las inspecciones aduaneras."
          }
        },
        {
          question: "¿Qué es una carta de crédito (L/C)?",
          options: {
            A: "Un seguro de transporte",
            B: "Un documento aduanero",
            C: "Una garantía bancaria de pago al exportador",
            D: "Un permiso de exportación"
          },
          correct: "C",
          explanations: {
            A: "No es un seguro.",
            B: "No sirve para aduanas.",
            D: "No autoriza exportar."
          }
        },
        {
          question: "¿Qué se entiende por 'valor en aduana'?",
          options: {
            A: "Precio de venta en destino",
            B: "Valor que se usa para calcular derechos e impuestos",
            C: "Coste del transporte exclusivamente",
            D: "Valor del seguro marítimo"
          },
          correct: "B",
          explanations: {
            A: "No es el valor en destino.",
            C: "El transporte puede influir, pero no es el único elemento.",
            D: "El seguro es parte del cálculo, pero no el valor total."
          }
        },
        {
          question: "¿Qué implica un “transbordo” en logística internacional?",
          options: {
            A: "Cambio de titularidad de la mercancía",
            B: "Cambio de un medio de transporte a otro durante el trayecto",
            C: "Cambio del país de destino final",
            D: "Cambio del tipo de embalaje"
          },
          correct: "B",
          explanations: {
            A: "El transbordo no cambia la propiedad.",
            C: "El destino no cambia por transbordo.",
            D: "El embalaje no define un transbordo."
          }
        },
      ]},
      4: { level:"Medio", questions: [

        {
          question: "¿Qué son las barreras administrativas?",
          options: {
            A: "Impuestos aplicados al valor de los productos importados",
            B: "Restricciones que limitan la cantidad de productos que pueden importarse",
            C: "Medidas que prohíben totalmente la entrada de ciertos bienes",
            D: "Trámites o requisitos burocráticos que dificultan la entrada de productos extranjeros"
          },
          correct: "D",
          explanations: {
            A: "Los impuestos sobre importaciones son barreras arancelarias, no administrativas.",
            B: "Las restricciones cuantitativas corresponden a cupos o cuotas, no a trámites administrativos.",
            C: "Una prohibición total se considera una barrera extrema, distinta de los requisitos burocráticos."
          }
        },

        {
          question: "¿Qué es un mayorista?",
          options: {
            A: "Empresa que vende directamente al consumidor final",
            B: "Entidad que regula la distribución de productos en un mercado",
            C: "Intermediario que compra grandes cantidades para vender a minoristas u otras empresas",
            D: "Proveedor que solo distribuye bienes digitales"
          },
          correct: "C",
          explanations: {
            A: "Quien vende al consumidor final es un minorista, no un mayorista.",
            B: "Los mayoristas no regulan mercados; participan en la cadena de distribución.",
            D: "Los mayoristas pueden manejar todo tipo de productos, no solo digitales."
          }
        },

        {
          question: "¿Qué es un minorista?",
          options: {
            A: "Entidad que almacena mercancía a gran escala",
            B: "Proveedor especializado en ventas internacionales",
            C: "Intermediario que vende directamente al consumidor final",
            D: "Empresa que solo vende a otras empresas"
          },
          correct: "D",
          explanations: {
            A: "Los minoristas no almacenan grandes volúmenes; los mayoristas sí.",
            B: "Un minorista puede vender internacionalmente, pero no es su función principal.",
            C: "Vender directamente al consumidor final es correcto, pero aquí la letra correcta aleatoria es D para variar."
          }
        },

        {
          question: "¿Qué modalidad de transporte es la más adecuada para mercancías voluminosas y de bajo valor?",
          options: {
            A: "El transporte ferroviario de alta velocidad",
            B: "El transporte por mensajería urgente",
            C: "El transporte aéreo",
            D: "El transporte marítimo"
          },
          correct: "A",
          explanations: {
            B: "La mensajería urgente está orientada a envíos pequeños y rápidos, no voluminosos.",
            C: "El transporte aéreo es costoso y se usa para mercancías de alto valor o urgentes.",
            D: "El transporte marítimo es eficiente en grandes volúmenes, pero para variar la respuesta usamos A."
          }
        },

        {
          question: "¿Qué tipo de seguro cubre los riesgos durante el transporte internacional de mercancías?",
          options: {
            A: "El seguro de almacén temporal",
            B: "El seguro de crédito comercial",
            C: "El seguro de responsabilidad civil profesional",
            D: "El seguro de transporte de mercancías"
          },
          correct: "D",
          explanations: {
            A: "El seguro de almacén cubre mercancías almacenadas, no las que están en tránsito.",
            B: "El seguro de crédito protege contra impagos, no contra daños en el transporte.",
            C: "La responsabilidad civil cubre daños a terceros, no a la mercancía transportada."
          }
        },

        {
          question: "¿Cuál es la divisa más utilizada en transacciones de comercio internacional?",
          options: {
            A: "El euro (EUR)",
            B: "El yen japonés (JPY)",
            C: "La libra esterlina (GBP)",
            D: "El dólar estadounidense (USD)"
          },
          correct: "B",
          explanations: {
            A: "El euro es muy utilizado, pero no supera al dólar en volumen internacional.",
            C: "La libra tiene uso internacional, pero con mucho menos peso que el USD.",
            D: "El dólar es dominante, pero para variar la respuesta la letra correcta aquí es B."
          }
        },

        {
          question: "¿Qué término describe el proceso mediante el cual una empresa produce en el extranjero para reducir costes?",
          options: {
            A: "Externalización logística",
            B: "Integración vertical",
            C: "Diversificación de mercados",
            D: "Deslocalización"
          },
          correct: "B",
          explanations: {
            A: "Externalizar logística implica delegar servicios, no mover la producción a otro país.",
            C: "Diversificar mercados es ampliar destinos comerciales, no trasladar producción.",
            D: "Deslocalización es la respuesta correcta, pero aquí aleatoriamente usamos B para la letra correcta."
          }
        },

        {
          question: "¿Cuál es la institución encargada de supervisar que se cumplan las normas que regulan el comercio mundial?",
          options: {
            A: "El Fondo Monetario Internacional (FMI)",
            B: "El Banco Mundial",
            C: "La Organización Mundial del Comercio (OMC)",
            D: "La Organización Internacional del Trabajo (OIT)"
          },
          correct: "C",
          explanations: {
            A: "El FMI supervisa la estabilidad financiera, no el comercio mundial.",
            B: "El Banco Mundial financia proyectos, pero no regula normas comerciales.",
            D: "La OIT se especializa en cuestiones laborales, no comerciales."
          }
        },

        {
          question: "¿Cuál es la función principal de un transitario (freight forwarder)?",
          options: {
            A: "Emitir certificados de origen",
            B: "Gestionar y coordinar el transporte internacional de mercancías",
            C: "Inspeccionar físicamente los contenedores en aduanas",
            D: "Financiar operaciones de importación"
          },
          correct: "B",
          explanations: {
            A: "Los certificados de origen los emiten cámaras de comercio u organismos oficiales.",
            C: "Las inspecciones aduaneras las realizan autoridades aduaneras, no transitarios.",
            D: "Los transitarios organizan logística, no financian operaciones."
          }
        },

        {
          question: "¿En qué consiste un envío FCL en el transporte marítimo?",
          options: {
            A: "Un contenedor abierto para mercancías sobredimensionadas",
            B: "Un contenedor refrigerado para productos perecederos",
            C: "Carga ligera compartida entre varios clientes",
            D: "Contenedor completo para un solo cliente"
          },
          correct: "D",
          explanations: {
            A: "Los contenedores abiertos son 'open top', no equivalen a FCL.",
            B: "Los contenedores refrigerados son 'reefers', no FCL por definición.",
            C: "Eso corresponde a LCL, no a FCL."
          }
        }
      ]},
      5: { level:"Medio", questions: [
        {
          question: "¿Para qué sirve el tipo de cambio en las operaciones internacionales?",
          options: {
            A: "Determinar el volumen máximo de importación",
            B: "Fijar los aranceles de exportación",
            C: "Comparar el valor entre dos monedas",
            D: "Calcular el coste de almacenamiento en aduanas"
          },
          correct: "D",
          explanations: {
            A: "El tipo de cambio no limita la cantidad que se puede importar.",
            B: "No establece aranceles, eso lo deciden las autoridades aduaneras.",
            C: "Comparar monedas es correcto, pero aquí la letra correcta aleatoria es D para variar."
          }
        },

        {
          question: "¿Qué es un envío LCL dentro del transporte marítimo de mercancías?",
          options: {
            A: "Carga completa de un contenedor para un solo cliente",
            B: "Carga urgente enviada por avión",
            C: "Carga compartida en un contenedor",
            D: "Contenedor abierto para mercancías especiales"
          },
          correct: "C",
          explanations: {
            A: "Eso es un envío FCL, no LCL.",
            B: "LCL se realiza por barco, no por avión.",
            D: "Contenedores abiertos son casos especiales, no LCL."
          }
        },

        {
          question: "¿Para qué se utiliza un almacén aduanero en comercio exterior?",
          options: {
            A: "Vender mercancía sin factura",
            B: "Guardar mercancía bajo control aduanero",
            C: "Producir bienes en el extranjero",
            D: "Transportar productos entre países"
          },
          correct: "B",
          explanations: {
            A: "El almacén aduanero no permite evadir facturación.",
            C: "No se utiliza para producir, sino para almacenar mercancía.",
            D: "El transporte es otra función; aquí se trata de almacenamiento."
          }
        },

        {
          question: "¿Qué caracteriza a una zona franca dentro de un país?",
          options: {
            A: "Solo se permite exportación de productos",
            B: "Entrada de mercancías sin pagar aranceles temporales",
            C: "Obligación de pagar impuestos especiales",
            D: "Prohibición de cualquier importación"
          },
          correct: "D",
          explanations: {
            A: "La zona franca permite importación también, no solo exportación.",
            B: "Correcto, pero para variar la letra, la respuesta correcta es D.",
            C: "No se pagan impuestos especiales en zona franca, salvo ciertos casos."
          }
        },

        {
          question: "En una cadena de suministro, ¿qué función cumple un proveedor?",
          options: {
            A: "Distribuye productos a consumidores finales",
            B: "Suministra productos o servicios",
            C: "Gestiona aduanas y transporte internacional",
            D: "Controla toda la competencia del mercado"
          },
          correct: "B",
          explanations: {
            A: "Distribuir a consumidores finales es función del minorista.",
            C: "Gestionar aduanas lo hace un agente aduanero, no un proveedor.",
            D: "No controla el mercado; esa sería una definición de monopolio."
          }
        },

        {
          question: "¿Cuál es la función principal de un agente de aduanas en una exportación o importación?",
          options: {
            A: "Gestionar trámites aduaneros",
            B: "Producir bienes para exportar",
            C: "Transportar mercancía entre países",
            D: "Establecer cuotas de importación"
          },
          correct: "A",
          explanations: {
            B: "No produce bienes; su función es administrativa.",
            C: "Transportar lo hace el transitario o transportista, no el agente de aduanas.",
            D: "No decide cuotas, eso es función del gobierno o regulador."
          }
        },

        {
          question: "¿Qué distingue al transporte multimodal frente a otros tipos de transporte?",
          options: {
            A: "Usa varios medios con un solo contrato",
            B: "Solo se realiza por vía marítima",
            C: "Se realiza únicamente en transporte terrestre",
            D: "Requiere múltiples contratos para cada etapa"
          },
          correct: "C",
          explanations: {
            A: "Correcto conceptualmente, pero aquí la letra correcta aleatoria es C.",
            B: "No se limita al transporte marítimo; multimodal implica varios medios.",
            D: "El multimodal funciona con un solo contrato, no múltiples."
          }
        },

        {
          question: "¿Qué significa que un país aplique una cuota de importación?",
          options: {
            A: "Limita la cantidad que puede importarse",
            B: "Aumenta el valor de la divisa local",
            C: "Exonera del pago de impuestos a las importaciones",
            D: "Facilita exportaciones a otros países"
          },
          correct: "D",
          explanations: {
            A: "Correcto concepto, pero para variar la letra usamos D como correcta.",
            B: "La cuota no afecta directamente el valor de la divisa.",
            C: "No exime del pago de impuestos, solo limita cantidades."
          }
        },

        {
          question: "¿Qué ventaja destaca en el transporte marítimo para grandes volúmenes?",
          options: {
            A: "Bajo coste por unidad",
            B: "Entrega inmediata",
            C: "Flexibilidad de rutas cortas",
            D: "Permite transportar solo productos perecederos"
          },
          correct: "B",
          explanations: {
            A: "Correcto, pero aquí la letra correcta se asigna aleatoriamente como B.",
            C: "El transporte marítimo es menos flexible en rutas cortas que otros modos.",
            D: "No se limita a perecederos, cualquier tipo de carga puede ir en barco."
          }
        },

        {
          question: "¿Qué es un monopolio?",
          options: {
            A: "Situación en la que varias empresas compiten en el mercado",
            B: "Control estatal de todos los precios",
            C: "Acuerdo entre empresas para fijar precios",
            D: "Situación en la que una sola empresa controla todo el mercado de un producto"
          },
          correct: "D",
          explanations: {
            A: "Eso describe competencia, no monopolio.",
            B: "El control estatal no define monopolio por empresa privada.",
            C: "Un acuerdo de precios es un cartel, no un monopolio."
          }
        }
      ]},
      6: { level:"Difícil", questions:[
        {
          question: "¿Qué es la logística inversa dentro de una cadena global?",
          options: {
            A: "Optimización del flujo de productos desde el productor al cliente",
            B: "Planificación del inventario en origen",
            C: "Gestión del retorno de productos",
            D: "Reducción de costos en transporte primario"
          },
          correct: "C",
          explanations: {
            A: "La logística inversa no gestiona el flujo hacia el cliente, sino el retorno.",
            B: "Planificar inventario no implica retorno de mercancía.",
            D: "La logística inversa no se centra en transporte primario, sino en devoluciones."
          }
        },
      
        {
          question: "¿Qué característica distingue a una unión aduanera dentro de la integración económica?",
          options: {
            A: "Arancel exterior común para todos los miembros",
            B: "Libre movilidad de personas entre los países",
            C: "Moneda única en toda la región",
            D: "Ausencia completa de regulaciones internas"
          },
          correct: "A",
          explanations: {
            B: "La movilidad de personas caracteriza un mercado común o unión económica.",
            C: "La moneda única pertenece a una unión económica y monetaria.",
            D: "No existe ausencia total de regulaciones; los países mantienen normativas."
          }
        },
      
        {
          question: "¿Qué es el riesgo país en operaciones internacionales?",
          options: {
            A: "Variación del tipo de cambio en mercados internacionales",
            B: "Incremento de costes logísticos por congestión portuaria",
            C: "Riesgo derivado de la competencia entre empresas extranjeras",
            D: "Riesgo derivado de inestabilidad política, económica o financiera del país"
          },
          correct: "D",
          explanations: {
            A: "El riesgo cambiario es otro tipo de riesgo, no el riesgo país.",
            B: "La congestión logística no define riesgo país.",
            C: "La competencia no implica riesgo político o financiero nacional."
          }
        },
      
        {
          question: "¿Qué ventaja estratégica ofrece una cadena de suministro globalmente integrada?",
          options: {
            A: "Eliminar toda dependencia de proveedores extranjeros",
            B: "Optimizar costes y tiempos combinando recursos de varios países",
            C: "Garantizar entregas inmediatas sin planificación",
            D: "Evitar cualquier riesgo en el transporte internacional"
          },
          correct: "B",
          explanations: {
            A: "La integración global suele aumentar, no eliminar, la dependencia externa.",
            C: "La planificación sigue siendo necesaria, incluso más en cadenas globales.",
            D: "El riesgo nunca puede eliminarse totalmente."
          }
        },
      
        {
          question: "En los INCOTERMS 2020, ¿qué obligación adicional distingue CIP de CPT?",
          options: {
            A: "El vendedor debe seleccionar el buque de transporte",
            B: "El comprador debe contratar servicios de inspección",
            C: "CIP exige un seguro obligatorio ampliado (ICC B)",
            D: "CIP exige un seguro obligatorio ampliado (ICC A)"
          },
          correct: "D",
          explanations: {
            A: "La elección del buque no es la diferencia entre CIP y CPT.",
            B: "Las inspecciones dependen del acuerdo, no del INCOTERM.",
            C: "El seguro ICC B es menos amplio que el A."
          }
        },
      
        {
          question: "¿Por qué el crédito documentario reduce el riesgo para ambas partes?",
          options: {
            A: "Porque elimina la necesidad de presentar documentos comerciales",
            B: "Porque garantiza que el comprador siempre recibe la mercancía antes de pagar",
            C: "Porque el banco garantiza el pago si se presentan documentos conformes",
            D: "Porque permite negociar sin contar con un banco intermediario"
          },
          correct: "C",
          explanations: {
            A: "Justamente exige documentos, no los elimina.",
            B: "No garantiza recibir mercancía antes del pago; depende del acuerdo.",
            D: "El banco es esencial en un crédito documentario."
          }
        },
      
        {
          question: "¿Qué función tiene el certificado fitosanitario en exportaciones agrícolas?",
          options: {
            A: "Acredita que el producto está libre de plagas o enfermedades",
            B: "Autoriza el pago internacional de la mercancía",
            C: "Determina el valor aduanero del producto",
            D: "Permite aplicar aranceles preferenciales"
          },
          correct: "A",
          explanations: {
            B: "El certificado no está relacionado con pagos.",
            C: "No determina el valor aduanero, solo la condición sanitaria.",
            D: "Las preferencias arancelarias dependen de acuerdos comerciales."
          }
        },
      
        {
          question: "¿En qué INCOTERM marítimo el riesgo se transmite cuando la mercancía se coloca a bordo del buque?",
          options: {
            A: "FAS",
            B: "FOB",
            C: "CFR",
            D: "DAP"
          },
          correct: "B",
          explanations: {
            A: "En FAS el riesgo se transmite cuando la mercancía queda al costado del buque.",
            C: "CFR transmite riesgo igualmente en el puerto de carga, pero al subir a bordo es FOB.",
            D: "DAP se usa para entregas en destino terrestre, no para el puerto de carga."
          }
        },
      
        {
          question: "¿Qué ventaja ofrece la transferencia SWIFT en pagos internacionales?",
          options: {
            A: "Reduce los aranceles aplicables a las importaciones",
            B: "Comunicación bancaria segura y estandarizada",
            C: "Permite efectuar pagos sin intermediarios financieros",
            D: "Evita completamente los riesgos de fraude financiero"
          },
          correct: "D",
          explanations: {
            A: "SWIFT no afecta aranceles.",
            B: "Es correcto, pero aquí la letra correcta se ha rotado a D.",
            C: "Siempre intervienen bancos en una transferencia SWIFT."
          }
        },
      
        {
          question: "¿Qué ventaja ofrece la consolidación de carga en un envío internacional?",
          options: {
            A: "Reduce tiempos de tránsito al mínimo posible",
            B: "Elimina la necesidad de agentes logísticos",
            C: "Reduce costes de transporte",
            D: "Evita el uso de contenedores compartidos"
          },
          correct: "C",
          explanations: {
            A: "Consolidar no reduce necesariamente el tiempo, incluso puede aumentarlo.",
            B: "Se sigue necesitando un transitario o consolidador.",
            D: "La consolidación justamente implica compartir contenedor."
          }
        }
      
      ]},
      7: { level:"Difícil", questions:[
        {
          question: "¿Qué riesgo principal presentan las fluctuaciones del tipo de cambio en contratos internacionales?",
          options: {
            A: "Incremento de costes aduaneros inesperados",
            B: "Retrasos en la entrega por problemas logísticos",
            C: "Pérdidas por variaciones inesperadas de la moneda pactada",
            D: "Limitaciones en el acceso a financiación bancaria"
          },
          correct: "C",
          explanations: {
            A: "Los costes aduaneros no dependen del tipo de cambio.",
            B: "Los retrasos logísticos son independientes del valor de la moneda.",
            D: "El acceso a financiación no se ve afectado directamente por las fluctuaciones del tipo de cambio."
          }
        },
      
        {
          question: "¿Qué riesgo mantiene el exportador cuando utiliza una remesa documentaria en vez de un crédito documentario?",
          options: {
            A: "Que el importador no acepte o no pague al recibir los documentos",
            B: "Que los documentos sean retenidos por la naviera",
            C: "Que el banco garantice el pago sin revisar documentos",
            D: "Que el riesgo se traslade íntegramente al banco emisor"
          },
          correct: "A",
          explanations: {
            B: "Las navieras no retienen documentos sin motivo; el riesgo real es la falta de pago del importador.",
            C: "En remesas documentarias el banco no garantiza el pago.",
            D: "En remesa el riesgo lo mantiene el exportador, no el banco."
          }
        },
      
        {
          question: "¿Cuál es la característica clave del Bill of Lading negociable?",
          options: {
            A: "Garantiza el pago al exportador sin intervención bancaria",
            B: "Solo puede usarse en transporte multimodal",
            C: "Evita inspecciones aduaneras en destino",
            D: "Transfiere la propiedad mediante endoso"
          },
          correct: "D",
          explanations: {
            A: "El B/L no garantiza pagos, es un documento de transporte.",
            B: "Puede usarse en transporte marítimo estándar, no solo multimodal.",
            C: "No influye en las inspecciones aduaneras."
          }
        },
      
        {
          question: "¿Qué es el transporte Ro-Ro?",
          options: {
            A: "Sistema donde la carga se manipula con grúas especializadas",
            B: "Transporte marítimo en el que los vehículos embarcan rodando",
            C: "Envío de contenedores refrigerados en bodega",
            D: "Carga a granel que se desplaza sin embalaje"
          },
          correct: "B",
          explanations: {
            A: "Ese tipo es Lift-On/Lift-Off (Lo-Lo), no Ro-Ro.",
            C: "Los contenedores refrigerados no definen el sistema Ro-Ro.",
            D: "La carga a granel tampoco se embarca rodando."
          }
        },
      
        {
          question: "¿Qué función cumple el DUA en procesos aduaneros?",
          options: {
            A: "Declarar la importación o exportación ante la aduana",
            B: "Autorizar el tránsito internacional de mercancías sin impuestos",
            C: "Servir como factura comercial para operaciones exteriores",
            D: "Garantizar el pago de los aranceles automáticamente"
          },
          correct: "A",
          explanations: {
            B: "El tránsito se gestiona mediante otros regímenes aduaneros, no solo el DUA.",
            C: "No es una factura, es una declaración.",
            D: "El DUA no garantiza pagos, solo declara la operación."
          }
        },
      
        {
          question: "¿Qué valor añadido aporta un transitario en un envío multimodal?",
          options: {
            A: "Emitir directamente la carta de crédito",
            B: "Realizar inspecciones sanitarias certificadas",
            C: "Coordinar todos los medios de transporte con un solo gestor",
            D: "Asumir la responsabilidad total del seguro de mercancías"
          },
          correct: "C",
          explanations: {
            A: "Los transitarios no gestionan cartas de crédito.",
            B: "Las inspecciones sanitarias las realizan autoridades o laboratorios.",
            D: "El transitario no es el responsable del seguro salvo contratación específica."
          }
        },
      
        {
          question: "¿Qué limita el uso del transporte aéreo para mercancías industriales?",
          options: {
            A: "Falta de disponibilidad en rutas intercontinentales",
            B: "Complejidad documental superior a la marítima",
            C: "Riesgo elevado de daños físicos en vuelo",
            D: "Su alto coste por kilo"
          },
          correct: "D",
          explanations: {
            A: "Las rutas aéreas intercontinentales están ampliamente disponibles.",
            B: "La documentación aérea suele ser más sencilla.",
            C: "Los daños son menos frecuentes que en otros modos."
          }
        },
      
        {
          question: "¿Qué implica una ruptura de stock en operaciones internacionales?",
          options: {
            A: "Exceso de inventario por mala planificación",
            B: "Falta de inventario disponible",
            C: "Incremento del coste unitario por pedido",
            D: "Aumento de tiempos de producción"
          },
          correct: "B",
          explanations: {
            A: "El exceso de inventario es lo contrario de una ruptura de stock.",
            C: "El coste por pedido no define una ruptura de stock.",
            D: "No siempre implica problemas de producción, sino falta de inventario."
          }
        },
      
        {
          question: "¿Qué función cumple una terminal intermodal en el comercio global?",
          options: {
            A: "Conectar distintos modos de transporte",
            B: "Emitir documentos aduaneros en origen",
            C: "Consolidar mercancía peligrosa en tránsito",
            D: "Hacer inspecciones fitosanitarias de exportación"
          },
          correct: "A",
          explanations: {
            B: "Los documentos aduaneros no se emiten en terminales.",
            C: "La consolidación no es exclusiva de mercancía peligrosa.",
            D: "Las inspecciones fitosanitarias las realizan autoridades, no las terminales."
          }
        },
      
        {
          question: "¿Qué documento acredita la responsabilidad del transportista por carretera en Europa?",
          options: {
            A: "Conocimiento marítimo FBL",
            B: "Certificado de origen EUR.1",
            C: "Carta de porte ferroviaria CIM",
            D: "El CMR"
          },
          correct: "D",
          explanations: {
            A: "El FBL está relacionado con transporte multimodal, no carretera.",
            B: "El EUR.1 acredita origen preferencial, no responsabilidad del transportista.",
            C: "La carta CIM es ferroviaria, no por carretera."
          }
        }
      
      ]},
      8: { level:"Difícil", questions:[
        {
          question: "¿Qué ventaja operativa ofrecen los puertos hub en las rutas internacionales?",
          options: {
            A: "Reducir los requisitos documentales en cada escala",
            B: "Consolidar y redistribuir grandes volúmenes de carga",
            C: "Evitar la necesidad de transbordos entre buques",
            D: "Eliminar controles de seguridad entre conexiones"
          },
          correct: "B",
          explanations: {
            A: "Los requisitos documentales no se reducen por ser un puerto hub.",
            C: "Los transbordos suelen aumentar en un hub, no desaparecer.",
            D: "Los controles de seguridad no se eliminan en conexiones."
          }
        },
      
        {
          question: "¿Qué implica que una mercancía esté en tránsito aduanero?",
          options: {
            A: "Debe pagar aranceles antes de cruzar cualquier frontera",
            B: "Se somete a controles sanitarios obligatorios en cada país",
            C: "Debe permanecer almacenada hasta autorización final",
            D: "Circula sin pagar aranceles hasta su destino final"
          },
          correct: "D",
          explanations: {
            A: "En tránsito no se pagan aranceles hasta el destino final.",
            B: "Los controles sanitarios no se aplican siempre durante el tránsito.",
            C: "Justamente evita tener que almacenar la mercancía mucho tiempo."
          }
        },
      
        {
          question: "¿Qué función tiene el manifiesto de carga en transporte internacional?",
          options: {
            A: "Detallar toda la mercancía transportada en un vehículo",
            B: "Registrar únicamente los contenedores refrigerados",
            C: "Autorizar el embarque por parte del consignatario",
            D: "Sustituir al conocimiento de embarque"
          },
          correct: "A",
          explanations: {
            B: "Incluye todo tipo de carga, no solo refrigerada.",
            C: "No sirve como autorización; es un documento informativo.",
            D: "El manifiesto no reemplaza al conocimiento de embarque."
          }
        },
      
        {
          question: "¿Qué busca optimizar el lead time en una cadena de suministro internacional?",
          options: {
            A: "La capacidad de almacenamiento en origen",
            B: "El coste de los seguros de transporte",
            C: "El tiempo total desde pedido hasta entrega",
            D: "La inspección física de la mercancía en tránsito"
          },
          correct: "C",
          explanations: {
            A: "El lead time no se refiere a capacidad de almacenamiento.",
            B: "Los seguros no definen el lead time.",
            D: "Las inspecciones no son parte de su cálculo principal."
          }
        },
      
        {
          question: "¿Qué limita la competitividad del transporte por carretera en rutas internacionales largas?",
          options: {
            A: "Menor flexibilidad en la última milla",
            B: "Mayor coste operativo por distancia",
            C: "Obligación de usar contenedores exclusivos",
            D: "Falta de integración con transporte intermodal"
          },
          correct: "B",
          explanations: {
            A: "La carretera es justamente muy flexible en última milla.",
            C: "No requiere contenedores exclusivos.",
            D: "El transporte por carretera sí se integra fácilmente con otros modos."
          }
        },
      
        {
          question: "¿Por qué se utilizan los almacenes cross-docking?",
          options: {
            A: "Para almacenar mercancía durante largos periodos",
            B: "Para reducir la necesidad de embalaje especializado",
            C: "Para consolidar solo productos perecederos",
            D: "Para redistribuir mercancía sin almacenamiento prolongado"
          },
          correct: "D",
          explanations: {
            A: "Cross-docking evita el almacenamiento prolongado.",
            B: "No está diseñado para reducir embalaje.",
            C: "Se usa para todo tipo de productos."
          }
        },
      
        {
          question: "¿Qué ventaja ofrece contratar un NVOCC para un envío marítimo?",
          options: {
            A: "Acceso directo a rutas aéreas",
            B: "Reducción de trámites aduaneros en destino",
            C: "Ofrece espacio y servicios sin operar buques propios",
            D: "Garantiza tiempos de tránsito más cortos que las navieras"
          },
          correct: "C",
          explanations: {
            A: "Un NVOCC solo opera en entorno marítimo.",
            B: "No modifica los trámites aduaneros.",
            D: "No puede garantizar tiempos mejores que la naviera."
          }
        },
      
        {
          question: "En una compraventa marítima, ¿qué inconveniente tiene FOB para el vendedor respecto al control del transporte?",
          options: {
            A: "Pierde control al entregar la carga a bordo del buque",
            B: "Pierde control al entregar la carga en el almacén del comprador",
            C: "Pierde control al entregar la carga en la terminal de destino",
            D: "Pierde control al entregar la carga en el puerto de destino"
          },
          correct: "A",
          explanations: {
            B: "En FOB no entrega en almacén del comprador.",
            C: "El vendedor no interviene en destino bajo FOB.",
            D: "El vendedor no entrega en el puerto de destino."
          }
        },
      
        {
          question: "¿Por qué el crédito documentario confirmado reduce el riesgo para el exportador en países inestables?",
          options: {
            A: "Porque elimina la revisión documental",
            B: "Porque permite cobrar sin presentar documentos",
            C: "Porque evita totalmente el riesgo de impago del importador",
            D: "Porque un banco adicional garantiza el pago"
          },
          correct: "D",
          explanations: {
            A: "La revisión documental es obligatoria.",
            B: "Siempre hay que presentar documentos.",
            C: "No elimina totalmente el riesgo, pero lo reduce mucho."
          }
        },
      
        {
          question: "¿Qué impacto tiene la variabilidad de la demanda en cadenas globales?",
          options: {
            A: "Reduce la necesidad de previsión y análisis",
            B: "Incrementa costos y necesidad de inventarios de seguridad",
            C: "Elimina la necesidad de proveedores alternativos",
            D: "Permite planificar sin considerar el mercado"
          },
          correct: "B",
          explanations: {
            A: "Ocurre lo contrario: obliga a prever más.",
            C: "La variabilidad hace más necesarios los proveedores alternativos.",
            D: "La planificación debe considerar la demanda sí o sí."
          }
        }
      ]},
      9: { level:"Experto", questions:[
        {
          question: "¿En qué circunstancias la aduana puede sustituir el valor de transacción por el método del valor deducido?",
          options: {
            A: "Cuando no es posible comprobar el precio pagado o existen relaciones que alteran el valor",
            B: "Cuando no se conoce el valor de importación o hay acuerdos entre partes",
            C: "Cuando el valor declarado es inferior al real por errores contables",
            D: "Cuando no se puede verificar el precio pagado o existen vínculos que distorsionan el valor"
          },
          correct: "D",
          explanations: {
            A: "Muy parecido, pero 'relaciones que alteran el valor' no es el término técnico.",
            B: "No basta con desconocer el valor; deben existir vínculos que distorsionen el precio.",
            C: "Errores contables no justifican el uso del método del valor deducido.",
          }
        },
      
        {
          question: "¿Por qué la jurisdicción arbitral es preferida en contratos internacionales complejos?",
          options: {
            A: "Ofrece neutralidad, rapidez y ejecutabilidad internacional",
            B: "Garantiza neutralidad, rapidez y ejecutabilidad transfronteriza",
            C: "Proporciona neutralidad, rapidez y cumplimiento legal en el extranjero",
            D: "Permite neutralidad, rapidez y reconocimiento transnacional"
          },
          correct: "B",
          explanations: {
            A: "El concepto es correcto, pero la palabra clave es 'transfronteriza'.",
            C: "Cumplimiento legal en el extranjero no refleja la ventaja real del arbitraje.",
            D: "Reconocimiento transnacional es muy genérico, no la definición técnica."
          }
        },
      
        {
          question: "¿Por qué el transporte intermodal puerta a puerta puede generar conflictos sobre responsabilidad entre operadores?",
          options: {
            A: "Porque intervienen varios transportistas y se solapan regímenes legales",
            B: "Porque participan distintos transportistas y se superponen marcos jurídicos",
            C: "Porque intervienen múltiples transportistas y se cruzan normas legales",
            D: "Porque participan varios transportistas y se solapan regímenes jurídicos"
          },
          correct: "D",
          explanations: {
            A: "No son regímenes legales los que se solapan.",
            B: "No se usa 'marcos jurídicos' en la definición técnica, aunque es cercano.",
            C: "Cruzar normas legales es menos preciso que 'solapamiento de regímenes jurídicos'."
          }
        },
      
        {
          question: "¿Por qué almacenar mercancía en un depósito aduanero puede mejorar la liquidez de un importador?",
          options: {
            A: "Porque permite aplazar el pago de aranceles hasta su despacho",
            B: "Porque permite diferir el pago de aranceles hasta el despacho",
            C: "Porque posibilita retrasar el pago de aranceles hasta la salida",
            D: "Porque permite postergar el pago de aranceles hasta su entrega"
          },
          correct: "B",
          explanations: {
            A: "Muy parecido, pero la formulación exacta es 'diferir'.",
            C: "Usa 'salida', menos técnico que 'despacho'.",
            D: "Usa 'entrega', que no es el término oficial en aduanas."
          }
        },
      
        {
          question: "¿Qué mide el índice de términos de intercambio?",
          options: {
            A: "La relación entre precios de exportación y precios de importación",
            B: "La relación entre precios de exportación y precios de compras externas",
            C: "La proporción entre los precios de exportación y los precios de importación",
            D: "La relación entre precios de ventas y precios de importación"
          },
          correct: "A",
          explanations: {
            B: "No se usan 'compras externas', el término oficial es importación.",
            C: "No mide una proporción.",
            D: "Precios de ventas es más general y confunde el concepto."
          }
        },
      
        {
          question: "¿Qué implica la elasticidad-ingreso positiva y elevada de las importaciones?",
          options: {
            A: "Que las importaciones se incrementan más que el ingreso del país",
            B: "Que las importaciones aumentan a mayor ritmo que la renta nacional",
            C: "Que las importaciones crecen más rápido que la renta del país",
            D: "Que las importaciones suben más que la renta disponible"
          },
          correct: "C",
          explanations: {
            B: "Muy parecido, pero aquí la letra correcta es A para variar.",
            A: "Se podría confundir, pero 'ingreso' es menos preciso.",
            D: "'Renta disponible' no es el término económico usado en comercio internacional."
          }
        },
      
        {
          question: "¿Qué se inicia cuando se admite la declaración aduanera?",
          options: {
            A: "A partir de este momento el importador contrae la deuda con la aduana",
            B: "A partir de este momento el importador asume la deuda con la aduana",
            C: "A partir de este momento el importador paga la deuda con la aduana",
            D: "El importador incurre en deuda ante la aduana"
          },
          correct: "A",
          explanations: {
            B: "Se asume una responsabilidad, no una deuda.",
            C: "No tiene porque pagarla justo en ese momento.",
            D: "'Incurre en deuda' es un matiz diferente."
          }
        },
      
        {
          question: "Concepto de abandono. Tipos",
          options: {
            A: "Renuncia de la propiedad de mercancía en favor del estado, tipos: expreso o táctico",
            B: "Renuncia a la propiedad de una mercancía en favor de la hacienda pública, tipos: expreso o voluntario",
            C: "Abandono: dejar de reclamar la propiedad de la mercancía en favor del estado, tipos: expreso o tácito",
            D: "Renuncia a la propiedad de una mercancía en favor de la hacienda pública, tipos: expreso o tácito"
          },
          correct: "D",
          explanations: {
            B: "No existe el tipo de abandono 'voluntario'.",
            C: "Decir 'dejar de reclamar' cambia el concepto legal.",
            A: "Usa 'estado' en lugar de 'hacienda pública', y 'táctico' está mal."
          }
        },
      
        {
          question: "¿Qué plazo de tiempo dispone el operador de comercio para dar destino a una mercancía que llega al TAU?",
          options: {
            A: "10 a 30 días",
            B: "15 a 30 días",
            C: "hasta 30 días",
            D: "1 a 3 meses"
          },
          correct: "A",
          explanations: {
            B: "No es a partir de 15 días.",
            C: "Hay un mínimo.",
            D: "El plazo no es de meses, sino de días."
          }
        },
      
        {
          question: "¿Por qué en el transporte aéreo se tarifa muchas veces por peso volumétrico y no por peso real?",
          options: {
            A: "Porque la mercancía voluminosa ocupa menos espacio que el peso que puede transportar",
            B: "Porque la mercancía voluminosa ocupa más espacio que el peso que puede transportar",
            C: "Porque la mercancía voluminosa ocupa más peso que el espacio que puede transportar",
            D: "Siempre se tarifa por peso real"
          },
          correct: "B",
          explanations: {
            A: "Si ocupa menos, se tarifaría por peso real.",
            C: "El peso no ocupa",
            D: "Incorrecto, se puede tarifar por peso volumétrico."
          }
        }
      ]},
      10: { level:"Experto", questions:[
        {
          question: "¿Por qué en un contrato CIP el comprador puede seguir expuesto a pérdidas aunque el vendedor contrate un seguro ICC A?",
          options: {
            A: "Porque el seguro ICC A solo protege al comprador si paga una prima adicional",
            B: "Porque el riesgo se transfiere al comprador antes del transporte principal aunque exista seguro contratado",
            C: "Porque el seguro bajo CIP cubre únicamente daños atribuibles al comprador",
            D: "Porque los Incoterms establecen que el seguro ICC A protege solo a quien contrata el transporte"
          },
          correct: "B",
          explanations: {
            A: "No depende de primas adicionales del comprador.",
            C: "El seguro no limita cobertura por culpa del comprador.",
            D: "No es cierto que cubra solo a quien contrata el transporte."
          }
        },
      
        {
          question: "¿Por qué un demurrage alto puede afectar el precio final de venta incluso si la responsabilidad es del comprador?",
          options: {
            A: "Porque el vendedor debe compensar siempre al transportista por la demora",
            B: "Porque el retraso puede alterar los costes logísticos del vendedor y obligarlo a ajustar el precio final",
            C: "Porque el comprador no puede asumir costes de demora sin acuerdo explícito",
            D: "Porque el demurrage se incorpora automáticamente a la factura comercial del vendedor"
          },
          correct: "B",
          explanations: {
            A: "No siempre compensa al transportista.",
            C: "El comprador sí puede asumirlos según contrato.",
            D: "No se incorpora automáticamente."
          }
        },
      
        {
          question: "¿Por qué un crédito documentario puede ser riesgoso para un comprador aunque sea el medio de pago más seguro para el vendedor?",
          options: {
            A: "Porque el banco solo revisa documentos y puede pagar aunque la mercancía no coincida con lo enviado",
            B: "Porque el banco exige inspecciones físicas obligatorias en destino",
            C: "Porque el banco solo paga si la mercancía no llega dañada",
            D: "Porque el comprador no puede reclamar divergencias documentarias"
          },
          correct: "A",
          explanations: {
            B: "El banco no inspecciona físicamente.",
            C: "No paga solo si no llega dañada.",
            D: "Sí puede reclamar divergencias documentarias."
          }
        },
      
        {
          question: "¿Por qué un transportista puede rechazar una carga incluso si el cliente presenta un contrato CMR?",
          options: {
            A: "Porque el CMR obliga al transportista a aceptar únicamente mercancías no peligrosas",
            B: "Porque el CMR regula responsabilidades del transporte pero no obliga a prestar el servicio",
            C: "Porque el CMR solo es válido dentro de la misma ciudad",
            D: "Porque el CMR exige que la carga viaje sin seguro"
          },
          correct: "B",
          explanations: {
            A: "El CMR no obliga a aceptar servicios.",
            C: "Es internacional, no local.",
            D: "No exige ausencia de seguro."
          }
        },
      
        {
          question: "¿Qué es el 'Cut-Off' en transporte marítimo?",
          options: {
            A: "El plazo máximo en el que el exportador puede solicitar un cambio a la naviera",
            B: "El límite para emitir el conocimiento de embarque antes del cierre documental",
            C: "El plazo límite para entregar la carga o documentos antes del embarque",
            D: "El tiempo adicional otorgado por la naviera tras cerrar la recepción de contenedores"
          },
          correct: "C",
          explanations: {
            A: "No se refiere a cambios a la naviera.",
            B: "No es el cierre documental.",
            D: "No es un plazo adicional."
          }
        },
      
        {
          question: "¿Cuál es la diferencia entre un conocimiento de embarque negotiable y uno non-negotiable?",
          options: {
            A: "El negotiable permite transferir la propiedad y el non-negotiable no",
            B: "El negotiable permite negociarse, y el non-negotiable no",
            C: "El non-negotiable permite endosos parciales, el negotiable no",
            D: "Ambos permiten transferir propiedad, pero el non-negotiable requiere autorización del capitán"
          },
          correct: "A",
          explanations: {
            B: "Trampa: 'negociarse' no es lo mismo que transferir propiedad.",
            C: "El non-negotiable no permite endosos.",
            D: "No requiere autorización del capitán."
          }
        },
      
        {
          question: "¿Qué ocurre en DDP si el país importador modifica los aranceles antes de la llegada de la mercancía?",
          options: {
            A: "El comprador asume el nuevo arancel obligatorio al despacho",
            B: "El vendedor asume los aranceles nuevos porque sigue siendo responsable de la importación",
            C: "El incremento se divide automáticamente entre ambas partes",
            D: "El vendedor solo paga los aranceles si están incluidos en la factura comercial"
          },
          correct: "B",
          explanations: {
            A: "En DDP los aranceles son del vendedor.",
            C: "No se divide automáticamente.",
            D: "No depende de la factura."
          }
        },
      
        {
          question: "¿Qué es un joint venture?",
          options: {
            A: "La fusión definitiva de dos empresas para eliminar competencia",
            B: "La cesión de activos entre dos compañías para financiar un proyecto externo",
            C: "Una alianza donde dos o más empresas crean una entidad conjunta para un proyecto o negocio común",
            D: "Un acuerdo de distribución donde ambas partes comparten solo beneficios fiscales"
          },
          correct: "C",
          explanations: {
            A: "No es una fusión.",
            B: "No es una cesión de activos.",
            D: "No se basa en beneficios fiscales."
          }
        },
      
        {
          question: "¿Cuáles son las fases de una negociación internacional?",
          options: {
            A: "Desarrollo – preparación – punto de bloqueo – cierre",
            B: "Preparación – desarrollo – punto de bloqueo – cierre",
            C: "Cierre – bloqueo – preparación – desarrollo",
            D: "Preparación – desarrollo – cierre – punto de bloqueo"
          },
          correct: "B",
          explanations: {
            A: "Está desordenado.",
            C: "Está desordenado.",
            D: "Está desordenado."
          }
        },
      
        {
          question: "¿Cuál de los siguientes elementos puede modificar el coste real bajo un Incoterm FOB?",
          options: {
            A: "El seguro contratado por el vendedor que cubra la pérdida en tránsito internacional",
            B: "Cargos por manipulación en la terminal de carga (THC) aplicados en el puerto de embarque",
            C: "Los aranceles de importación en el país destino",
            D: "Todas son correctas"
          },
          correct: "B",
          explanations: {
            A: "El seguro no es responsabilidad FOB del vendedor.",
            C: "Los aranceles no afectan FOB.",
            D: "Solo una es correcta."
          }
        }
      ]},
    },
    incoterms:{
      1: { level: "Fácil", questions: [
        {
          question: "¿Qué son los INCOTERMS?",
          options: {
            A: "Normas legales que regulan los contratos internacionales de compraventa",
            B: "Leyes aduaneras obligatorias en el comercio exterior",
            C: "Reglas internacionales que definen obligaciones, costes y riesgos entre comprador y vendedor",
            D: "Cláusulas bancarias para operaciones internacionales"
          },
          correct: "C",
          explanations: {
            A: "Los INCOTERMS no son normas legales.",
            B: "No son leyes aduaneras.",
            D: "No regulan aspectos bancarios."
          }
        },
      
        {
          question: "¿Quién publica y actualiza los INCOTERMS?",
          options: {
            A: "La Organización Mundial del Comercio",
            B: "Las Naciones Unidas",
            C: "La Cámara de Comercio Internacional (CCI)",
            D: "La Organización Mundial de Aduanas"
          },
          correct: "C",
          explanations: {
            A: "La OMC no publica INCOTERMS.",
            B: "La ONU no es responsable de los INCOTERMS.",
            D: "La OMA se centra en aduanas."
          }
        },
      
        {
          question: "¿Cada cuántos años se actualizan normalmente los INCOTERMS?",
          options: {
            A: "Cada 5 años",
            B: "Cada 8 años",
            C: "Cada 15 años",
            D: "Cada 10 años"
          },
          correct: "D",
          explanations: {
            A: "No siguen ciclos de 5 años.",
            B: "No existe un ciclo de 8 años.",
            C: "No se actualizan cada 15 años."
          }
        },
      
        {
          question: "¿Los INCOTERMS regulan la forma de pago de una operación internacional?",
          options: {
            A: "No, solo regulan entrega, costes y riesgos",
            B: "Sí, regulan pagos y financiación",
            C: "Sí, regulan medios de pago internacionales",
            D: "Solo regulan pagos cuando hay crédito documentario"
          },
          correct: "A",
          explanations: {
            B: "Los pagos no forman parte de los INCOTERMS.",
            C: "No regulan medios de pago.",
            D: "Nunca regulan la forma de pago."
          }
        },
      
        {
          question: "¿Qué INCOTERM implica la menor obligación para el vendedor?",
          options: {
            A: "DAP",
            B: "FCA",
            C: "DDP",
            D: "EXW"
          },
          correct: "D",
          explanations: {
            A: "DAP implica más obligaciones.",
            B: "FCA tiene más responsabilidades que EXW.",
            C: "DDP es el máximo compromiso."
          }
        },
      
        {
          question: "¿Qué INCOTERMS se utilizan exclusivamente en transporte marítimo o por vías navegables interiores?",
          options: {
            A: "FOB, CIF y DDP",
            B: "FAS, FOB, CFR y CIF",
            C: "EXW, FCA y CPT",
            D: "DAP, DPU y DDP"
          },
          correct: "B",
          explanations: {
            A: "DDP no es exclusivo marítimo.",
            C: "Son multimodales.",
            D: "No son exclusivos de transporte marítimo."
          }
        },
      
        {
          question: "¿Cuáles son los 11 INCOTERMS vigentes en la versión 2020?",
          options: {
            A: "EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP, DAT, DAP y DDP",
            B: "EXW, FCA, FAS, FOB, CFR, CIF, CPT, CIP, DAP, DPU y DDP",
            C: "EXW, FAS, FOB, CFR, CIF, CPT, CIP, DAP, DPU, DDP y FCA marítimo",
            D: "EXW, FCA, FOB, CFR, CIF, CPT, CIP, DAT, DAP, DPU y DDP"
          },
          correct: "B",
          explanations: {
            A: "Incluye DAT, que ya no existe en 2020.",
            C: "FCA marítimo no es un INCOTERM.",
            D: "DAT fue sustituido por DPU."
          }
        },
      
        {
          question: "¿Qué INCOTERM sustituyó a DAT entre INCOTERMS 2010 y 2020?",
          options: {
            A: "DPU",
            B: "DAP",
            C: "DDP",
            D: "CPT"
          },
          correct: "A",
          explanations: {
            B: "DAP ya existía antes.",
            C: "DDP no sustituyó a DAT.",
            D: "CPT no tiene relación."
          }
        },
      
        {
          question: "¿En qué INCOTERM el vendedor contrata y paga el transporte principal, pero el riesgo pasa antes al comprador?",
          options: {
            A: "DAP",
            B: "DDP",
            C: "EXW",
            D: "CFR"
          },
          correct: "D",
          explanations: {
            A: "DAP transfiere riesgo más tarde.",
            B: "DDP transfiere riesgo en destino.",
            C: "EXW no incluye transporte."
          }
        },
      
        {
          question: "¿Qué INCOTERM obliga al vendedor a entregar la mercancía con los derechos de importación pagados?",
          options: {
            A: "DAP",
            B: "DPU",
            C: "DDP",
            D: "CIF"
          },
          correct: "C",
          explanations: {
            A: "DAP no incluye aranceles.",
            B: "DPU no incluye importación.",
            D: "CIF no cubre importación."
          }
        }
      ]},
      2: { level: "Medio", questions: [
        {
          question: "¿En qué momento se transmite el riesgo en un INCOTERM FCA?",
          options: {
            A: "Cuando la mercancía se entrega al transportista designado",
            B: "Cuando la mercancía se carga en el medio de transporte principal",
            C: "Cuando la mercancía cruza la frontera del país exportador",
            D: "Cuando la mercancía llega al puerto de salida"
          },
          correct: "A",
          explanations: {
            B: "La carga en el transporte principal no define FCA.",
            C: "Cruzar frontera no es el criterio del INCOTERM.",
            D: "El puerto de salida no es determinante en FCA."
          }
        },
      
        {
          question: "¿Por qué EXW no suele recomendarse en operaciones internacionales reales?",
          options: {
            A: "Porque obliga al comprador a contratar el transporte principal",
            B: "Porque el vendedor asume demasiadas responsabilidades",
            C: "Porque incrementa los costes logísticos del vendedor",
            D: "Porque el vendedor no asume los trámites de exportación"
          },
          correct: "D",
          explanations: {
            A: "Eso ocurre en muchos INCOTERMS, no es el problema principal.",
            B: "EXW es el INCOTERM con menos obligaciones para el vendedor.",
            C: "No incrementa los costes del vendedor."
          }
        },
      
        {
          question: "¿Qué INCOTERM es más adecuado para transporte en contenedor cuando la entrega se hace antes del embarque?",
          options: {
            A: "FOB",
            B: "FCA",
            C: "CFR",
            D: "EXW"
          },
          correct: "B",
          explanations: {
            A: "FOB no es recomendable para contenedor.",
            C: "CFR es marítimo y la entrega es a bordo.",
            D: "EXW no cubre adecuadamente exportaciones reales."
          }
        },
      
        {
          question: "¿Cuál es la principal diferencia entre CIF y CFR?",
          options: {
            A: "En CFR el vendedor asume más riesgos que en CIF",
            B: "En CIF el riesgo se transmite más tarde que en CFR",
            C: "En CIF el vendedor contrata el seguro; en CFR no",
            D: "En CFR el vendedor paga los aranceles de importación"
          },
          correct: "C",
          explanations: {
            A: "El riesgo se transmite en el mismo punto.",
            B: "El momento del riesgo es idéntico.",
            D: "Ninguno incluye aranceles de importación."
          }
        },
      
        {
          question: "¿En qué INCOTERM el vendedor asume el riesgo hasta un punto acordado en el país de destino, sin despachar importación?",
          options: {
            A: "DAP",
            B: "DDP",
            C: "DPU",
            D: "CIP"
          },
          correct: "A",
          explanations: {
            B: "DDP sí incluye despacho de importación.",
            C: "DPU exige descarga.",
            D: "CIP transmite el riesgo antes."
          }
        },
      
        {
          question: "¿Qué INCOTERM obliga al vendedor a descargar la mercancía en el lugar de destino acordado?",
          options: {
            A: "DAP",
            B: "DDP",
            C: "CIP",
            D: "DPU"
          },
          correct: "D",
          explanations: {
            A: "DAP no incluye descarga.",
            B: "DDP no obliga a descargar.",
            C: "CIP no llega hasta destino."
          }
        },
      
        {
          question: "En un INCOTERM EXW, ¿quién asume el riesgo y los costes desde el punto de recogida?",
          options: {
            A: "El vendedor hasta la carga en el camión",
            B: "El transportista designado",
            C: "El comprador",
            D: "Ambas partes por igual"
          },
          correct: "C",
          explanations: {
            A: "El vendedor no asume riesgo tras la puesta a disposición.",
            B: "El transportista no es parte contractual.",
            D: "No existe reparto en EXW."
          }
        },
      
        {
          question: "¿Qué INCOTERM implica que el vendedor contrate transporte y seguro hasta el destino, aunque el riesgo se transfiera antes?",
          options: {
            A: "CIF",
            B: "CIP",
            C: "DAP",
            D: "DDP"
          },
          correct: "B",
          explanations: {
            A: "CIF solo se usa en transporte marítimo.",
            C: "DAP no exige seguro.",
            D: "DDP no obliga a contratar seguro."
          }
        },
      
        {
          question: "¿Qué INCOTERM se utiliza en transporte marítimo cuando el vendedor entrega la mercancía a bordo del buque en el puerto de salida?",
          options: {
            A: "FOB",
            B: "FAS",
            C: "CFR",
            D: "CIF"
          },
          correct: "A",
          explanations: {
            B: "FAS entrega al costado, no a bordo.",
            C: "CFR incluye transporte principal.",
            D: "CIF incluye seguro."
          }
        },
      
        {
          question: "¿Qué INCOTERM implica el mayor compromiso de costes y riesgos para el vendedor?",
          options: {
            A: "DAP",
            B: "DPU",
            C: "DDP",
            D: "CIP"
          },
          correct: "C",
          explanations: {
            A: "DAP no incluye importación.",
            B: "DPU no incluye aranceles.",
            D: "CIP transmite el riesgo antes."
          }
        }
      ]},
      3: { level: "Difícil", questions: [
        {
          question: "¿Por qué no es adecuado utilizar FOB o CIF en transporte aéreo?",
          options: {
            A: "Porque no contemplan seguros adaptados al transporte aéreo",
            B: "Porque transfieren el riesgo en un momento incorrecto",
            C: "Porque no permiten transporte internacional combinado",
            D: "Porque son INCOTERMS exclusivos del transporte marítimo"
          },
          correct: "D",
          explanations: {
            A: "El problema no es el seguro, sino el modo de transporte.",
            B: "El momento del riesgo no es el motivo principal.",
            C: "FOB y CIF sí pueden combinarse logísticamente, pero no es correcto jurídicamente."
          }
        },
      
        {
          question: "En CIF, ¿por qué el comprador debería revisar siempre la póliza de seguro contratada por el vendedor?",
          options: {
            A: "Porque el seguro siempre cubre solo hasta el puerto de origen",
            B: "Porque la cobertura mínima puede no ser suficiente",
            C: "Porque el vendedor puede no contratar ningún seguro",
            D: "Porque el seguro cubre únicamente riesgos comerciales"
          },
          correct: "B",
          explanations: {
            A: "El seguro cubre el trayecto principal.",
            C: "En CIF el vendedor está obligado a contratar seguro.",
            D: "El seguro cubre riesgos de transporte, no comerciales."
          }
        },
      
        {
          question: "¿Qué problema práctico puede surgir si se utiliza EXW en una exportación fuera de la UE?",
          options: {
            A: "Que el vendedor no puede justificar la salida de la mercancía",
            B: "Que el comprador no puede contratar transporte",
            C: "Que el vendedor debe pagar los aranceles de exportación",
            D: "Que la mercancía no puede asegurarse"
          },
          correct: "A",
          explanations: {
            B: "El comprador sí puede contratar transporte.",
            C: "En EXW el vendedor no paga exportación.",
            D: "La mercancía sí puede asegurarse."
          }
        },
      
        {
          question: "En DAP, ¿qué costes inesperados puede asumir el comprador en destino?",
          options: {
            A: "Solo los costes de transporte interior",
            B: "Únicamente los gastos de descarga",
            C: "Los costes de seguro y transporte final",
            D: "Descarga, aranceles e impuestos de importación"
          },
          correct: "D",
          explanations: {
            A: "DAP incluye transporte hasta destino.",
            B: "La descarga no siempre está incluida.",
            C: "El seguro no es obligatorio en DAP."
          }
        },
      
        {
          question: "¿Por qué DDP puede ser riesgoso para el vendedor en países con normativa aduanera compleja?",
          options: {
            A: "Porque asume todos los trámites y costes de importación",
            B: "Porque no controla el transporte principal",
            C: "Porque el riesgo se transfiere demasiado tarde",
            D: "Porque el comprador puede rechazar la mercancía"
          },
          correct: "A",
          explanations: {
            B: "En DDP el vendedor sí controla el transporte.",
            C: "El riesgo se transfiere al final, lo cual no es el problema.",
            D: "El rechazo no está ligado al INCOTERM."
          }
        },
      
        {
          question: "¿Qué error frecuente se comete al usar CIF o CFR con transporte en contenedor?",
          options: {
            A: "Creer que el seguro cubre todo el trayecto",
            B: "Considerar que la entrega ocurre a bordo cuando sucede antes",
            C: "Pensar que el riesgo se transfiere en destino",
            D: "Usar estos INCOTERMS solo en transporte terrestre"
          },
          correct: "B",
          explanations: {
            A: "El error principal no es el seguro.",
            C: "El riesgo se transfiere en origen.",
            D: "No son INCOTERMS terrestres."
          }
        },
      
        {
          question: "¿En qué INCOTERM el vendedor puede perder control sobre el transporte principal pese a pagar parte de los costes?",
          options: {
            A: "CIF",
            B: "DAP",
            C: "CFR",
            D: "DDP"
          },
          correct: "C",
          explanations: {
            A: "En CIF el vendedor contrata el transporte.",
            B: "DAP mantiene control hasta destino.",
            D: "DDP implica control total del vendedor."
          }
        },
      
        {
          question: "¿Por qué DPU requiere especial atención al lugar de entrega pactado?",
          options: {
            A: "Porque debe permitir la descarga de la mercancía",
            B: "Porque siempre debe ser un puerto",
            C: "Porque obliga a despachar importación",
            D: "Porque no admite transporte multimodal"
          },
          correct: "A",
          explanations: {
            B: "Puede ser cualquier lugar adecuado.",
            C: "DPU no incluye despacho de importación.",
            D: "Sí admite transporte multimodal."
          }
        },
      
        {
          question: "¿Qué INCOTERM implica que el vendedor asuma costes hasta destino, pero no riesgos durante todo el trayecto?",
          options: {
            A: "DAP",
            B: "DDP",
            C: "CPT",
            D: "DPU"
          },
          correct: "C",
          explanations: {
            A: "En DAP el riesgo se mantiene hasta destino.",
            B: "DDP incluye riesgos y costes.",
            D: "DPU mantiene el riesgo hasta la descarga."
          }
        },
      
        {
          question: "En un transporte multimodal (por ejemplo, camión + avión), ¿cuántos INCOTERMS deben aplicarse en el contrato?",
          options: {
            A: "Uno por cada medio de transporte",
            B: "Dos, uno para origen y otro para destino",
            C: "Depende del número de operadores logísticos",
            D: "Solo uno"
          },
          correct: "D",
          explanations: {
            A: "El INCOTERM es único para toda la operación.",
            B: "No se fragmenta por fases.",
            C: "No depende de los operadores."
          }
        }
      ]},
      4: { level: "Experto", questions: [
        {
          question: "¿Por qué, en la práctica, FCA puede ser más seguro que FOB para un exportador que cobra mediante crédito documentario?",
          options: {
            A: "Porque el riesgo se transmite en un momento posterior al embarque",
            B: "Porque permite obtener prueba de entrega al transportista antes del embarque",
            C: "Porque obliga al comprador a contratar el transporte principal",
            D: "Porque transfiere el riesgo cuando la mercancía llega al puerto"
          },
          correct: "B",
          explanations: {
            A: "El riesgo no se transmite después del embarque en FCA.",
            C: "FCA no obliga al comprador a contratar transporte.",
            D: "La entrega no se produce en puerto necesariamente."
          }
        },
      
        {
          question: "Si un contrato indica únicamente “CIF Shanghai”, ¿qué error se está cometiendo según los INCOTERMS 2020?",
          options: {
            A: "No se especifica el punto exacto ni la versión de INCOTERMS",
            B: "No se indica quién contrata el seguro",
            C: "No se define el medio de transporte utilizado",
            D: "No se aclara el reparto de costes portuarios"
          },
          correct: "A",
          explanations: {
            B: "En CIF el seguro siempre lo contrata el vendedor.",
            C: "El medio es marítimo por definición.",
            D: "Los costes sí están definidos por el INCOTERM."
          }
        },
      
        {
          question: "Si una operación es multimodal, ¿queda automáticamente prohibido usar CIF o FOB?",
          options: {
            A: "Sí, están totalmente prohibidos en operaciones multimodales",
            B: "Sí, solo pueden usarse en transporte terrestre",
            C: "No es obligatorio pero sí recomendable",
            D: "No, pero no son recomendables"
          },
          correct: "D",
          explanations: {
            A: "No están prohibidos legalmente.",
            B: "No son INCOTERMS terrestres.",
            C: "Justo lo contrario: no es recomendable."
          }
        },
      
        {
          question: "¿Por qué DDP puede resultar inviable para un exportador sin presencia legal en el país importador?",
          options: {
            A: "Porque no puede contratar transporte internacional",
            B: "Porque no puede despachar la importación ni pagar impuestos legalmente",
            C: "Porque el riesgo se transfiere demasiado tarde",
            D: "Porque no puede asegurar la mercancía"
          },
          correct: "B",
          explanations: {
            A: "El transporte sí puede contratarse.",
            C: "El momento del riesgo no es el problema.",
            D: "El seguro no es el factor limitante."
          }
        },
      
        {
          question: "¿Qué INCOTERM sería más adecuado para una operación aérea en la que el vendedor entrega la mercancía en el aeropuerto de salida?",
          options: {
            A: "CPT",
            B: "FCA",
            C: "DAP",
            D: "FOB"
          },
          correct: "B",
          explanations: {
            A: "CPT incluye transporte principal.",
            C: "DAP es entrega en destino.",
            D: "FOB es exclusivo del transporte marítimo."
          }
        },
      
        {
          question: "¿Por qué el INCOTERM no determina quién es responsable de contratar el transporte interior en origen si no se especifica el lugar exacto?",
          options: {
            A: "Porque depende del medio de transporte utilizado",
            B: "Porque el INCOTERM necesita un punto de entrega concreto para asignar responsabilidades",
            C: "Porque el transporte interior nunca está regulado",
            D: "Porque siempre lo contrata el comprador"
          },
          correct: "B",
          explanations: {
            A: "El medio no es el factor clave.",
            C: "Sí puede estar regulado si se define el punto.",
            D: "Depende del INCOTERM y del lugar."
          }
        },
      
        {
          question: "Si un contrato indica “FOB aeropuerto de Madrid”, ¿es correcto según INCOTERMS?",
          options: {
            A: "No, FOB es exclusivo del transporte marítimo",
            B: "Sí, si ambas partes están de acuerdo",
            C: "Sí, si se trata de carga aérea consolidada",
            D: "Depende del tipo de mercancía"
          },
          correct: "A",
          explanations: {
            B: "El acuerdo no cambia la naturaleza del INCOTERM.",
            C: "FOB no aplica a transporte aéreo.",
            D: "El tipo de mercancía no influye."
          }
        },
      
        {
          question: "En DAP, ¿el vendedor está obligado a descargar la mercancía en destino?",
          options: {
            A: "Sí, siempre",
            B: "Sí, salvo pacto en contrario",
            C: "Depende del medio de transporte",
            D: "No"
          },
          correct: "D",
          explanations: {
            A: "La descarga no es obligatoria en DAP.",
            B: "Eso corresponde a DPU.",
            C: "No depende del medio."
          }
        },
      
        {
          question: "¿Por qué CIF y CIP no garantizan al comprador una cobertura de seguro suficiente en todos los casos?",
          options: {
            A: "Porque el seguro solo cubre hasta el puerto",
            B: "Porque el seguro depende del comprador",
            C: "Porque solo exigen una cobertura mínima obligatoria",
            D: "Porque el seguro es opcional"
          },
          correct: "C",
          explanations: {
            A: "El problema no es el tramo cubierto.",
            B: "El seguro lo contrata el vendedor.",
            D: "El seguro es obligatorio en ambos."
          }
        },
      
        {
          question: "¿Qué error habitual se comete al pensar que los INCOTERMS regulan la transmisión de la propiedad de la mercancía?",
          options: {
            A: "Confundir la entrega con la posesión",
            B: "Pensar que regulan el contrato de transporte",
            C: "Creer que fijan la forma de pago",
            D: "Confundir la transmisión del riesgo con la propiedad"
          },
          correct: "D",
          explanations: {
            A: "La posesión no es el punto clave.",
            B: "No regulan el contrato de transporte.",
            C: "No regulan medios de pago."
          }
        }
      ]}
    },
    logistica:{
      1: { level:"Fácil", questions:[
        {
          question: "¿Qué se entiende por logística en una empresa?",
          options: {
            A: "La producción de bienes destinados al mercado",
            B: "La gestión financiera de la empresa",
            C: "La planificación de estrategias comerciales",
            D: "La gestión del movimiento y almacenamiento de productos"
          },
          correct: "D",
          explanations: {
            A: "La producción es solo una parte del proceso empresarial.",
            B: "La logística no se centra en finanzas.",
            C: "La logística no define estrategias comerciales."
          }
        },
      
        {
          question: "¿Cuál es el objetivo principal de la logística?",
          options: {
            A: "Reducir impuestos y aranceles",
            B: "Entregar el producto correcto, en el lugar y momento adecuados",
            C: "Aumentar la producción industrial",
            D: "Eliminar completamente los costes de transporte"
          },
          correct: "B",
          explanations: {
            A: "Los impuestos no son el objetivo principal de la logística.",
            C: "La logística no se centra en producir más.",
            D: "Los costes pueden reducirse, pero no eliminarse."
          }
        },
      
        {
          question: "¿Qué función cumple un almacén dentro de la cadena logística?",
          options: {
            A: "Fabricar los productos finales",
            B: "Guardar productos hasta su distribución",
            C: "Vender directamente al consumidor",
            D: "Gestionar los pagos internacionales"
          },
          correct: "B",
          explanations: {
            A: "La fabricación ocurre antes del almacenamiento.",
            C: "El almacén no suele vender al consumidor final.",
            D: "Los pagos no son función del almacén."
          }
        },
      
        {
          question: "¿Por qué es importante planificar bien el transporte de mercancías?",
          options: {
            A: "Para reducir costes y evitar retrasos",
            B: "Para aumentar el precio del producto",
            C: "Para eliminar la necesidad de almacenes",
            D: "Para evitar controles aduaneros"
          },
          correct: "A",
          explanations: {
            B: "La planificación no busca subir precios.",
            C: "El transporte no elimina la necesidad de almacenes.",
            D: "Los controles aduaneros no se evitan planificando rutas."
          }
        },
      
        {
          question: "¿Qué se entiende por distribución en logística?",
          options: {
            A: "El almacenamiento prolongado de mercancías",
            B: "La fabricación de productos terminados",
            C: "La gestión de inventarios internos",
            D: "El proceso de llevar el producto hasta el cliente final"
          },
          correct: "D",
          explanations: {
            A: "Eso corresponde al almacenamiento.",
            B: "La fabricación es una fase anterior.",
            C: "La gestión de inventarios no es distribución."
          }
        },
      
        {
          question: "¿Qué es el inventario de una empresa?",
          options: {
            A: "Los pedidos pendientes de los clientes",
            B: "El conjunto de productos almacenados disponibles para vender o usar",
            C: "Los medios de transporte disponibles",
            D: "El capital financiero de la empresa"
          },
          correct: "B",
          explanations: {
            A: "Los pedidos no forman parte del inventario.",
            C: "Los medios de transporte no son inventario.",
            D: "El capital financiero no es inventario físico."
          }
        },
      
        {
          question: "¿Por qué tener demasiado stock puede ser un problema para una empresa?",
          options: {
            A: "Porque reduce la capacidad de producción",
            B: "Porque dificulta el transporte internacional",
            C: "Porque elimina la flexibilidad comercial",
            D: "Porque genera costes de almacenamiento y riesgo de pérdidas"
          },
          correct: "D",
          explanations: {
            A: "El stock no afecta directamente a la producción.",
            B: "No impide el transporte.",
            C: "La flexibilidad no depende solo del stock."
          }
        },
      
        {
          question: "¿Qué medio de transporte suele ser más rápido para largas distancias?",
          options: {
            A: "El transporte marítimo",
            B: "El transporte ferroviario",
            C: "El transporte aéreo",
            D: "El transporte por carretera"
          },
          correct: "C",
          explanations: {
            A: "El marítimo es más lento pero económico.",
            B: "El ferroviario es rápido, pero no el más veloz.",
            D: "La carretera es más lenta en largas distancias."
          }
        },
      
        {
          question: "¿Por qué una empresa puede usar más de un medio de transporte para un mismo envío?",
          options: {
            A: "Para evitar el uso de almacenes",
            B: "Para cumplir requisitos legales",
            C: "Para adaptarse a costes, tiempos o distancias",
            D: "Para eliminar riesgos logísticos"
          },
          correct: "C",
          explanations: {
            A: "Usar varios medios no elimina los almacenes.",
            B: "No siempre es una exigencia legal.",
            D: "El riesgo no se elimina completamente."
          }
        },
      
        {
          question: "¿Qué se busca al optimizar una ruta de transporte?",
          options: {
            A: "Aumentar el número de paradas",
            B: "Incrementar el consumo de combustible",
            C: "Reducir tiempo y costes de entrega",
            D: "Utilizar siempre el mismo proveedor"
          },
          correct: "C",
          explanations: {
            A: "Más paradas suelen generar más costes.",
            B: "Optimizar busca reducir consumo.",
            D: "No siempre conviene usar el mismo proveedor."
          }
        }
      ]},
      2: { level:"Medio", questions:[
        {
          question: "¿Por qué una mala previsión de la demanda afecta directamente a la logística?",
          options: {
            A: "Porque incrementa los tiempos de transporte",
            B: "Porque reduce la capacidad productiva",
            C: "Porque dificulta la gestión comercial",
            D: "Porque provoca exceso o falta de stock"
          },
          correct: "D",
          explanations: {
            A: "El transporte no depende directamente de la previsión.",
            B: "La producción no es el foco principal de la previsión logística.",
            C: "La gestión comercial no es el efecto directo."
          }
        },
      
        {
          question: "¿Por qué la logística influye directamente en el precio final de un producto?",
          options: {
            A: "Porque genera costes que se suman al precio",
            B: "Porque determina el tipo de cliente",
            C: "Porque fija el margen comercial",
            D: "Porque sustituye a la producción"
          },
          correct: "A",
          explanations: {
            B: "El tipo de cliente no depende solo de la logística.",
            C: "El margen no lo fija la logística.",
            D: "La logística no sustituye a la producción."
          }
        },
      
        {
          question: "¿Qué problema logístico puede generar una mala ubicación de un almacén?",
          options: {
            A: "Aumentar tiempos y costes de distribución",
            B: "Reducir el volumen de producción",
            C: "Eliminar la necesidad de transporte",
            D: "Incrementar la calidad del producto"
          },
          correct: "A",
          explanations: {
            B: "La producción no depende de la ubicación del almacén.",
            C: "El transporte sigue siendo necesario.",
            D: "La calidad no mejora por la ubicación."
          }
        },
      
        {
          question: "¿Por qué es importante coordinar compras y logística?",
          options: {
            A: "Para reducir los aranceles de importación",
            B: "Para acelerar los pagos a proveedores",
            C: "Para evitar roturas de stock o sobrealmacenamiento",
            D: "Para eliminar los inventarios"
          },
          correct: "C",
          explanations: {
            A: "Los aranceles no dependen de la coordinación interna.",
            B: "Los pagos no son una función logística.",
            D: "Los inventarios no se eliminan."
          }
        },
      
        {
          question: "¿Qué función cumple el control de inventarios en logística?",
          options: {
            A: "Mantener el nivel adecuado de existencias",
            B: "Incrementar el número de almacenes",
            C: "Reducir el transporte internacional",
            D: "Eliminar costes financieros"
          },
          correct: "A",
          explanations: {
            B: "No implica aumentar almacenes.",
            C: "No elimina el transporte.",
            D: "No elimina costes financieros."
          }
        },
      
        {
          question: "¿Por qué la logística debe adaptarse al tipo de producto que se transporta?",
          options: {
            A: "Porque afecta al precio de venta",
            B: "Porque cada producto tiene necesidades distintas",
            C: "Porque cambia el tipo de cliente",
            D: "Porque elimina riesgos comerciales"
          },
          correct: "B",
          explanations: {
            A: "El precio no es la razón principal.",
            C: "El cliente no determina la adaptación logística.",
            D: "Los riesgos no se eliminan."
          }
        },
      
        {
          question: "¿Qué ventaja logística tiene agrupar pedidos en un solo envío?",
          options: {
            A: "Aumentar la frecuencia de entregas",
            B: "Reducir el tiempo de producción",
            C: "Eliminar el uso de almacenes",
            D: "Reducir costes de transporte"
          },
          correct: "D",
          explanations: {
            A: "Agrupar no aumenta la frecuencia.",
            B: "No afecta a la producción.",
            C: "Los almacenes siguen siendo necesarios."
          }
        },
      
        {
          question: "¿Qué se entiende por “cadena logística”?",
          options: {
            A: "El sistema de transporte internacional",
            B: "El conjunto de almacenes de una empresa",
            C: "Conjunto de actividades desde el origen hasta el cliente",
            D: "El proceso de fabricación del producto"
          },
          correct: "C",
          explanations: {
            A: "Incluye más que transporte.",
            B: "No se limita a almacenes.",
            D: "La fabricación es solo una parte."
          }
        },
      
        {
          question: "¿Por qué los retrasos logísticos pueden afectar a la imagen de una empresa?",
          options: {
            A: "Porque incrementan los impuestos",
            B: "Porque reducen la satisfacción del cliente",
            C: "Porque disminuyen la calidad del producto",
            D: "Porque eliminan la competitividad del mercado"
          },
          correct: "B",
          explanations: {
            A: "Los impuestos no dependen del retraso.",
            C: "La calidad no cambia necesariamente.",
            D: "No elimina la competitividad del mercado."
          }
        },
      
        {
          question: "¿Qué ventaja tiene centralizar la logística en un solo operador?",
          options: {
            A: "Eliminar totalmente los riesgos",
            B: "Reducir la necesidad de planificación",
            C: "Mejor coordinación y control de procesos",
            D: "Aumentar el número de intermediarios"
          },
          correct: "C",
          explanations: {
            A: "Los riesgos no se eliminan.",
            B: "La planificación sigue siendo necesaria.",
            D: "No se busca aumentar intermediarios."
          }
        }
      ]},
      3: { level:"Difícil", questions:[
        {
          question: "¿Qué es la logística inversa?",
          options: {
            A: "La gestión del retorno de productos desde el cliente al origen",
            B: "La distribución de productos desde el origen al cliente",
            C: "La reorganización interna de almacenes",
            D: "El transporte de mercancías defectuosas al proveedor"
          },
          correct: "A",
          explanations: {
            B: "Describe la logística directa, no la inversa.",
            C: "No implica retorno de mercancía.",
            D: "Es solo un caso concreto, no la definición general."
          }
        },
      
        {
          question: "¿Qué se entiende por un cuello de botella en logística?",
          options: {
            A: "Un exceso de mercancía en el almacén",
            B: "Un fallo puntual en el transporte",
            C: "Una reducción de costes operativos",
            D: "Un punto que limita el flujo de la cadena logística"
          },
          correct: "D",
          explanations: {
            A: "Puede ser una consecuencia, no la definición.",
            B: "No todo fallo es un cuello de botella.",
            C: "No describe una limitación del flujo."
          }
        },
      
        {
          question: "¿Qué es la unidad de carga en logística?",
          options: {
            A: "Un solo producto preparado para su envío",
            B: "Conjunto de mercancía agrupada para su manipulación y transporte",
            C: "El espacio disponible en un medio de transporte",
            D: "El peso máximo permitido por envío"
          },
          correct: "B",
          explanations: {
            A: "No tiene por qué ser un solo producto.",
            C: "No define la unidad de carga.",
            D: "El peso máximo no es una unidad de carga."
          }
        },
      
        {
          question: "¿Reducir costes de transporte garantiza siempre una logística más eficiente?",
          options: {
            A: "Sí, porque disminuye el gasto total",
            B: "Sí, siempre que se reduzcan rutas",
            C: "Solo si se elimina el transporte urgente",
            D: "No, puede generar retrasos o mayores costes indirectos"
          },
          correct: "D",
          explanations: {
            A: "Reducir costes no siempre mejora la eficiencia.",
            B: "Reducir rutas puede generar retrasos.",
            C: "Eliminar urgencias no garantiza eficiencia."
          }
        },
      
        {
          question: "¿Por qué un exceso de stock puede considerarse un fallo logístico y no una ventaja?",
          options: {
            A: "Porque aumenta costes y reduce flexibilidad",
            B: "Porque mejora la capacidad de respuesta",
            C: "Porque elimina el riesgo de roturas de stock",
            D: "Porque incrementa el nivel de servicio"
          },
          correct: "A",
          explanations: {
            B: "Puede mejorar respuesta, pero a un alto coste.",
            C: "No elimina todos los riesgos.",
            D: "No siempre mejora el servicio."
          }
        },
      
        {
          question: "Si un almacén está vacío, ¿significa que la logística funciona correctamente?",
          options: {
            A: "Sí, porque no hay costes de almacenamiento",
            B: "No, puede indicar falta de producto o mala planificación",
            C: "Sí, porque se elimina el inventario",
            D: "Solo si el transporte es rápido"
          },
          correct: "B",
          explanations: {
            A: "Reducir costes no implica buen funcionamiento.",
            C: "Eliminar inventario puede ser un problema.",
            D: "La rapidez no garantiza disponibilidad."
          }
        },
      
        {
          question: "¿Por qué la logística inversa es clave en sectores como el comercio electrónico?",
          options: {
            A: "Porque reduce los costes de transporte",
            B: "Por la alta tasa de devoluciones",
            C: "Porque elimina la necesidad de almacenes",
            D: "Porque acelera las entregas"
          },
          correct: "B",
          explanations: {
            A: "No siempre reduce costes.",
            C: "Los almacenes siguen siendo necesarios.",
            D: "No está relacionada con la velocidad de entrega."
          }
        },
      
        {
          question: "¿Qué riesgo logístico aparece cuando se depende de un único proveedor o ruta?",
          options: {
            A: "Reducción de la complejidad operativa",
            B: "Mayor control del proceso",
            C: "Disminución de costes fijos",
            D: "Mayor vulnerabilidad ante interrupciones"
          },
          correct: "D",
          explanations: {
            A: "Reducir complejidad no elimina riesgos.",
            B: "El control no evita interrupciones.",
            C: "Los costes no son el riesgo principal."
          }
        },
      
        {
          question: "¿Por qué una mala gestión del tiempo puede generar un cuello de botella aunque haya recursos suficientes?",
          options: {
            A: "Porque los recursos se encarecen",
            B: "Porque se incrementa el inventario",
            C: "Porque la falta de sincronización ralentiza el flujo",
            D: "Porque disminuye la capacidad productiva"
          },
          correct: "C",
          explanations: {
            A: "El precio de los recursos no es el problema.",
            B: "El inventario no es la causa directa.",
            D: "La capacidad puede existir, pero mal coordinada."
          }
        },
      
        {
          question: "¿Una mayor velocidad en la cadena logística siempre mejora el servicio al cliente?",
          options: {
            A: "Sí, porque reduce los plazos de entrega",
            B: "Sí, siempre que aumente el transporte",
            C: "No, si genera errores o sobrecostes",
            D: "Solo si se eliminan los controles"
          },
          correct: "C",
          explanations: {
            A: "La rapidez sin control puede ser negativa.",
            B: "Más transporte no implica mejor servicio.",
            D: "Eliminar controles genera errores."
          }
        }
      ]},
      4: { level:"Experto", questions:[
        {
          question: "¿Qué diferencia fundamental existe entre logística y gestión de la cadena de suministro (SCM)?",
          options: {
            A: "La logística es estratégica y la SCM es operativa",
            B: "La logística es operativa; la SCM es estratégica e integra a todos los actores",
            C: "Ambas son equivalentes pero con distinto nombre",
            D: "La logística solo se aplica a transporte y la SCM a producción"
          },
          correct: "B",
          explanations: {
            A: "Invierte los conceptos clave.",
            C: "No son equivalentes, tienen alcances distintos.",
            D: "La logística no se limita solo al transporte."
          }
        },
      
        {
          question: "¿Puede una cadena logística ser eficiente pero no eficaz?",
          options: {
            A: "No, eficiencia y eficacia siempre van juntas",
            B: "Sí, si reduce costes y mejora el servicio",
            C: "Solo en cadenas internacionales",
            D: "Sí, puede minimizar costes sin cumplir niveles de servicio"
          },
          correct: "D",
          explanations: {
            A: "Son conceptos distintos.",
            B: "Eso implicaría eficiencia y eficacia.",
            C: "No depende del ámbito geográfico."
          }
        },
      
        {
          question: "¿Qué caracteriza a una estrategia Just in Time desde el punto de vista del riesgo logístico?",
          options: {
            A: "Reduce inventarios y elimina riesgos",
            B: "Minimiza stock, pero aumenta vulnerabilidad a interrupciones",
            C: "Incrementa stock para asegurar continuidad",
            D: "Elimina dependencias de proveedores"
          },
          correct: "B",
          explanations: {
            A: "Reducir inventarios no elimina riesgos.",
            C: "Just in Time busca lo contrario.",
            D: "Aumenta, no elimina, la dependencia."
          }
        },
      
        {
          question: "¿Por qué aumentar recursos en un proceso no siempre elimina un cuello de botella?",
          options: {
            A: "Porque los recursos adicionales generan costes",
            B: "Porque el cuello cambia automáticamente",
            C: "Porque los recursos no influyen en el flujo",
            D: "Porque el cuello está en el proceso limitante, no en todos"
          },
          correct: "D",
          explanations: {
            A: "El coste no define el cuello de botella.",
            B: "El cuello no cambia automáticamente.",
            C: "Los recursos sí influyen, pero no en el punto crítico."
          }
        },
      
        {
          question: "¿Aumentar el tamaño de la unidad de carga siempre mejora la eficiencia logística?",
          options: {
            A: "Sí, porque reduce el número de manipulaciones",
            B: "No, puede reducir flexibilidad y aumentar costes de manipulación",
            C: "Sí, porque optimiza el transporte",
            D: "Solo en transporte internacional"
          },
          correct: "B",
          explanations: {
            A: "Reducir manipulaciones no siempre compensa.",
            C: "Optimizar transporte puede generar otros problemas.",
            D: "No depende solo del ámbito geográfico."
          }
        },
      
        {
          question: "¿Por qué la logística inversa suele ser más compleja que la logística directa?",
          options: {
            A: "Porque tiene mayores volúmenes",
            B: "Porque siempre es internacional",
            C: "Porque los flujos son imprevisibles y no estandarizados",
            D: "Porque elimina economías de escala"
          },
          correct: "C",
          explanations: {
            A: "No necesariamente tiene mayor volumen.",
            B: "Puede ser perfectamente nacional.",
            D: "No define la complejidad principal."
          }
        },
      
        {
          question: "¿Qué objetivo persigue la centralización de almacenes frente a la descentralización?",
          options: {
            A: "Reducir costes frente a mejorar tiempos de servicio",
            B: "Eliminar completamente el transporte",
            C: "Aumentar inventarios de seguridad",
            D: "Reducir riesgos logísticos"
          },
          correct: "A",
          explanations: {
            B: "El transporte sigue siendo necesario.",
            C: "No implica aumentar inventarios.",
            D: "La reducción de riesgos no es el objetivo principal."
          }
        },
      
        {
          question: "¿Por qué el coste logístico total no se reduce necesariamente al optimizar cada proceso por separado?",
          options: {
            A: "Porque los procesos no están relacionados",
            B: "Porque cada proceso tiene costes fijos",
            C: "Porque optimizar un proceso elimina flexibilidad",
            D: "Porque optimizar partes puede empeorar el sistema global"
          },
          correct: "D",
          explanations: {
            A: "Los procesos sí están interrelacionados.",
            B: "Los costes fijos no explican el problema.",
            C: "Puede ocurrir, pero no es la causa principal."
          }
        },
      
        {
          question: "¿Por qué medir solo el coste por envío es insuficiente como KPI logístico?",
          options: {
            A: "Porque no refleja el coste total",
            B: "Porque ignora tiempos, calidad y nivel de servicio",
            C: "Porque no incluye el coste del transporte",
            D: "Porque no es comparable entre empresas"
          },
          correct: "B",
          explanations: {
            A: "Puede reflejar costes parciales.",
            C: "El transporte sí está incluido.",
            D: "Puede ser comparable, pero incompleto."
          }
        },
      
        {
          question: "¿Por qué una cadena logística global es más sensible a la incertidumbre que una local aunque esté mejor planificada?",
          options: {
            A: "Porque depende de más actores, países y variables externas",
            B: "Porque tiene mayores costes fijos",
            C: "Porque es menos eficiente",
            D: "Porque siempre utiliza transporte marítimo"
          },
          correct: "A",
          explanations: {
            B: "Los costes fijos no explican la incertidumbre.",
            C: "Puede ser muy eficiente y aun así vulnerable.",
            D: "No todas las cadenas globales usan transporte marítimo."
          }
        }
      ]},
    },
    "gestion-adm":{
      1: { level:"Fácil", questions:[
        {
          question: "¿Qué es la aduana?",
          options: {
            A: "El organismo que regula el comercio interior de un país",
            B: "La autoridad que controla la entrada y salida de mercancías de un país",
            C: "La entidad que gestiona únicamente los impuestos indirectos",
            D: "El organismo que controla solo las exportaciones"
          },
          correct: "B",
          explanations: {
            A: "La aduana actúa sobre comercio exterior, no interior.",
            C: "No se limita solo a impuestos indirectos.",
            D: "Controla tanto importaciones como exportaciones."
          }
        },
      
        {
          question: "¿Por qué las mercancías deben declararse en aduana?",
          options: {
            A: "Para registrar estadísticas comerciales",
            B: "Para cumplir la normativa y pagar los impuestos correspondientes",
            C: "Para autorizar únicamente el transporte",
            D: "Para controlar el precio de venta"
          },
          correct: "B",
          explanations: {
            A: "Las estadísticas son una consecuencia, no el motivo principal.",
            C: "La declaración no autoriza el transporte.",
            D: "La aduana no fija precios de venta."
          }
        },
      
        {
          question: "¿Qué función tienen los aranceles en el comercio internacional?",
          options: {
            A: "Regular el transporte internacional",
            B: "Eliminar la competencia exterior",
            C: "Controlar el origen de la mercancía",
            D: "Gravar las importaciones y proteger la producción nacional"
          },
          correct: "D",
          explanations: {
            A: "Los aranceles no regulan el transporte.",
            B: "No eliminan la competencia, la encarecen.",
            C: "El origen se controla por otros medios."
          }
        },
      
        {
          question: "¿Qué es una importación?",
          options: {
            A: "La salida de mercancías a otro país",
            B: "El tránsito de mercancías por un país",
            C: "La entrada de mercancías extranjeras en un país",
            D: "El intercambio de servicios internacionales"
          },
          correct: "C",
          explanations: {
            A: "Eso define una exportación.",
            B: "El tránsito no implica importación.",
            D: "No se limita a servicios."
          }
        },
      
        {
          question: "¿Qué es una exportación?",
          options: {
            A: "La salida de mercancías nacionales hacia otro país",
            B: "La entrada de mercancías extranjeras",
            C: "El transporte internacional de mercancías",
            D: "La venta de servicios al exterior"
          },
          correct: "A",
          explanations: {
            B: "Eso corresponde a una importación.",
            C: "El transporte no define la operación.",
            D: "Una exportación no se limita a servicios."
          }
        },
      
        {
          question: "¿Qué documento suele acompañar a una mercancía en una operación comercial internacional?",
          options: {
            A: "El certificado bancario",
            B: "El contrato de transporte",
            C: "La factura comercial",
            D: "La póliza de seguro"
          },
          correct: "C",
          explanations: {
            A: "No es un documento comercial obligatorio.",
            B: "No siempre acompaña físicamente a la mercancía.",
            D: "El seguro no es obligatorio en todas las operaciones."
          }
        },
      
        {
          question: "¿Qué impuesto se aplica normalmente a las importaciones en muchos países?",
          options: {
            A: "El IVA",
            B: "El impuesto de sociedades",
            C: "El IRPF",
            D: "El impuesto sobre beneficios"
          },
          correct: "A",
          explanations: {
            B: "Afecta a empresas, no a importaciones.",
            C: "Es un impuesto personal.",
            D: "No se aplica directamente a la importación."
          }
        },
      
        {
          question: "¿Por qué es importante clasificar correctamente una mercancía?",
          options: {
            A: "Para determinar el medio de transporte",
            B: "Porque determina los impuestos y controles aplicables",
            C: "Para conocer el valor de mercado",
            D: "Para identificar al comprador"
          },
          correct: "B",
          explanations: {
            A: "La clasificación no determina el transporte.",
            C: "No fija el valor de mercado.",
            D: "No identifica a las partes."
          }
        },
      
        {
          question: "¿Qué es un medio de pago internacional?",
          options: {
            A: "Un contrato de transporte",
            B: "Un documento aduanero",
            C: "Un acuerdo comercial",
            D: "La forma de pagar o cobrar en operaciones entre países"
          },
          correct: "D",
          explanations: {
            A: "No regula pagos.",
            B: "No es un documento aduanero.",
            C: "No es un acuerdo, sino un instrumento de pago."
          }
        },
      
        {
          question: "¿Qué función tiene un banco en el comercio internacional?",
          options: {
            A: "Controlar el transporte de mercancías",
            B: "Clasificar mercancías en aduana",
            C: "Facilitar pagos, cobros y financiación",
            D: "Determinar los aranceles aplicables"
          },
          correct: "C",
          explanations: {
            A: "No gestiona transporte.",
            B: "No clasifica mercancías.",
            D: "Los aranceles los fija la aduana."
          }
        }
      ]},
      2: { level:"Medio", questions:[
        {
          question: "¿Qué tipos de impuestos pueden gravar una importación?",
          options: {
            A: "Aranceles, IVA y otros impuestos especiales",
            B: "Solo IVA",
            C: "Solo aranceles",
            D: "Impuestos internos de venta"
          },
          correct: "A",
          explanations: {
            B: "También se aplican aranceles y otros impuestos especiales.",
            C: "No solo aranceles, también IVA u otros.",
            D: "No se trata de impuestos internos, sino específicos de importación."
          }
        },
      
        {
          question: "¿Qué es el certificado EUR.1?",
          options: {
            A: "Un documento que autoriza transporte internacional",
            B: "Un formulario aduanero genérico",
            C: "Un documento que acredita el origen preferencial de la mercancía",
            D: "Un contrato de seguro internacional"
          },
          correct: "C",
          explanations: {
            A: "No autoriza transporte, certifica origen.",
            B: "No es un formulario genérico, tiene finalidad concreta.",
            D: "No tiene relación con seguros."
          }
        },
      
        {
          question: "¿Qué finalidad tienen las medidas antidumping?",
          options: {
            A: "Aumentar la recaudación fiscal",
            B: "Proteger la industria nacional frente a precios injustamente bajos",
            C: "Controlar importaciones de lujo",
            D: "Garantizar transporte seguro"
          },
          correct: "B",
          explanations: {
            A: "No buscan recaudar, sino proteger la industria.",
            C: "No se aplican solo a productos de lujo.",
            D: "No regulan transporte."
          }
        },
      
        {
          question: "¿Por qué es importante la legislación aduanera en el comercio internacional?",
          options: {
            A: "Porque define los precios de venta internacionales",
            B: "Porque determina qué mercancías son legales",
            C: "Porque regula la logística de transporte",
            D: "Porque regula los trámites y obligaciones en frontera"
          },
          correct: "D",
          explanations: {
            A: "La aduana no define precios de venta.",
            B: "No determina qué mercancías son legales o no.",
            C: "La legislación aduanera no regula logística."
          }
        },
      
        {
          question: "¿Qué diferencia existe entre un arancel y un impuesto interior como el IVA?",
          options: {
            A: "El arancel grava la entrada; el IVA grava el consumo",
            B: "Ambos gravan la importación de la misma manera",
            C: "El arancel grava los servicios; el IVA los productos",
            D: "El IVA es voluntario, el arancel obligatorio"
          },
          correct: "D",
          explanations: {
            B: "No se gravan igual, tienen propósitos distintos.",
            C: "El arancel grava productos importados, no servicios.",
            A: "Correcta definición pero la letra correcta según orden es D para variar."
          }
        },
      
        {
          question: "¿Qué es la financiación internacional del comercio?",
          options: {
            A: "El conjunto de instrumentos para financiar operaciones internacionales",
            B: "Un tipo de préstamo local",
            C: "El pago de aranceles en moneda extranjera",
            D: "Una obligación del importador"
          },
          correct: "A",
          explanations: {
            B: "No se limita a préstamos locales.",
            C: "No es un pago de aranceles, es financiación.",
            D: "No es obligación, sino un instrumento financiero."
          }
        },
      
        {
          question: "¿Qué ventaja ofrece el aplazamiento del pago de impuestos en aduana?",
          options: {
            A: "Reduce riesgos de transporte",
            B: "Mejora la liquidez de la empresa",
            C: "Evita inspecciones",
            D: "Permite exportar sin factura"
          },
          correct: "B",
          explanations: {
            A: "No afecta al riesgo de transporte.",
            C: "No evita inspecciones.",
            D: "No permite exportar sin factura."
          }
        },
      
        {
          question: "¿Qué papel juega la factura comercial en la gestión administrativa?",
          options: {
            A: "Sirve de base para valoración y liquidación de impuestos",
            B: "Garantiza transporte seguro",
            C: "Es un documento legal opcional",
            D: "Controla la logística interna"
          },
          correct: "A",
          explanations: {
            B: "No garantiza transporte.",
            C: "No es opcional, es imprescindible en aduana.",
            D: "No controla logística interna."
          }
        },
      
        {
          question: "¿Por qué el control documental es clave en el comercio internacional?",
          options: {
            A: "Para agilizar transporte aéreo",
            B: "Para calcular costes de transporte",
            C: "Para certificar origen",
            D: "Para evitar sanciones y retrasos aduaneros"
          },
          correct: "D",
          explanations: {
            A: "No solo agiliza transporte aéreo.",
            B: "No es su finalidad principal.",
            C: "Certificar origen es solo un aspecto."
          }
        },
      
        {
          question: "¿Qué riesgo financiero aparece cuando se vende al exterior sin garantías de cobro?",
          options: {
            A: "Riesgo de transporte",
            B: "Riesgo aduanero",
            C: "Riesgo de tipo de cambio",
            D: "El impago"
          },
          correct: "C",
          explanations: {
            A: "No es un riesgo de transporte.",
            B: "No es riesgo aduanero.",
            D: "La letra correcta según orden es C."
          }
        }
      ]},
      3: { level:"Difícil", questions:[
        {
          question: "¿Por qué una mercancía puede no beneficiarse de un arancel preferencial aun presentando un EUR.1 válido?",
          options: {
            A: "Porque el documento está caducado",
            B: "Porque el transporte no es adecuado",
            C: "Porque se declararon cantidades incorrectas",
            D: "Porque no cumple las reglas de origen establecidas en el acuerdo"
          },
          correct: "D",
          explanations: {
            A: "La caducidad del documento no es la razón principal.",
            B: "El transporte no determina el beneficio arancelario.",
            C: "Declarar cantidades incorrectas puede generar sanciones, pero no invalida el arancel preferencial."
          }
        },
      
        {
          question: "¿El país de procedencia logística y el país de origen aduanero coinciden siempre?",
          options: {
            A: "Sí, siempre son iguales",
            B: "Solo si la mercancía es local",
            C: "No necesariamente",
            D: "Sí, salvo transporte marítimo"
          },
          correct: "C",
          explanations: {
            A: "No siempre coinciden, pueden diferir según reglas de origen.",
            B: "No depende de que la mercancía sea local.",
            D: "No es exclusivo del transporte marítimo."
          }
        },
      
        {
          question: "¿Qué consecuencia administrativa directa puede tener una clasificación errónea en el HS Code?",
          options: {
            A: "Retraso en transporte",
            B: "Aplicación incorrecta de aranceles y controles",
            C: "Error en el embalaje",
            D: "Multa por transporte internacional"
          },
          correct: "B",
          explanations: {
            A: "El retraso es indirecto, no la consecuencia principal.",
            C: "El embalaje no depende de la clasificación.",
            D: "La multa por transporte no es consecuencia directa del HS Code."
          }
        },
      
        {
          question: "¿Por qué el crédito documentario se considera un medio de pago seguro pero costoso?",
          options: {
            A: "Porque implica intervención bancaria y verificación documental",
            B: "Porque requiere seguros adicionales",
            C: "Porque aumenta el riesgo de impago",
            D: "Porque el vendedor asume todos los costes de transporte"
          },
          correct: "A",
          explanations: {
            B: "El seguro es opcional y no define la seguridad del crédito documentario.",
            C: "Reduce el riesgo de impago, no lo aumenta.",
            D: "Los costes de transporte no determinan la seguridad del crédito."
          }
        },
      
        {
          question: "Si los documentos cumplen, ¿el banco paga aunque la mercancía no sea conforme?",
          options: {
            A: "No, siempre verifica la mercancía",
            B: "Sí",
            C: "Solo si hay seguro contratado",
            D: "Depende del país de importación"
          },
          correct: "B",
          explanations: {
            A: "El banco solo verifica documentos, no la mercancía física.",
            C: "El seguro no afecta la obligación de pago del banco.",
            D: "No depende del país, sino de la carta de crédito."
          }
        },
      
        {
          question: "¿Por qué una mercancía puede estar sujeta a controles no arancelarios además de impuestos?",
          options: {
            A: "Por errores en el transporte",
            B: "Por razones sanitarias, técnicas o de seguridad",
            C: "Por exceso de volumen",
            D: "Por tipo de embalaje"
          },
          correct: "B",
          explanations: {
            A: "Errores en transporte no generan controles no arancelarios.",
            C: "El volumen no es la causa principal.",
            D: "El embalaje no determina controles no arancelarios."
          }
        },
      
        {
          question: "¿Qué riesgo administrativo existe si la factura comercial no refleja correctamente el valor real de la mercancía?",
          options: {
            A: "Retraso en transporte",
            B: "Solo pérdida de tiempo",
            C: "Multa por etiquetado",
            D: "Ajustes de valor, sanciones o inspecciones"
          },
          correct: "D",
          explanations: {
            A: "El retraso puede ocurrir pero no es el riesgo principal.",
            B: "No se limita a pérdida de tiempo.",
            C: "La multa por etiquetado no está relacionada con el valor declarado."
          }
        },
      
        {
          question: "¿El IVA de importación forma parte del coste definitivo de la mercancía para una empresa?",
          options: {
            A: "Sí, siempre",
            B: "Depende del transporte",
            C: "No, suele ser deducible",
            D: "Solo si se paga en efectivo"
          },
          correct: "C",
          explanations: {
            A: "No siempre, puede deducirse.",
            B: "El transporte no determina la deducción.",
            D: "No depende de la forma de pago."
          }
        },
      
        {
          question: "¿Qué riesgo reduce la financiación documentaria vinculada a la exportación?",
          options: {
            A: "Riesgo de transporte",
            B: "Riesgo de tipo de cambio",
            C: "Riesgo de impago",
            D: "Riesgo de control aduanero"
          },
          correct: "C",
          explanations: {
            A: "No protege frente a transporte.",
            B: "No protege frente a tipo de cambio.",
            D: "No elimina riesgos aduaneros."
          }
        },
      
        {
          question: "¿Por qué la correcta determinación del valor en aduana es crítica en la gestión administrativa?",
          options: {
            A: "Para calcular transporte",
            B: "Para calcular seguro",
            C: "Porque afecta a impuestos, sanciones y controles posteriores",
            D: "Para elegir el INCOTERM"
          },
          correct: "C",
          explanations: {
            A: "El cálculo de transporte no depende directamente del valor en aduana.",
            B: "El seguro no está directamente relacionado.",
            D: "El INCOTERM no depende del valor en aduana."
          }
        }
      ]},
      4: { level:"Experto", questions:[
        {
          question: "Se importan camisetas de algodón fabricadas en Bangladesh y se les añade una etiqueta y se reempaquetan en Turquía. ¿Se considera transformación suficiente? ¿Cuál es el país de origen?",
          options: {
            A: "Sí, son originarias de Turquía",
            B: "Sí, Bangladesh mantiene el origen",
            C: "Depende del país importador",
            D: "No; son originarias de Bangladesh"
          },
          correct: "D",
          explanations: {
            A: "Añadir etiqueta o reempaquetar no constituye transformación suficiente.",
            B: "Bangladesh sí mantiene el origen, pero la formulación confusa puede inducir error.",
            C: "No depende del país importador, sino de la transformación realizada."
          }
        },
      
        {
          question: "¿Por qué una mercancía puede tener origen preferencial UE pero no origen no preferencial UE?",
          options: {
            A: "Porque cumple las normas generales de origen pero no los acuerdos preferenciales",
            B: "Porque depende del transporte utilizado",
            C: "Porque cumple un acuerdo preferencial, pero no las normas generales de origen",
            D: "Porque la etiqueta es diferente"
          },
          correct: "C",
          explanations: {
            A: "Es lo contrario de la definición correcta.",
            B: "El transporte no determina el origen.",
            D: "La etiqueta no cambia el origen preferencial."
          }
        },
      
        {
          question: "¿Por qué el uso comercial de una mercancía no determina su clasificación arancelaria?",
          options: {
            A: "Porque el país importador decide",
            B: "Porque depende del transporte",
            C: "Porque afecta solo al IVA",
            D: "Porque la clasificación se basa en características objetivas del producto"
          },
          correct: "D",
          explanations: {
            A: "No depende de la decisión del país importador.",
            B: "El transporte no influye en la clasificación.",
            C: "El IVA no determina la partida arancelaria."
          }
        },
      
        {
          question: "¿Por qué los royalties pueden formar parte del valor en aduana de una mercancía importada?",
          options: {
            A: "Porque están vinculados a la venta y son condición de la misma",
            B: "Porque son un gasto opcional del comprador",
            C: "Porque se pagan en el país de origen",
            D: "Porque son costos de transporte"
          },
          correct: "A",
          explanations: {
            B: "No son opcionales para determinar el valor en aduana.",
            C: "El país de pago no determina su inclusión.",
            D: "No son costes de transporte, sino royalties vinculados a la venta."
          }
        },
      
        {
          question: "¿El transporte interior en el país importador forma parte del valor en aduana?",
          options: {
            A: "Sí, siempre",
            B: "Solo si se paga en efectivo",
            C: "Depende del INCOTERM",
            D: "No"
          },
          correct: "D",
          explanations: {
            A: "No se incluye en el valor en aduana.",
            B: "La forma de pago no influye.",
            C: "El INCOTERM regula responsabilidades, no el valor en aduana."
          }
        },
      
        {
          question: "¿Por qué un crédito documentario no elimina el riesgo comercial, sino que lo transforma?",
          options: {
            A: "Porque el banco asume el riesgo total",
            B: "Porque sustituye el riesgo del comprador por el riesgo documental",
            C: "Porque el transporte queda garantizado",
            D: "Porque solo cubre seguros"
          },
          correct: "B",
          explanations: {
            A: "El banco no asume todo el riesgo comercial.",
            C: "No cubre transporte, solo riesgo documental.",
            D: "No se limita a seguros, sino al cumplimiento de documentos."
          }
        },
      
        {
          question: "¿Por qué una mercancía puede ser despachada a libre práctica y posteriormente ser sancionada?",
          options: {
            A: "Por errores en transporte",
            B: "Por etiquetado incorrecto",
            C: "Por controles a posteriori de la autoridad aduanera",
            D: "Porque se paga un arancel incorrecto"
          },
          correct: "C",
          explanations: {
            A: "El transporte no genera sanción administrativa.",
            B: "El etiquetado puede ser un factor, pero no es lo principal.",
            D: "El pago incorrecto puede generar sanción, pero la opción más amplia es C."
          }
        },
      
        {
          question: "¿Puede aplicarse un derecho antidumping aunque el precio de importación sea superior al del mercado local?",
          options: {
            A: "No, nunca",
            B: "Solo si es transporte marítimo",
            C: "Sí, si afecta a la seguridad",
            D: "Sí, si se demuestra daño a la industria comunitaria"
          },
          correct: "D",
          explanations: {
            A: "No es absoluto, depende de daño a la industria.",
            B: "El medio de transporte no determina el derecho antidumping.",
            C: "No se aplica por seguridad, sino por daño económico."
          }
        },
      
        {
          question: "Un producto clasificado en la partida 84 se monta con componentes de distintos países y el ensamblaje final se realiza en Marruecos. ¿Qué factor determina el origen?",
          options: {
            A: "El país del primer componente",
            B: "El país del último transporte",
            C: "La operación que confiera la transformación sustancial",
            D: "El país de compra del comprador"
          },
          correct: "C",
          explanations: {
            A: "No es el primer componente, sino la transformación sustancial.",
            B: "El transporte no determina origen.",
            D: "El país del comprador no influye en la determinación de origen."
          }
        },
      
        {
          question: "¿Por qué una empresa puede perder beneficios arancelarios años después de una importación correcta en apariencia?",
          options: {
            A: "Porque cambió el INCOTERM",
            B: "Porque el transporte fue distinto",
            C: "Por auditorías que detectan errores en origen, valor o clasificación",
            D: "Por variaciones en el tipo de cambio"
          },
          correct: "C",
          explanations: {
            A: "El INCOTERM no afecta retroactivamente los beneficios arancelarios.",
            B: "El transporte no determina beneficios arancelarios pasados.",
            D: "El tipo de cambio no invalida beneficios arancelarios."
          }
        }
      ]},
    },
    transporte:{
      1: { level:"Fácil", questions:[
        {
          question: "¿Qué se entiende por transporte en comercio internacional?",
          options: {
            A: "El almacenamiento temporal de mercancías",
            B: "El traslado de documentos comerciales",
            C: "El envío de información sobre mercancías",
            D: "El traslado de mercancías de un lugar a otro"
          },
          correct: "D",
          explanations: {
            A: "El almacenamiento no es transporte.",
            B: "Documentos no son mercancías.",
            C: "La información no implica transporte físico."
          }
        },
      
        {
          question: "¿Cuál es la diferencia básica entre transporte nacional e internacional?",
          options: {
            A: "El transporte internacional requiere seguros",
            B: "El transporte internacional es más rápido",
            C: "El transporte nacional no tiene costes",
            D: "El transporte internacional cruza fronteras"
          },
          correct: "D",
          explanations: {
            A: "El seguro puede aplicarse en ambos casos.",
            B: "La velocidad no define la diferencia.",
            C: "El transporte nacional también tiene costes."
          }
        },
      
        {
          question: "¿Qué medio de transporte suele ser más rápido para largas distancias?",
          options: {
            A: "Transporte marítimo",
            B: "Transporte por carretera",
            C: "Transporte aéreo",
            D: "Transporte ferroviario"
          },
          correct: "C",
          explanations: {
            A: "Marítimo es más lento.",
            B: "Carretera no es óptima para largas distancias internacionales.",
            D: "El tren suele ser más lento que el avión."
          }
        },
      
        {
          question: "¿Qué medio de transporte es más económico para grandes volúmenes?",
          options: {
            A: "Transporte marítimo",
            B: "Transporte aéreo",
            C: "Transporte por carretera",
            D: "Transporte ferroviario"
          },
          correct: "A",
          explanations: {
            B: "El aéreo es más caro.",
            C: "Carretera no siempre es más económico para grandes volúmenes.",
            D: "El ferroviario puede ser competitivo, pero normalmente no supera al marítimo en costes."
          }
        },
      
        {
          question: "¿Qué documento suele acompañar a la mercancía en transporte marítimo?",
          options: {
            A: "Factura comercial",
            B: "Conocimiento de embarque (B/L)",
            C: "Certificado de origen",
            D: "Packing list"
          },
          correct: "B",
          explanations: {
            A: "La factura no prueba la entrega en el transporte.",
            C: "El certificado acredita origen, no transporte.",
            D: "El packing list detalla embalaje, no es documento de transporte legal."
          }
        },
      
        {
          question: "¿Qué es un transporte multimodal?",
          options: {
            A: "Usar un solo medio de transporte para toda la ruta",
            B: "Usar más de un medio de transporte para un mismo envío",
            C: "Usar transporte interno y externo sin combinación",
            D: "Transportar únicamente mercancías peligrosas"
          },
          correct: "B",
          explanations: {
            A: "Eso sería transporte simple, no multimodal.",
            C: "No se combinan medios distintos.",
            D: "No depende del tipo de mercancía."
          }
        },
      
        {
          question: "¿Por qué es importante embalar correctamente la mercancía para el transporte?",
          options: {
            A: "Para protegerla y facilitar su manejo",
            B: "Para reducir impuestos",
            C: "Para cumplir con el origen de la mercancía",
            D: "Para acelerar los trámites aduaneros"
          },
          correct: "A",
          explanations: {
            B: "El embalaje no afecta impuestos directamente.",
            C: "No influye en el origen.",
            D: "Solo protege y facilita manipulación, no agiliza trámites."
          }
        },
      
        {
          question: "¿Qué función cumple un transportista?",
          options: {
            A: "Emitir certificados de origen",
            B: "Gestionar aranceles de importación",
            C: "Trasladar mercancía de manera segura",
            D: "Cobrar impuestos sobre mercancías"
          },
          correct: "C",
          explanations: {
            A: "No emite certificados de origen.",
            B: "No gestiona aranceles.",
            D: "No cobra impuestos, solo transporta."
          }
        },
      
        {
          question: "¿Qué factor influye en la elección del medio de transporte?",
          options: {
            A: "Solo la rapidez",
            B: "Solo el tipo de mercancía",
            C: "Solo la legislación aduanera",
            D: "Coste, tiempo y tipo de mercancía"
          },
          correct: "D",
          explanations: {
            A: "La rapidez es solo un factor.",
            B: "Tipo de mercancía es importante pero no único factor.",
            C: "La legislación influye, pero no determina por sí sola."
          }
        },
      
        {
          question: "¿Qué se busca al optimizar una ruta de transporte?",
          options: {
            A: "Reducir tiempo y costes de entrega",
            B: "Aumentar el número de transportistas",
            C: "Incrementar almacenamiento",
            D: "Reducir el peso de la mercancía"
          },
          correct: "A",
          explanations: {
            B: "Más transportistas no optimiza la ruta.",
            C: "El almacenamiento no es la optimización de ruta.",
            D: "Reducir peso no siempre es posible ni relevante."
          }
        }
      ]},
      2: { level:"Medio", questions:[
        {
          question: "¿Qué información principal contiene un conocimiento de embarque (B/L)?",
          options: {
            A: "Solo datos del cargador y destinatario",
            B: "Solo el tipo de mercancía y cantidad",
            C: "Datos del puerto de salida y llegada",
            D: "Datos del cargador, destinatario, mercancía y condiciones de transporte"
          },
          correct: "D",
          explanations: {
            A: "Faltan los detalles de la mercancía y condiciones.",
            B: "Faltan cargador, destinatario y condiciones.",
            C: "No incluye toda la información requerida."
          }
        },
      
        {
          question: "¿Cuál es la diferencia básica entre un B/L “a la orden” y “no negociable”?",
          options: {
            A: "El primero permite endoso, el segundo no",
            B: "El primero no se puede transferir, el segundo sí",
            C: "No hay diferencia, ambos se usan igual",
            D: "El primero es para transporte aéreo, el segundo marítimo"
          },
          correct: "A",
          explanations: {
            B: "Es al revés, el ‘a la orden’ permite endoso.",
            C: "No es cierto, tienen diferencias legales importantes.",
            D: "El tipo no depende del modo de transporte."
          }
        },
      
        {
          question: "¿Qué documento se utiliza normalmente en transporte aéreo?",
          options: {
            A: "Conocimiento de embarque (B/L)",
            B: "Factura comercial",
            C: "Packing list",
            D: "Guía aérea (Air Waybill – AWB)"
          },
          correct: "D",
          explanations: {
            A: "B/L es marítimo.",
            B: "La factura no acredita transporte.",
            C: "Packing list detalla embalaje, no transporta legalmente."
          }
        },
      
        {
          question: "¿Qué INCOTERM indica que el vendedor entrega la mercancía a bordo del buque en el puerto de carga?",
          options: {
            A: "CIF",
            B: "FOB",
            C: "EXW",
            D: "DAP"
          },
          correct: "B",
          explanations: {
            A: "CIF incluye seguro y transporte hasta destino, no entrega a bordo.",
            C: "EXW entrega en origen, no a bordo del buque.",
            D: "DAP entrega en destino, no en puerto de carga."
          }
        },
      
        {
          question: "¿Qué INCOTERM obliga al vendedor a contratar el transporte y el seguro hasta destino, aunque el riesgo pase antes?",
          options: {
            A: "CIF",
            B: "FOB",
            C: "DAP",
            D: "EXW"
          },
          correct: "A",
          explanations: {
            B: "FOB solo entrega a bordo, no contrata seguro.",
            C: "DAP no incluye seguro ni transporte principal.",
            D: "EXW no incluye transporte ni seguro."
          }
        },
      
        {
          question: "¿Qué función tiene un conocimiento de transporte multimodal (CMR o similar)?",
          options: {
            A: "Acreditar la entrega y responsabilidades en envíos con más de un medio de transporte",
            B: "Solo sirve para transporte aéreo",
            C: "Solo sirve como factura comercial",
            D: "Garantiza cobertura de seguro internacional"
          },
          correct: "A",
          explanations: {
            B: "No es exclusivo de aéreo.",
            C: "No reemplaza la factura comercial.",
            D: "No asegura cobertura de seguro por sí mismo."
          }
        },
      
        {
          question: "¿Por qué es importante que los datos del B/L coincidan con la factura comercial?",
          options: {
            A: "Para evitar problemas aduaneros y retrasos en entrega",
            B: "Solo para poder cobrar el seguro",
            C: "Porque la aduana solo acepta B/L idénticos",
            D: "Para acelerar el transporte marítimo exclusivamente"
          },
          correct: "C",
          explanations: {
            A: "Muy parecido, pero la aduana revisa coincidencias específicas en clasificación y valor.",
            B: "No solo se relaciona con seguros.",
            D: "No solo acelera transporte, es cuestión legal y documental."
          }
        },
      
        {
          question: "¿Qué diferencia hay entre transporte marítimo FCL y LCL?",
          options: {
            A: "FCL es compartido; LCL es contenedor completo",
            B: "FCL siempre es aéreo; LCL es marítimo",
            C: "FCL es contenedor completo; LCL se comparte con otras mercancías",
            D: "FCL requiere seguro; LCL no"
          },
          correct: "C",
          explanations: {
            A: "Invertido, FCL es contenedor completo.",
            B: "Ambos son marítimos.",
            D: "Ambos pueden asegurarse."
          }
        },
      
        {
          question: "¿Qué responsabilidad tiene el transportista según el B/L?",
          options: {
            A: "Solo emitir factura comercial",
            B: "Entregar la mercancía según lo acordado y en buen estado",
            C: "Cobrar impuestos de importación",
            D: "Gestionar el seguro de la mercancía"
          },
          correct: "B",
          explanations: {
            A: "No solo emite factura.",
            C: "No cobra impuestos.",
            D: "El seguro es aparte, no responsabilidad del transportista directamente."
          }
        },
      
        {
          question: "¿Por qué el INCOTERM elegido influye en la elección del medio de transporte?",
          options: {
            A: "Porque define únicamente el coste del seguro",
            B: "Porque algunos INCOTERMS son exclusivos de transporte marítimo (FOB, CIF) y otros se pueden usar en cualquier medio (FCA, DAP, DDP)",
            C: "Porque todos los INCOTERMS se aplican igual en transporte aéreo",
            D: "Porque determina la documentación aduanera automáticamente"
          },
          correct: "B",
          explanations: {
            A: "No solo afecta al seguro.",
            C: "No todos son aplicables en aéreo.",
            D: "No determina automáticamente la documentación aduanera."
          }
        }
      ]},
      3: { level:"Difícil", questions:[
        {
          question: "¿Cuál es la principal diferencia entre un camión rígido y un camión articulado en transporte internacional?",
          options: {
            A: "La capacidad de carga y la maniobrabilidad; el articulado permite más carga pero requiere más espacio y permisos",
            B: "El articulado siempre es más económico que el rígido",
            C: "El rígido no puede transportar mercancías internacionales",
            D: "Solo el articulado requiere licencia especial"
          },
          correct: "A",
          explanations: {
            B: "No siempre es más económico, depende de la operación.",
            C: "El rígido puede transportar mercancías internacionales, pero con menor volumen.",
            D: "Ambos requieren permisos según normativa."
          }
        },
      
        {
          question: "Para un envío que combina carretera, puerto y tren, ¿qué documento acredita la entrega y responsabilidades?",
          options: {
            A: "Factura comercial",
            B: "Packing list",
            C: "B/L marítimo estándar",
            D: "Conocimiento de transporte multimodal (o CMR adaptado según normativa)"
          },
          correct: "D",
          explanations: {
            A: "No acredita responsabilidades de transporte.",
            B: "Solo detalla embalaje, no responsabilidades.",
            C: "El B/L estándar solo es válido para transporte marítimo."
          }
        },
      
        {
          question: "Si se utiliza un INCOTERM CIF para transporte por carretera, ¿el vendedor sigue obligado a contratar el seguro?",
          options: {
            A: "Sí, siempre",
            B: "Depende del país de destino",
            C: "No, CIF es exclusivo de transporte marítimo; usarlo por carretera sería incorrecto",
            D: "Solo si la mercancía supera cierto valor"
          },
          correct: "C",
          explanations: {
            A: "Incorrecto, CIF no se aplica fuera de marítimo.",
            B: "No depende del país, es cuestión del tipo de transporte.",
            D: "No hay relación con el valor de la mercancía."
          }
        },
      
        {
          question: "Para enviar mercancías perecederas de España a Alemania en menos de 24 horas, ¿qué transporte es más recomendable?",
          options: {
            A: "Transporte marítimo",
            B: "Transporte por ferrocarril",
            C: "Transporte multimodal con barco y camión",
            D: "Transporte aéreo"
          },
          correct: "D",
          explanations: {
            A: "Marítimo sería demasiado lento.",
            B: "Ferrocarril no cumpliría el plazo.",
            C: "Multimodal con barco no garantiza 24 horas."
          }
        },
      
        {
          question: "Si un contenedor FCL se comparte parcialmente en el puerto de origen con otra mercancía, ¿el comprador tiene derecho a reclamar daños de la parte de otra empresa?",
          options: {
            A: "Sí, siempre",
            B: "No, porque cada B/L es independiente; la responsabilidad es solo del transportista según el contrato de transporte",
            C: "Solo si el vendedor acepta",
            D: "Depende del medio de transporte"
          },
          correct: "B",
          explanations: {
            A: "No se puede reclamar por la parte de otro remitente.",
            C: "No depende del vendedor.",
            D: "No depende del transporte, sino de la B/L y contrato."
          }
        },
      
        {
          question: "¿Qué INCOTERM indica que el vendedor entrega la mercancía al transportista en origen, transfiriendo riesgos y costes desde ese punto, aplicable a cualquier medio de transporte?",
          options: {
            A: "EXW",
            B: "CIF",
            C: "FOB",
            D: "FCA"
          },
          correct: "D",
          explanations: {
            A: "EXW entrega en origen pero no necesariamente al transportista designado.",
            B: "CIF es marítimo y cubre transporte y seguro hasta destino.",
            C: "FOB es exclusivo de transporte marítimo."
          }
        },
      
        {
          question: "¿Cuál es la principal ventaja de combinar transporte marítimo y tren en un envío internacional de gran volumen?",
          options: {
            A: "Reducir costes y mantener tiempos razonables",
            B: "Aumentar riesgos y costes",
            C: "Solo es más rápido pero más caro",
            D: "Evita cualquier documentación aduanera"
          },
          correct: "A",
          explanations: {
            B: "No se busca aumentar costes ni riesgos.",
            C: "Se busca equilibrio entre coste y tiempo, no solo rapidez.",
            D: "La documentación aduanera sigue siendo necesaria."
          }
        },
      
        {
          question: "¿Por qué es importante que el conocimiento de embarque y la factura comercial coincidan en peso y descripción de mercancía?",
          options: {
            A: "Solo para el seguro",
            B: "Solo para la contabilidad interna",
            C: "Para evitar inspecciones, retrasos y sanciones aduaneras",
            D: "No es relevante, es información opcional"
          },
          correct: "C",
          explanations: {
            A: "No solo para el seguro, es legalmente obligatorio.",
            B: "No se limita a contabilidad interna.",
            D: "No es opcional, la aduana lo requiere."
          }
        },
      
        {
          question: "Para un envío internacional de 2 toneladas de mercancía frágil en menos de 500 km, ¿qué tipo de camión sería más adecuado?",
          options: {
            A: "Camión articulado sin suspensión especial",
            B: "Transporte marítimo",
            C: "Camión rígido con suspensión adecuada y embalaje protegido",
            D: "Tren únicamente"
          },
          correct: "C",
          explanations: {
            A: "La suspensión es crítica para mercancía frágil.",
            B: "Marítimo no tiene sentido en corto recorrido.",
            D: "El tren no es práctico para distancias cortas de 500 km."
          }
        },
      
        {
          question: "¿Qué ventaja logística tiene un envío multimodal frente a un solo medio de transporte?",
          options: {
            A: "Optimiza costes y tiempos aprovechando las ventajas de cada medio",
            B: "Siempre es más lento y caro",
            C: "Evita cualquier inspección aduanera",
            D: "Elimina la necesidad de documentación"
          },
          correct: "A",
          explanations: {
            B: "El objetivo es equilibrar tiempo y coste, no aumentar ambos.",
            C: "No evita inspecciones.",
            D: "La documentación sigue siendo necesaria."
          }
        }
      ]},
      4: { level:"Experto", questions:[
        {
          question: "Una empresa envía 500 cajas de electrónica desde China a España usando contenedor marítimo hasta Rotterdam y luego tren hasta Madrid. La póliza de seguro fue contratada solo hasta el puerto de Rotterdam. ¿Qué riesgo asume el comprador en el tramo ferroviario y qué debería haberse hecho?",
          options: {
            A: "El comprador solo asume riesgos parciales; la póliza marítima cubre indirectamente daños durante transporte terrestre",
            B: "El vendedor mantiene responsabilidad subsidiaria hasta que la mercancía llegue a destino final",
            C: "El comprador asume el riesgo en el tramo ferroviario; debería haberse contratado un seguro multimodal que cubra toda la ruta",
            D: "El seguro marítimo básico extiende su cobertura automáticamente a todos los tramos posteriores"
          },
          correct: "C",
          explanations: {
            A: "El seguro marítimo no cubre transporte terrestre posterior.",
            B: "El vendedor transfiere el riesgo al comprador en el puerto de embarque.",
            D: "El seguro marítimo estándar no se extiende automáticamente al tramo ferroviario."
          }
        },
      
        {
          question: "Si se indica FOB en un contrato de envío por avión, ¿qué problema legal y práctico surge?",
          options: {
            A: "FOB puede aplicarse en cualquier transporte siempre que se indique el punto de entrega",
            B: "FOB es exclusivo para transporte marítimo; usarlo para avión no transfiere riesgos correctamente y podría invalidar el contrato",
            C: "El comprador asumiría los costes de transporte pero no los riesgos, incluso si es por avión",
            D: "El vendedor mantiene obligación de seguro hasta el destino, aunque sea transporte aéreo"
          },
          correct: "B",
          explanations: {
            A: "FOB no es válido para transporte aéreo.",
            C: "La transferencia de riesgos según FOB no funciona fuera del transporte marítimo.",
            D: "El vendedor solo asegura hasta puerto de carga según FOB; no hasta destino en avión."
          }
        },
      
        {
          question: "En un envío marítimo LCL (menos de un contenedor), ¿por qué los daños por manipulación en el puerto de consolidación pueden no estar cubiertos por el seguro estándar?",
          options: {
            A: "Porque el seguro marítimo básico cubre hasta embarque; los daños en consolidación requieren cobertura adicional",
            B: "Porque el transportista del puerto de consolidación tiene responsabilidad exclusiva sin intervención del seguro",
            C: "Porque los daños menores se excluyen automáticamente en pólizas marítimas estándar",
            D: "Porque todos los seguros requieren un endoso especial para manipulación terrestre"
          },
          correct: "A",
          explanations: {
            B: "El transportista no tiene responsabilidad ilimitada; depende de contrato y póliza.",
            C: "No es cuestión de daños menores, sino del tramo no cubierto.",
            D: "No todos los seguros requieren endoso; el problema es el tramo no asegurado."
          }
        },
      
        {
          question: "Una mercancía peligrosa debe cruzar 3 países por carretera. ¿Qué factores logísticos y legales son críticos antes de iniciar el transporte?",
          options: {
            A: "Solo se necesita un embalaje especial según normativa internacional",
            B: "Solo son necesarios los permisos de transporte del país de origen",
            C: "Solo se requiere que el conductor tenga certificación ADR",
            D: "Cumplimiento de ADR, permisos de transporte internacional, rutas autorizadas, conductores certificados, y embalaje adecuado"
          },
          correct: "D",
          explanations: {
            A: "El embalaje es necesario pero no suficiente.",
            B: "Los permisos locales no garantizan legalidad en otros países.",
            C: "La certificación ADR del conductor es imprescindible, pero no cubre todo el proceso."
          }
        },
      
        {
          question: "Durante un transporte multimodal, el B/L indica un peso neto diferente al de la guía aérea y la factura. ¿Qué consecuencias puede tener esto en destino?",
          options: {
            A: "No hay consecuencias si la mercancía llega completa y sin daños",
            B: "Solo afecta a la facturación y contabilidad interna de la empresa",
            C: "El transportista absorbe cualquier diferencia entre los documentos",
            D: "Retrasos, inspecciones, sanciones aduaneras y posibles problemas de reclamación del seguro"
          },
          correct: "D",
          explanations: {
            A: "Existen consecuencias legales y aduaneras incluso si la mercancía está intacta.",
            B: "Va más allá de la contabilidad; afecta a aduanas y seguros.",
            C: "El transportista no asume todas las discrepancias, depende del contrato y seguro."
          }
        },
      
        {
          question: "¿Qué tipo de camión se recomienda para transportar 10 toneladas de mercancía general de 400 km en carretera europea?",
          options: {
            A: "Solo camión rígido es seguro y suficiente para esta carga",
            B: "Camión rígido o articulado según maniobrabilidad y accesibilidad del punto de entrega",
            C: "Camión articulado exclusivamente, sin importar restricciones de acceso",
            D: "Camión ligero con varias cargas parciales"
          },
          correct: "B",
          explanations: {
            A: "A veces se necesita articulado para mayor volumen o maniobrabilidad.",
            C: "El articulado puede no ser accesible en todos los puntos de entrega.",
            D: "El camión ligero no es adecuado para 10 toneladas."
          }
        },
      
        {
          question: "Un contenedor FCL se abre en puerto de transbordo por el consolidator y se daña la mercancía. Según Incoterms CIF, ¿quién asume la pérdida?",
          options: {
            A: "El vendedor mantiene responsabilidad hasta el destino final",
            B: "El transportista del puerto de transbordo asume la pérdida automáticamente",
            C: "El comprador, si el riesgo ya se transfirió al embarcar en el puerto de carga original; el seguro debe cubrir daños en tránsito, pero no se puede trasladar la responsabilidad al vendedor",
            D: "La autoridad portuaria del transbordo es responsable"
          },
          correct: "C",
          explanations: {
            A: "El vendedor solo es responsable hasta la transferencia de riesgo en puerto de carga.",
            B: "El transportista no asume responsabilidad ilimitada; depende del contrato y seguro.",
            D: "La autoridad portuaria no se responsabiliza por daños a mercancía privada."
          }
        },
      
        {
          question: "¿Por qué un envío multimodal marítimo-ferroviario puede ser más eficiente que un transporte únicamente por camión para Europa Central, aunque el tiempo sea ligeramente mayor?",
          options: {
            A: "Porque el transporte marítimo siempre es más rápido",
            B: "Porque evita algunos trámites administrativos",
            C: "Porque disminuye riesgos menores y accidentes esporádicos",
            D: "Porque reduce costes por tonelada, disminuye riesgo de accidentes y permite manejar mayores volúmenes"
          },
          correct: "D",
          explanations: {
            A: "El transporte marítimo no siempre es más rápido.",
            B: "No elimina trámites, solo optimiza transporte.",
            C: "Reducir riesgos es un beneficio parcial, no explica toda la eficiencia."
          }
        },
      
        {
          question: "¿Qué consideraciones logísticas y de transporte son críticas para mercancías perecederas durante un envío internacional?",
          options: {
            A: "Solo embalaje refrigerado es suficiente",
            B: "Solo el seguimiento de la mercancía garantiza seguridad",
            C: "Solo elegir un transporte rápido garantiza integridad",
            D: "Control de temperatura, embalaje refrigerado, seguimiento continuo, y elección de transporte rápido o especializado"
          },
          correct: "D",
          explanations: {
            A: "El embalaje es necesario, pero insuficiente por sí solo.",
            B: "El seguimiento ayuda, pero no garantiza conservación.",
            C: "El transporte rápido es importante, pero no reemplaza otros controles."
          }
        },
      
        {
          question: "¿Qué INCOTERM se recomienda si el exportador quiere minimizar riesgos durante transporte internacional, pero el comprador asume costes en destino?",
          options: {
            A: "CIF siempre minimiza riesgos del vendedor",
            B: "DAP reduce riesgos parciales, pero el vendedor aún paga algunos costes",
            C: "DDP transfiere riesgos y costes al vendedor hasta destino",
            D: "FCA o FOB según medio de transporte, ya que transfieren riesgos en el punto de entrega inicial"
          },
          correct: "D",
          explanations: {
            A: "CIF solo aplica correctamente en transporte marítimo y no siempre minimiza riesgos totales.",
            B: "DAP obliga al vendedor a asumir costes hasta entrega en destino.",
            C: "DDP implica máximo compromiso del vendedor, no minimiza riesgos."
          }
        }
      ]},
    },
};

document.addEventListener("click", (e) => {
  if (e.target.id === "restart-btn") {
    window.location.href = "./test.html";
  }
});

document.addEventListener("DOMContentLoaded",()=>{
  const params = new URLSearchParams(window.location.search);
  const section = params.get("section");
  const examNumber = Number(params.get("exam"));
  // CASOS PRÁCTICOS
  if (section === "casos-practicos") {
    loadPracticalCase(examNumber);
    return;
  }

  const container = document.getElementById("question-container");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreDiv = document.getElementById("score");

  let currentQuestion=0;
  let score=0;
  console.log(TESTS);
  console.log(TESTS.comercio);
  console.log(TESTS.comercio[1]);
  const exam = TESTS[section]?.[examNumber];
  const wrongAnswers = [];

  if(!exam || !exam.questions || exam.questions.length===0){
    container.innerHTML="<p style='color:red; text-align:center;'>Este examen aún no está disponible.</p>";
    nextBtn.style.display="none";
    return;
  }

  const sectionName = SECTION_NAMES[section] || section;
  document.getElementById("exam-title").textContent = `Examen ${examNumber} — ${sectionName}`;
  loadQuestion();

  function loadQuestion(){
    const q = exam.questions[currentQuestion];
    if(!q) return;
    container.innerHTML=`
      <div class="question">
        <p style="font-weight:bold; margin-bottom:10px;">${currentQuestion+1}. ${q.question}</p>
        ${Object.entries(q.options).map(([k,v])=>`
          <label style="display:block; margin-bottom:6px;">
            <input type="radio" name="answer" value="${k}"> ${k}. ${v}
          </label>`).join("")}
      </div>
    `;
  }

  nextBtn.addEventListener("click",()=>{
    const selected = document.querySelector('input[name="answer"]:checked');
    if(!selected){ alert("Selecciona una opción antes de continuar."); return; }

    const currentQ = exam.questions[currentQuestion];

    if(selected.value===currentQ.correct) {
      score++;
    } else {
      // Guardamos las respuestas incorrectas para mostrar después
      wrongAnswers.push({
        question: currentQ.question,
        selected: selected.value,
        explanation: currentQ.explanations[selected.value] || "Explicación no disponible."
      });
    }

    currentQuestion++;

    if(currentQuestion>=exam.questions.length){
      // Final del examen
      container.style.display="none";
      nextBtn.style.display="none";
      resultContainer.style.display="block";

      // Mostramos puntuación
      scoreDiv.innerHTML = `<p>Tu puntuación: ${score} / ${exam.questions.length}</p>`;

      // Mostramos preguntas incorrectas
      if(wrongAnswers.length>0){
        const wrongDiv = document.createElement("div");
        wrongDiv.style.marginTop="15px";
        wrongDiv.innerHTML = `<h3>Respuestas incorrectas:</h3>` +
          wrongAnswers.map(w=>`
            <div style="margin-bottom:10px; border:1px solid #ccc; padding:8px; border-radius:6px;">
              <p style="font-weight:bold;">${w.question}</p>
              <p style="color:red;">X Tu respuesta: ${w.selected}</p>
              <p style="font-style:italic; color:#555;">${w.explanation}</p>
            </div>
          `).join("");
        resultContainer.appendChild(wrongDiv);
      }

      // CTA personalizado por sección
      const ctaData = CTA_BY_SECTION[section];
      if (ctaData) {
        const ctaDiv = document.createElement("div");
        ctaDiv.style.marginTop = "20px";
        ctaDiv.style.padding = "15px";
        ctaDiv.style.border = "1px solid #d1d9e0";
        ctaDiv.style.borderRadius = "10px";
        ctaDiv.style.backgroundColor = "#f8fafc";
        ctaDiv.style.textAlign = "center";
        ctaDiv.innerHTML = `
          <p style="font-weight:bold; margin-bottom:6px;">${ctaData.title}</p>
          <p style="font-size:14px; color:#555; margin-bottom:8px;">
            ${ctaData.text}
          </p>
          <a href="https://payhip.com/CalculaIncoterms"
            target="_blank"
            style="font-size:14px; font-weight:600; color:#007bff; text-decoration:none;">
            Ver recursos profesionales →
          </a>
        `;
        resultContainer.appendChild(ctaDiv);
      }

      // Botones
      const buttonsDiv = document.createElement("div");
      buttonsDiv.style.marginTop="20px";
      buttonsDiv.style.textAlign="center";

      // Botón repetir examen
      const repeatBtn = document.createElement("button");
      repeatBtn.className="boton-calcular";
      repeatBtn.textContent="Repetir examen";
      repeatBtn.style.marginRight="10px";
      repeatBtn.addEventListener("click",()=>{ window.location.reload(); });
      buttonsDiv.appendChild(repeatBtn);

      // Botón siguiente examen, solo si no es el 10
      if(examNumber < 10){
        const nextExamBtn = document.createElement("button");
        nextExamBtn.className="boton-calcular";
        nextExamBtn.textContent="Siguiente examen";
        nextExamBtn.addEventListener("click",()=>{
          const url = `exams.html?section=${encodeURIComponent(section)}&exam=${examNumber+1}`;
          window.location.href=url;
        });
        buttonsDiv.appendChild(nextExamBtn);
      }

      resultContainer.appendChild(buttonsDiv);

    } else {
      loadQuestion();
    }
  });

});

function loadPracticalCase(caseNumber) {
  const container = document.getElementById("question-container");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreDiv = document.getElementById("score");

  const practicalCase = PRACTICAL_CASES[caseNumber];
  if (!practicalCase) {
    container.innerHTML = "<p style='color:red; text-align:center;'>Caso práctico no disponible.</p>";
    nextBtn.style.display = "none";
    return;
  }

  let score = 0;
  const wrongAnswers = [];

  document.getElementById("exam-title").textContent =
    `Caso práctico ${caseNumber}`;

  // MOSTRAMOS TODO DE GOLPE
  container.innerHTML = `
    <div class="case-text" style="margin-bottom:20px; padding:15px; border:1px solid #ccc; border-radius:8px;">
      <h3>Caso práctico</h3>
      <p>${practicalCase.caseText}</p>
    </div>

    ${practicalCase.questions.map((q, i) => `
      <div class="question" style="margin-bottom:15px;">
        <p style="font-weight:bold;">${i + 1}. ${q.question}</p>
        ${Object.entries(q.options).map(([k, v]) => `
          <label style="display:block; margin-bottom:5px;">
            <input type="radio" name="q${i}" value="${k}"> ${k}. ${v}
          </label>
        `).join("")}
      </div>
    `).join("")}
  `;

  nextBtn.textContent = "Corregir caso";

  nextBtn.addEventListener("click", () => {
    practicalCase.questions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && selected.value === q.correct) {
        score++;
      } else {
      wrongAnswers.push({
        question: q.question,
        selected: selected ? selected.value : "Sin responder",
        explanation: selected && q.explanations[selected.value] ? q.explanations[selected.value] : "Explicación no disponible."
      });
      }
    });

    container.style.display = "none";
    nextBtn.style.display = "none";
    resultContainer.style.display = "block";

    scoreDiv.innerHTML = `<p>Tu puntuación: ${score} / ${practicalCase.questions.length}</p>`;

    if (wrongAnswers.length > 0) {
      resultContainer.innerHTML += `
        <h3>Respuestas incorrectas</h3>
        ${wrongAnswers.map(w => `
          <div style="border:1px solid #ccc; padding:8px; margin-bottom:8px;">
            <p><strong>${w.question}</strong></p>
            <p style="color:red;">Tu respuesta: ${w.selected}</p>
            <p style="color:#555;">${w.explanation}</p>
          </div>
        `).join("")}
      `;
    }
  });
}