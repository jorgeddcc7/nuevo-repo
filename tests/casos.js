const PRACTICAL_CASES = {
  1: {
    caseText: `
        La empresa TECNOEUROPA S.L., con sede en Valencia (España), vende 120 equipos electrónicos industriales a la empresa chilena ANDES MINING SpA, por un valor total de 240.000 €. <br>

        Las condiciones del contrato son:<br><br>

        - INCOTERM: CIF Puerto de Valparaíso – INCOTERMS® 2020<br>
        - Medio de pago: crédito documentario irrevocable confirmado<br>
        - Transporte principal: marítimo en contenedor completo (FCL)<br>
        - Seguro: contratado por el vendedor según CIF<br>
        - Plazo de entrega: 45 días desde la salida del buque<br><br>

        La mercancía se fabrica íntegramente en España y se embala y paletiza en las instalaciones del vendedor. El transporte interior hasta el puerto de Valencia se realiza por carretera, contratado por el vendedor.<br>

        Para la exportación se emiten la factura comercial, la lista de bultos y el conocimiento de embarque, consignado al banco emisor del crédito documentario. El seguro contratado cubre el transporte marítimo conforme a la cobertura mínima exigida por CIF.<br><br>

        El buque sale del puerto de Valencia con destino a Valparaíso, realizando un transbordo en Rotterdam. Durante dicho transbordo, el contenedor es manipulado, sin que se detecten daños visibles.<br><br>

        A la llegada a Valparaíso, durante el despacho de importación, el comprador detecta que parte de los equipos presenta daños internos, lo que impide su uso inmediato. El importador reclama al vendedor una compensación económica, alegando que es responsable del estado de la mercancía en destino.
    `,
    questions: [
      {
        question: "¿Qué INCOTERM se ha pactado en la operación entre TECNOEUROPA S.L. y ANDES MINING SpA?",
        options: {
          A: "FOB Puerto de Valparaíso – INCOTERMS® 2020",
          B: "DDP Valparaíso",
          C: "CIF Puerto de Valparaíso – INCOTERMS® 2020",
          D: "EXW Valencia"
        },
        correct: "C",
        explanations: {
          A: "FOB no incluye el seguro contratado por el vendedor, por lo que no coincide con las condiciones del contrato.",
          B: "DDP transfiere todos los costes y riesgos al vendedor hasta destino, diferente del acuerdo CIF.",
          D: "EXW deja toda la responsabilidad de transporte y seguros al comprador, lo que no ocurre aquí."
        }
      },
      {
        question: "¿Qué medio de transporte se utiliza para el envío principal de la mercancía?",
        options: {
          A: "Transporte aéreo",
          B: "Transporte por carretera",
          C: "Transporte ferroviario",
          D: "Transporte marítimo"
        },
        correct: "D",
        explanations: {
          A: "El envío no se realiza por aire, por lo que esta opción es incorrecta.",
          B: "El transporte por carretera solo se usa en origen, no para el trayecto principal.",
          C: "El transporte ferroviario no se utiliza en esta operación.",
        }
      },
      {
        question: "¿Quién contrata el seguro de transporte según las condiciones del contrato?",
        options: {
          A: "El comprador",
          B: "El vendedor",
          C: "El agente de aduanas",
          D: "El transportista"
        },
        correct: "B",
        explanations: {
          A: "El comprador no contrata el seguro según CIF; esta responsabilidad es del vendedor.",
          C: "El agente de aduanas no asume la contratación del seguro.",
          D: "El transportista no se encarga de contratar el seguro, solo transporta la mercancía."
        }
      },
      {
        question: "¿Qué documento de transporte se menciona en el caso práctico?",
        options: {
          A: "Guía aérea (AWB)",
          B: "El Bill of Lading",
          C: "Carta de porte ferroviaria",
          D: "Factura comercial"
        },
        correct: "B",
        explanations: {
          A: "La guía aérea no se utiliza, porque el transporte principal es marítimo.",
          C: "La carta de porte ferroviaria no aplica en este envío.",
          D: "La factura comercial es un documento comercial, no de transporte."
        }
      },
      {
        question: "¿En qué país se detectan los daños en la mercancía?",
        options: {
          A: "España",
          B: "Países Bajos",
          C: "Rotterdam",
          D: "Chile"
        },
        correct: "D",
        explanations: {
          A: "En España la mercancía estaba intacta al salir del puerto.",
          B: "Los Países Bajos solo sirven como transbordo, no se detectaron daños allí.",
          C: "Rotterdam es el puerto de transbordo, pero los daños se descubren después en destino.",
        }
      }
    ]
  },
  2: {
    caseText: `La empresa VINOS DEL SUR S.A., con sede en Jerez (España), exporta 5.000 botellas de vino a la empresa GOURMET FOODS Ltd., ubicada en Londres (Reino Unido), por un valor total de 50.000 €.<br><br>
  Las condiciones acordadas son:<br>
  - INCOTERM: DAP Londres – INCOTERMS® 2020<br>
  - Medio de transporte: carretera<br>
  - Medio de pago: transferencia bancaria<br>
  - Plazo de entrega: 7 días<br><br>
  La mercancía se embala en cajas y se carga en un camión en las instalaciones del vendedor. El transporte hasta Londres se realiza directamente por carretera.<br><br>
  A la llegada al destino, la mercancía se entrega en el almacén del comprador.`,
    questions: [
      {
        question: "¿Quién asume el riesgo del transporte durante el trayecto por carretera desde España hasta Londres?",
        options: {
          A: "El comprador",
          B: "El banco",
          C: "El transportista",
          D: "El vendedor"
        },
        correct: "D",
        explanations: {
          A: "El comprador no asume el riesgo en DAP; el vendedor lo asume hasta el punto de entrega.",
          B: "El banco solo gestiona el pago, no el riesgo del transporte.",
          C: "El transportista actúa como intermediario; el riesgo sigue siendo del vendedor según DAP.",
        }
      },
      {
        question: "Según el INCOTERM pactado, ¿quién organiza y paga el transporte hasta Londres?",
        options: {
          A: "El comprador",
          B: "El vendedor",
          C: "El agente de aduanas",
          D: "El banco"
        },
        correct: "B",
        explanations: {
          A: "El comprador no organiza ni paga el transporte bajo DAP.",
          C: "El agente de aduanas solo tramita documentos, no paga ni organiza el transporte.",
          D: "El banco gestiona pagos, no el transporte."
        }
      },
      {
        question: "¿En qué punto se produce la entrega efectiva de la mercancía al comprador?",
        options: {
          A: "En el puerto de Jerez",
          B: "En el camión durante el transporte",
          C: "En el aeropuerto de Londres",
          D: "En el lugar acordado en Londres"
        },
        correct: "D",
        explanations: {
          A: "La entrega no se realiza en el puerto de origen; DAP indica entrega en destino.",
          B: "El transporte en curso no constituye entrega efectiva.",
          C: "No hay transporte aéreo en esta operación.",
        }
      },
      {
        question: "Si el camión sufre un retraso durante el trayecto, ¿a quién afecta directamente el incumplimiento del plazo de entrega?",
        options: {
          A: "Al comprador",
          B: "Al transportista",
          C: "Al banco",
          D: "Al vendedor"
        },
        correct: "D",
        explanations: {
          A: "El comprador recibe la mercancía según lo pactado, pero el retraso es responsabilidad del vendedor bajo DAP.",
          B: "El transportista solo ejecuta el traslado; la responsabilidad contractual recae en el vendedor.",
          C: "El banco no gestiona el transporte ni plazos de entrega.",
        }
      },
      {
        question: "¿Por qué el transporte por carretera es adecuado para esta operación concreta?",
        options: {
          A: "Porque permite transporte multimodal",
          B: "Porque es más barato que el marítimo en trayectos largos",
          C: "Porque permite almacenamiento en tránsito",
          D: "Por la cercanía geográfica y el corto plazo de entrega"
        },
        correct: "D",
        explanations: {
          A: "No se requiere transporte multimodal; es un trayecto directo por carretera.",
          B: "El transporte marítimo no es más eficiente en trayectos cortos y cercanos.",
          C: "El almacenamiento en tránsito no es necesario en esta operación.",
        }
      }
    ]
  },
  3: {
    caseText: `La empresa MUEBLES NÓRDICOS S.L., con sede en Zaragoza (España), vende mobiliario de madera a la empresa SCANDI HOME AB, ubicada en Estocolmo (Suecia), por un valor total de 95.000 €.<br><br>
  Las condiciones pactadas en el contrato son:<br>
  - INCOTERM: FCA Zaragoza – INCOTERMS® 2020<br>
  - Medio de pago: pago aplazado a 60 días mediante remesa bancaria<br>
  - Transporte principal: carretera + ferry<br>
  - Seguro: no contratado por ninguna de las partes<br><br>
  La mercancía se embala en pallets y se carga en un camión en las instalaciones del vendedor. El transportista es designado por el comprador y recoge la mercancía en Zaragoza.<br><br>
  Durante el trayecto, el camión sufre una avería antes de llegar al puerto de embarque del ferry, lo que provoca un retraso de dos días en la entrega final en Estocolmo. No se producen daños en la mercancía.<br><br>
  El comprador reclama al vendedor por el retraso, alegando que ha incumplido el plazo de entrega acordado.`,
    questions: [
      {
        question: "¿En qué momento se transmite el riesgo del vendedor al comprador según el INCOTERM pactado?",
        options: {
          A: "Cuando la mercancía llega al puerto de destino",
          B: "Cuando se realiza la carga en el ferry",
          C: "Cuando la mercancía se entrega al transportista designado",
          D: "Cuando se factura la mercancía"
        },
        correct: "C",
        explanations: {
          A: "El riesgo no llega al comprador en el puerto de destino bajo FCA.",
          B: "El riesgo ya se ha transmitido antes, al entregar al transportista designado por el comprador.",
          D: "La facturación no determina la transmisión del riesgo.",
        }
      },
      {
        question: "¿Quién es responsable del retraso causado por la avería del camión?",
        options: {
          A: "El vendedor",
          B: "El banco",
          C: "El comprador, ya que el transportista fue designado por él",
          D: "El transportista del vendedor"
        },
        correct: "C",
        explanations: {
          A: "El vendedor no controla al transportista designado por el comprador.",
          B: "El banco no interviene en la ejecución del transporte.",
          D: "El transportista del vendedor no está implicado en esta operación.",
        }
      },
      {
        question: "¿Está obligado el vendedor a contratar un seguro de transporte en esta operación?",
        options: {
          A: "Sí, siempre",
          B: "Sí, solo si el transporte es internacional",
          C: "No",
          D: "Solo si el comprador lo solicita"
        },
        correct: "C",
        explanations: {
          A: "No es obligatorio bajo FCA; el seguro corre a cargo del comprador si lo desea.",
          B: "El transporte internacional no obliga al vendedor a contratar seguro bajo FCA.",
          D: "No es condición que el comprador solicite el seguro; el vendedor no tiene obligación.",
        }
      },
      {
        question: "¿Qué riesgo financiero asume el vendedor al aceptar un pago aplazado a 60 días?",
        options: {
          A: "El riesgo de daños en la mercancía durante el transporte",
          B: "El riesgo de fluctuaciones de divisa",
          C: "El riesgo de que el transportista falle",
          D: "El riesgo de impago"
        },
        correct: "D",
        explanations: {
          A: "El riesgo de daños se transmite al comprador al entregar la mercancía al transportista.",
          B: "El riesgo de divisa no se menciona como parte del contrato.",
          C: "El vendedor no contrata el transporte; no asume este riesgo.",
        }
      },
      {
        question: "¿Tiene fundamento la reclamación del comprador por el retraso en la entrega?",
        options: {
          A: "Sí, siempre que haya retraso",
          B: "Sí, porque el vendedor es responsable del tiempo de transporte",
          C: "Depende del seguro contratado",
          D: "No, porque el riesgo se transmitió al comprador al entregar la mercancía al transportista"
        },
        correct: "D",
        explanations: {
          A: "No todo retraso genera responsabilidad del vendedor bajo FCA.",
          B: "El vendedor no controla al transportista designado por el comprador.",
          C: "No hay seguro en esta operación; no afecta a la reclamación.",
        }
      }
    ]
  },
  4: {
    caseText: `La empresa CAFÉS ANDINOS S.A., con sede en Colombia, exporta 20 toneladas de café verde a la empresa ROASTERS EUROPE GmbH, ubicada en Hamburgo (Alemania), por un valor total de 180.000 USD.<br><br>
    Las condiciones pactadas son:<br>
    - INCOTERM: CFR Puerto de Hamburgo – INCOTERMS® 2020<br>
    - Medio de transporte principal: marítimo<br>
    - Medio de pago: cobranza documentaria<br>
    - Seguro: no contratado por ninguna de las partes<br><br>
    La mercancía se transporta por carretera desde la planta del vendedor hasta el puerto de Cartagena, donde se carga en un buque con destino a Hamburgo. El vendedor contrata el transporte marítimo.<br><br>
    Durante la travesía, una fuerte tormenta provoca movimientos bruscos del buque y parte de la carga sufre daños. A la llegada al puerto de Hamburgo, el comprador detecta los daños y reclama una compensación al vendedor.`,
    questions: [
      {
        question: "¿Quién debe asumir el pago del arancel de importación en Alemania en esta operación?",
        options: {
          A: "El comprador",
          B: "El vendedor",
          C: "El transportista",
          D: "El banco"
        },
        correct: "A",
        explanations: {
          B: "El vendedor solo cubre transporte hasta el puerto de destino; los aranceles corren por cuenta del comprador.",
          C: "El transportista no paga aranceles de importación.",
          D: "El banco solo gestiona los documentos y pagos, no los aranceles."
        }
      },
      {
        question: "¿Por qué el INCOTERM CFR es adecuado para una exportación de café a granel por vía marítima?",
        options: {
          A: "Porque el comprador organiza y paga el transporte marítimo",
          B: "Porque incluye seguro mínimo contratado por el vendedor",
          C: "Porque el vendedor contrata el transporte marítimo hasta destino",
          D: "Porque el vendedor entrega la mercancía en destino sin riesgo"
        },
        correct: "C",
        explanations: {
          A: "El comprador no organiza el transporte; CFR implica que el vendedor lo hace.",
          B: "CFR no obliga al vendedor a contratar seguro.",
          D: "El riesgo se transfiere al comprador una vez cargada la mercancía a bordo."
        }
      },
      {
        question: "¿Qué riesgo asume el comprador al no contratar un seguro en una operación CFR?",
        options: {
          A: "Que el vendedor no entregue la mercancía",
          B: "El riesgo de daños durante el transporte marítimo",
          C: "El riesgo de transporte interior en origen",
          D: "El riesgo de impago del exportador"
        },
        correct: "B",
        explanations: {
          A: "El vendedor cumple con su obligación al cargar la mercancía; el riesgo de daños es del comprador.",
          C: "El transporte interior en origen corre a cargo del vendedor.",
          D: "El riesgo de impago no es relevante para el comprador; se usa cobranza documentaria."
        }
      },
      {
        question: "En una cobranza documentaria, ¿qué papel tiene el banco del exportador?",
        options: {
          A: "Pagar al exportador sin recibir documentos",
          B: "Garantizar seguro de transporte",
          C: "Entregar los documentos solo tras el pago o aceptación del comprador",
          D: "Organizar el transporte marítimo"
        },
        correct: "C",
        explanations: {
          A: "El banco no paga sin recibir los documentos exigidos.",
          B: "El banco no contrata ni gestiona seguros.",
          D: "El banco no organiza transporte; solo gestiona documentos y pagos."
        }
      },
      {
        question: "¿Qué tipo de coste NO está incluido en el precio CFR y debe asumir el comprador?",
        options: {
          A: "Transporte marítimo",
          B: "Transporte interior en origen",
          C: "Costes de carga en el puerto de embarque",
          D: "El seguro de transporte"
        },
        correct: "D",
        explanations: {
          A: "El transporte marítimo está incluido en CFR.",
          B: "El transporte interior en origen corre a cargo del vendedor.",
          C: "Los costes de carga en el puerto de embarque los asume el vendedor."
        }
      }
    ]
  },
  5: {
    caseText: `La empresa INDUSTRIAL PACK GmbH, con sede en Alemania, envía maquinaria de envasado a México para ser utilizada durante una feria internacional del sector alimentario que dura dos semanas.<br><br>
    La maquinaria no se vende, ya que su objetivo es realizar demostraciones comerciales. Una vez finalizada la feria, la empresa tiene previsto reexportar la maquinaria a Alemania.<br><br>
    Para gestionar el envío, la empresa alemana contrata a un transitario internacional, que se encarga de coordinar el transporte, la documentación y los trámites aduaneros en origen y destino. La maquinaria viaja desmontada y correctamente embalada en cajas de madera.<br><br>
    A la llegada a México, la aduana solicita documentación adicional para permitir la entrada de la mercancía y exige garantías para asegurar que la maquinaria no se quedará en el país de forma permanente.<br><br>
    Durante el proceso, la empresa se enfrenta a retrasos administrativos, lo que reduce los días disponibles para las demostraciones previstas en la feria.`,
    questions: [
      {
        question: "¿Qué tipo de operación de comercio internacional está realizando la empresa alemana al enviar la maquinaria a México?",
        options: {
          A: "Una exportación temporal",
          B: "Una exportación definitiva",
          C: "Una venta internacional con devolución",
          D: "Un tránsito aduanero internacional"
        },
        correct: "A",
        explanations: {
          B: "No hay transmisión de propiedad ni venta definitiva de la maquinaria.",
          C: "No se trata de una venta con devolución, sino de un envío sin venta.",
          D: "El tránsito aduanero implica paso por territorio sin importación, lo que no ocurre aquí."
        }
      },
      {
        question: "¿Por qué la aduana mexicana exige garantías para permitir la entrada de la maquinaria?",
        options: {
          A: "Para garantizar el pago inmediato de los impuestos de importación",
          B: "Para asegurar la correcta instalación de la maquinaria en la feria",
          C: "Para asegurar que la mercancía será reexportada y no quedará en el país",
          D: "Para comprobar el valor comercial de la maquinaria"
        },
        correct: "C",
        explanations: {
          A: "En una exportación temporal no se exige el pago definitivo de impuestos.",
          B: "La aduana no controla la instalación ni el uso comercial.",
          D: "El valor no es el motivo principal de la exigencia de garantías."
        }
      },
      {
        question: "¿Qué función principal cumple el transitario en esta operación?",
        options: {
          A: "Comprar la maquinaria en nombre del exportador",
          B: "Asumir la propiedad de la mercancía durante el transporte",
          C: "Coordinar transporte, documentación y trámites aduaneros",
          D: "Garantizar la venta de la maquinaria en destino"
        },
        correct: "C",
        explanations: {
          A: "El transitario no compra mercancías; solo presta servicios logísticos.",
          B: "La propiedad de la mercancía no se transfiere al transitario.",
          D: "El transitario no interviene en operaciones de venta."
        }
      },
      {
        question: "¿Qué consecuencia económica indirecta provoca el retraso administrativo sufrido?",
        options: {
          A: "Incremento inmediato de los impuestos de importación",
          B: "Pérdida definitiva de la maquinaria",
          C: "Menor aprovechamiento comercial de la feria",
          D: "Anulación automática de la exportación temporal"
        },
        correct: "C",
        explanations: {
          A: "Los retrasos administrativos no implican automáticamente más impuestos.",
          B: "La mercancía no se pierde; solo se retrasa su uso.",
          D: "La exportación temporal no se anula por un retraso administrativo."
        }
      },
      {
        question: "¿Qué riesgo asume la empresa si no cumple con la reexportación de la maquinaria?",
        options: {
          A: "La pérdida del transitario contratado",
          B: "El pago de impuestos y posibles sanciones",
          C: "La anulación de futuras ferias internacionales",
          D: "La transferencia automática de la propiedad al importador"
        },
        correct: "B",
        explanations: {
          A: "El incumplimiento aduanero no implica perder al transitario.",
          C: "No existe una sanción automática sobre futuras ferias.",
          D: "La propiedad no se transfiere automáticamente por incumplimiento."
        }
      }
    ]
  },
  6: {
    caseText: `La empresa FRESH TROPIC S.A., con sede en Costa Rica, exporta un cargamento de piña fresca refrigerada con destino a Canadá, con un valor declarado de 85.000 USD.<br><br>
    La mercancía viaja en contenedor refrigerado por transporte marítimo. A su llegada al puerto de destino, las autoridades sanitarias canadienses inspeccionan el cargamento y detectan que, debido a un fallo en la temperatura durante la travesía, una parte significativa de la mercancía no cumple los requisitos sanitarios de importación.<br><br>
    Como consecuencia, la aduana canadiense bloquea la entrada de la mercancía y comunica al importador que existen tres posibles opciones:<br><br>
    - Reexportar la mercancía al país de origen,<br>
    - Proceder a su destrucción bajo control aduanero,<br>
    - Abandonar la mercancía a favor de la aduana.<br><br>
    El importador considera que la mercancía ya no tiene valor comercial y decide no asumir costes adicionales elevados. El exportador, por su parte, estudia si puede recuperar parte del valor a través del seguro contratado para el transporte.`,
    questions: [
      {
        question: "¿Por qué la mercancía es bloqueada por la aduana canadiense aunque haya llegado físicamente a destino?",
        options: {
          A: "Porque el transporte marítimo no es válido para productos perecederos",
          B: "Porque el valor declarado no coincide con el valor real",
          C: "Porque el contenedor refrigerado requiere autorización previa",
          D: "Porque no cumple los requisitos sanitarios exigidos para su importación"
        },
        correct: "D",
        explanations: {
          A: "El transporte marítimo es habitual para productos perecederos si se mantienen las condiciones adecuadas.",
          B: "El bloqueo no se debe a una infravaloración de la mercancía.",
          C: "La falta de autorización previa no es el motivo del bloqueo sanitario."
        }
      },
      {
        question: "¿Qué opción suele ser más adecuada cuando la mercancía es perecedera y no tiene valor comercial?",
        options: {
          A: "La destrucción bajo control aduanero",
          B: "La reexportación inmediata al país de origen",
          C: "El almacenamiento temporal en zona franca",
          D: "El abandono para su posterior subasta"
        },
        correct: "A",
        explanations: {
          B: "La reexportación genera costes elevados y no es viable para mercancía deteriorada.",
          C: "El almacenamiento no recupera el valor de un producto perecedero dañado.",
          D: "La subasta no es habitual para mercancía no apta sanitariamente."
        }
      },
      {
        question: "¿Qué consecuencias administrativas tiene el abandono de la mercancía a favor de la aduana?",
        options: {
          A: "La obligación de pagar aranceles pendientes",
          B: "La posibilidad de recuperar la mercancía más adelante",
          C: "La suspensión temporal del despacho",
          D: "La pérdida de la mercancía sin posibilidad de reclamación posterior"
        },
        correct: "D",
        explanations: {
          A: "El abandono no implica el pago de aranceles por parte del importador.",
          B: "Una vez abandonada, la mercancía no puede recuperarse.",
          C: "No se trata de una suspensión, sino de una renuncia definitiva."
        }
      },
      {
        question: "¿Qué factor será clave para que el exportador pueda reclamar al seguro de transporte?",
        options: {
          A: "Que el importador haya rechazado la mercancía",
          B: "Que la aduana haya ordenado la destrucción",
          C: "Que el valor comercial sea inferior al declarado",
          D: "Que el daño esté cubierto por la póliza y se pruebe el fallo durante el transporte"
        },
        correct: "D",
        explanations: {
          A: "El rechazo del importador no determina la cobertura del seguro.",
          B: "La orden de destrucción no garantiza automáticamente indemnización.",
          C: "La pérdida de valor comercial no es criterio suficiente para el seguro."
        }
      },
      {
        question: "¿Qué riesgo comercial se evidencia en este caso para el exportador de productos perecederos?",
        options: {
          A: "La fluctuación del tipo de cambio",
          B: "La pérdida total del valor de la mercancía por fallos logísticos o sanitarios",
          C: "El retraso en el cobro por parte del importador",
          D: "El incremento de los costes de transporte marítimo"
        },
        correct: "B",
        explanations: {
          A: "El tipo de cambio no es el factor determinante en este caso.",
          C: "El problema principal no es el cobro, sino la inutilización de la mercancía.",
          D: "El coste del transporte no es el riesgo central reflejado en el caso."
        }
      }
    ]
  },
  7: {
    caseText: `La empresa MEDITECH S.p.A., con sede en Italia, vende equipos médicos de diagnóstico a un hospital privado en Marruecos por un valor de 310.000 €.<br><br>
    En el contrato se pacta el INCOTERM DAP Hospital de Casablanca – INCOTERMS® 2020. El vendedor organiza el transporte completo desde su fábrica en Italia hasta el hospital, incluyendo transporte por carretera y ferry.<br><br>
    A la llegada a Marruecos, la mercancía queda retenida en aduana debido a que el importador no ha tramitado a tiempo la licencia sanitaria de importación exigida por la legislación local. La mercancía permanece varios días en el puerto, generando costes de almacenaje y demoras.<br><br>
    El comprador solicita al vendedor que asuma dichos costes, alegando que el INCOTERM pactado implica entrega en destino y que el vendedor es responsable hasta ese punto. El vendedor, por su parte, considera que los problemas derivados de la importación no son de su responsabilidad.`,
    questions: [
      {
        question: "¿Está obligado el vendedor a realizar el despacho de importación en Marruecos según el INCOTERM DAP?",
        options: {
          A: "No, el despacho de importación corresponde al comprador",
          B: "Sí, porque la entrega es en destino",
          C: "Sí, si se trata de mercancía sanitaria",
          D: "Depende de lo que indique el transportista"
        },
        correct: "A",
        explanations: {
          B: "La entrega en destino no implica asumir trámites de importación bajo DAP.",
          C: "La naturaleza sanitaria de la mercancía no modifica las obligaciones del INCOTERM.",
          D: "El transportista no determina las obligaciones aduaneras entre comprador y vendedor."
        }
      },
      {
        question: "¿Quién debe asumir los costes de almacenaje y demoras generados por la retención aduanera?",
        options: {
          A: "El comprador",
          B: "El vendedor",
          C: "El transportista",
          D: "La aduana marroquí"
        },
        correct: "A",
        explanations: {
          B: "El vendedor no es responsable de los retrasos causados por incumplimientos del importador.",
          C: "El transportista solo ejecuta el transporte, no asume costes por licencias no tramitadas.",
          D: "La aduana aplica controles, pero no asume costes derivados de la retención."
        }
      },
      {
        question: "¿Por qué el argumento del comprador sobre la entrega en destino no es correcto?",
        options: {
          A: "Porque la entrega se considera realizada en el puerto",
          B: "Porque el transporte final no estaba incluido",
          C: "Porque el vendedor no asume riesgos en ningún momento",
          D: "Porque DAP no incluye trámites ni costes de importación"
        },
        correct: "D",
        explanations: {
          A: "En DAP la entrega es en el lugar acordado, no en el puerto.",
          B: "El transporte hasta destino sí está incluido bajo DAP.",
          C: "El vendedor sí asume riesgos hasta la entrega, pero no los de importación."
        }
      },
      {
        question: "¿Qué INCOTERM habría sido más adecuado si el vendedor quisiera asumir también la importación?",
        options: {
          A: "DAP",
          B: "CIP",
          C: "DDP",
          D: "FCA"
        },
        correct: "C",
        explanations: {
          A: "DAP no incluye despacho de importación ni pago de impuestos.",
          B: "CIP transfiere el riesgo antes y no cubre la importación.",
          D: "FCA transfiere el riesgo en origen, no en destino."
        }
      },
      {
        question: "¿Qué riesgo operativo se evidencia al utilizar DAP con mercancías sujetas a licencias especiales?",
        options: {
          A: "Incremento del coste del transporte internacional",
          B: "Mayor exposición al riesgo de tipo de cambio",
          C: "Retrasos y costes por incumplimientos administrativos del importador",
          D: "Pérdida automática de la cobertura del seguro"
        },
        correct: "C",
        explanations: {
          A: "El riesgo principal no es el coste del transporte, sino la gestión documental.",
          B: "El tipo de cambio no es el problema central en este caso.",
          D: "La cobertura del seguro no se pierde automáticamente por una retención aduanera."
        }
      }
    ]
  },
  8: {
    caseText: `La empresa ECOCHEM S.A., con sede en Brasil, exporta un cargamento de productos químicos para uso industrial a la empresa INDUSTRIAL SOLUTIONS Ltd., ubicada en Sudáfrica.<br><br>
    En la documentación presentada, el exportador clasifica la mercancía bajo un código arancelario que permite una importación con controles reducidos. Sin embargo, durante el control aduanero en destino, la autoridad sudafricana considera que la mercancía debería clasificarse en una partida diferente, sujeta a mayores requisitos técnicos y un arancel más elevado.<br><br>
    Como consecuencia, la aduana inicia un procedimiento de verificación arancelaria, retiene la mercancía y exige documentación técnica adicional para confirmar la correcta clasificación. Mientras se resuelve el procedimiento, la mercancía permanece en depósito aduanero, generando costes de almacenaje.<br><br>
    El importador manifiesta que confió en la clasificación indicada por el exportador y solicita una solución rápida para poder disponer de la mercancía.`,
    questions: [
      {
        question: "¿Por qué la aduana sudafricana puede cuestionar la clasificación arancelaria indicada por el exportador?",
        options: {
          A: "Porque el exportador no tiene derecho a clasificar mercancías químicas",
          B: "Porque la autoridad aduanera del país importador es la competente para determinar la clasificación correcta",
          C: "Porque toda mercancía química debe reclasificarse en destino automáticamente",
          D: "Porque la clasificación solo es válida en el país de origen"
        },
        correct: "B",
        explanations: {
          A: "El exportador puede proponer una clasificación, pero no es quien la valida en destino.",
          C: "No existe una obligación automática de reclasificación por tratarse de productos químicos.",
          D: "La clasificación no pierde validez por cruzar fronteras, pero sí puede ser revisada."
        }
      },
      {
        question: "¿Quién es el responsable final de la correcta clasificación arancelaria en la importación?",
        options: {
          A: "El exportador, por haber emitido la factura",
          B: "El transitario que presenta la documentación",
          C: "El importador",
          D: "La aduana del país de origen"
        },
        correct: "C",
        explanations: {
          A: "El exportador puede orientar, pero no responde ante la aduana de importación.",
          B: "El transitario actúa por cuenta del importador, pero no asume la responsabilidad final.",
          D: "La aduana de origen no tiene competencia en la importación."
        }
      },
      {
        question: "¿Qué objetivo tiene el procedimiento de verificación arancelaria iniciado por la aduana?",
        options: {
          A: "Sancionar automáticamente al importador",
          B: "Suspender definitivamente la importación",
          C: "Confirmar el valor en aduana de la mercancía",
          D: "Confirmar la correcta clasificación y aplicar los controles y aranceles adecuados"
        },
        correct: "D",
        explanations: {
          A: "El procedimiento no implica sanción automática, sino comprobación.",
          B: "La importación no queda cancelada, solo suspendida hasta resolver la verificación.",
          C: "El objetivo principal es la clasificación, no el valor en aduana."
        }
      },
      {
        question: "¿Qué consecuencia económica directa genera la retención de la mercancía en depósito aduanero?",
        options: {
          A: "Incremento del arancel aplicado",
          B: "Costes de almacenaje y demoras",
          C: "Pérdida automática de la mercancía",
          D: "Anulación del contrato de compraventa"
        },
        correct: "B",
        explanations: {
          A: "El arancel puede variar tras la verificación, pero no es una consecuencia directa de la retención.",
          C: "La mercancía no se pierde automáticamente por permanecer en depósito.",
          D: "La retención aduanera no anula por sí sola el contrato comercial."
        }
      },
      {
        question: "¿Qué medida preventiva habría reducido el riesgo de este conflicto aduanero?",
        options: {
          A: "Solicitar una información arancelaria vinculante o dictamen previo",
          B: "Contratar un seguro de transporte más amplio",
          C: "Utilizar un INCOTERM diferente",
          D: "Declarar un valor superior en la factura comercial"
        },
        correct: "A",
        explanations: {
          B: "El seguro de transporte no cubre conflictos de clasificación arancelaria.",
          C: "El INCOTERM no determina la clasificación aduanera.",
          D: "El valor declarado no soluciona discrepancias de clasificación."
        }
      }
    ]
  },
  9: {
    caseText: `La empresa TECHWAVE S.A., con sede en España, fabrica componentes electrónicos para ordenadores portátiles. Ha recibido un pedido de 50.000 unidades de LAPTOP SOLUTIONS Ltd. en Canadá, por un valor total de 1.500.000 €.<br><br>
    El proceso productivo se divide en varias fases:<br>
    1. Fabricación de placas electrónicas en China.<br>
    2. Montaje parcial, pruebas funcionales y etiquetado final en España.<br><br>
    El contrato comercial prevé acogerse al origen preferencial UE–Canadá (CETA) para beneficiarse de una reducción arancelaria en la importación en Canadá.<br><br>
    El agente aduanero advierte que la transformación realizada en España podría no ser suficiente para conferir origen preferencial UE. En caso de emitirse un certificado incorrecto, las autoridades canadienses podrían rechazar la preferencia, aplicar el arancel completo y generar sobrecostes y posibles reclamaciones contractuales.<br><br>
    El exportador valora tres alternativas: aumentar la transformación en España, emitir un certificado de origen no preferencial o solicitar un dictamen previo a la autoridad aduanera. El comprador solicita una decisión rápida para no afectar su cadena de suministro.`,
    questions: [
      {
        question: "Según el Acuerdo UE–Canadá (CETA), ¿qué criterio clave determina si la mercancía puede considerarse de origen preferencial?",
        options: {
          A: "Que la última operación productiva se haya realizado en un Estado miembro de la Unión Europea",
          B: "Que la transformación realizada en España sea suficiente, cumpliendo las reglas de acumulación y el cambio de clasificación arancelaria",
          C: "Que un porcentaje significativo del valor del producto se haya generado dentro del territorio de la Unión Europea",
          D: "Que el exportador esté registrado como operador autorizado para emitir declaraciones de origen preferencial"
        },
        correct: "B",
        explanations: {
          A: "No basta con que la última operación tenga lugar en la UE si no cumple las reglas de origen.",
          C: "El porcentaje de valor no es un criterio general automático en CETA.",
          D: "El estatus del exportador no sustituye el cumplimiento de las reglas de origen."
        }
      },
      {
        question: "Si se emite un certificado de origen español sin cumplir la transformación suficiente, ¿qué consecuencias puede enfrentar el exportador?",
        options: {
          A: "La recepción de una advertencia formal por parte de la aduana canadiense sin efectos económicos inmediatos",
          B: "La obligación de corregir la documentación comercial emitida sin impacto en la liquidación arancelaria",
          C: "La suspensión temporal de sus operaciones de exportación hasta regularizar la situación",
          D: "El rechazo de la preferencia arancelaria, la aplicación del arancel completo y posibles reclamaciones del comprador"
        },
        correct: "D",
        explanations: {
          A: "Las autoridades aduaneras pueden aplicar medidas económicas más allá de una advertencia.",
          B: "La corrección documental no elimina el impacto arancelario ya producido.",
          C: "No existe una suspensión automática de exportaciones por este motivo."
        }
      },
      {
        question: "¿Cuál es la ventaja principal de solicitar un dictamen previo de la autoridad aduanera antes de exportar?",
        options: {
          A: "Garantizar la aplicación automática del arancel preferencial en el país de destino",
          B: "Obtener seguridad jurídica sobre el origen, evitando sanciones, sobrecostes o rechazos en destino",
          C: "Transferir la responsabilidad sobre el origen de la mercancía a la autoridad aduanera competente",
          D: "Reducir los plazos de despacho aduanero mediante una tramitación anticipada"
        },
        correct: "B",
        explanations: {
          A: "El dictamen no modifica el arancel, solo aclara el origen aplicable.",
          C: "La responsabilidad sigue recayendo en el operador económico.",
          D: "No garantiza una mayor rapidez en los controles en destino."
        }
      },
      {
        question: "Entre aumentar la transformación en España, emitir certificado no preferencial o solicitar dictamen previo, ¿qué factores deben considerarse para decidir?",
        options: {
          A: "El coste económico inmediato de cada alternativa sin considerar riesgos regulatorios",
          B: "El impacto fiscal en la importación canadiense como único elemento de decisión",
          C: "Tiempo disponible, costes adicionales, cumplimiento legal, impacto comercial y riesgo de sanciones o aranceles elevados",
          D: "La preferencia del comprador y la urgencia del pedido, al margen de los requisitos normativos"
        },
        correct: "C",
        explanations: {
          A: "El coste inmediato no refleja los riesgos legales y comerciales a medio plazo.",
          B: "El impacto fiscal es solo uno de varios factores relevantes.",
          D: "La decisión no puede basarse solo en la preferencia del comprador."
        }
      },
      {
        question: "¿Qué riesgos comerciales y logísticos se evidencian en este caso para el exportador y el comprador?",
        options: {
          A: "La aparición de retrasos administrativos puntuales sin impacto económico relevante",
          B: "El incremento del coste del transporte internacional por ajustes logísticos",
          C: "Para el exportador: sanciones, rechazo de la preferencia y costes adicionales; para el comprador: retrasos y sobrecostes arancelarios",
          D: "La pérdida de competitividad comercial del producto en el mercado canadiense a largo plazo"
        },
        correct: "C",
        explanations: {
          A: "El impacto va más allá de un simple retraso administrativo.",
          B: "El riesgo principal no está relacionado con el transporte.",
          D: "La pérdida de competitividad es solo una posible consecuencia indirecta."
        }
      }
    ]
  },
  10: {
    caseText: `La empresa CHEMICAL GLOBAL S.A., con sede en México, exporta 5 contenedores de productos químicos especializados a la empresa INDUSTRIAL LABS Ltd., ubicada en Alemania, por un valor total de 600.000 USD.<br><br>
    
    Las características de la operación son las siguientes:<br><br>
    
    - La mercancía está catalogada como producto químico peligroso, sujeta a la normativa ADR y al transporte internacional de mercancías peligrosas.<br>
    - La Unión Europea ha impuesto medidas antidumping temporales sobre productos similares procedentes de México, incrementando los aranceles aplicables.<br>
    - El exportador declara los productos bajo un código arancelario genérico con la intención de acogerse a un arancel reducido.<br>
    - El transporte se realiza de forma multimodal: camión hasta el puerto, transporte marítimo y transporte interior en Alemania, siendo contratado parcialmente por el exportador y parcialmente por el importador.<br><br>
    
    A la llegada al puerto alemán, la aduana y la autoridad competente en transporte detectan que:<br>
    - La documentación relativa a mercancías peligrosas no cumple completamente los requisitos formales exigidos.<br>
    - La clasificación arancelaria utilizada no coincide con la partida sujeta a las medidas antidumping en vigor.<br>
    - El importador aún no ha pagado la garantía exigida para la aplicación del arancel antidumping correspondiente.<br><br>
    
    Como consecuencia de estas incidencias, la mercancía queda retenida en el puerto, generando costes de almacenaje, importantes retrasos logísticos y riesgo de sanciones administrativas adicionales.<br><br>
    
    El exportador debe decidir cómo actuar para:<br>
    - Cumplir con la normativa de mercancías peligrosas.<br>
    - Regularizar la clasificación arancelaria y los pagos antidumping.<br>
    - Evitar sanciones adicionales y cumplir los plazos del cliente.`,
    questions: [
      {
        question: "¿Cuál es la principal obligación del exportador respecto a la normativa ADR para este envío?",
        options: {
          A: "Contratar un seguro específico que cubra exclusivamente los riesgos derivados del transporte de mercancías peligrosas",
          B: "Garantizar que el transportista elegido disponga de las autorizaciones administrativas necesarias en todos los países de tránsito",
          C: "Garantizar que la mercancía peligrosa cumple con los requisitos de embalaje, etiquetado, documentación y transporte conforme a ADR",
          D: "Asumir el despacho de importación en Alemania por tratarse de productos químicos regulados"
        },
        correct: "C",
        explanations: {
          A: "El seguro no sustituye las obligaciones técnicas y documentales exigidas por la normativa ADR.",
          B: "Aunque relevante, la autorización del transportista no exime al exportador de cumplir con los requisitos ADR del envío.",
          D: "El despacho de importación no forma parte de las obligaciones del exportador en este contexto."
        }
      },
      {
        question: "¿Qué riesgo supone declarar los productos bajo un código arancelario genérico para intentar acogerse a un arancel reducido?",
        options: {
          A: "Que el transporte quede reclasificado como mercancía convencional sin requisitos especiales",
          B: "Que se retrase la emisión del conocimiento de embarque por discrepancias documentales",
          C: "Que la aduana detecte el incumplimiento y aplique aranceles antidumping, sanciones o la retención de la mercancía",
          D: "Que el exportador pierda automáticamente el derecho a exportar a la Unión Europea"
        },
        correct: "C",
        explanations: {
          A: "La clasificación arancelaria no altera la naturaleza peligrosa de la mercancía.",
          B: "El problema principal no es documental de transporte, sino arancelario y sancionador.",
          D: "No existe una prohibición automática de exportación por este motivo."
        }
      },
      {
        question: "¿Quién es responsable de pagar la garantía correspondiente al arancel antidumping en esta operación?",
        options: {
          A: "El importador, al ser el sujeto obligado frente a la aduana del país de destino según la normativa antidumping",
          B: "El exportador, por haber declarado inicialmente un código arancelario incorrecto",
          C: "El transitario, como intermediario responsable de la gestión aduanera",
          D: "Ambas partes de forma solidaria hasta la liberación de la mercancía"
        },
        correct: "A",
        explanations: {
          B: "El error en la clasificación no traslada la obligación del pago del arancel al exportador.",
          C: "El transitario no asume obligaciones fiscales salvo mandato expreso.",
          D: "La normativa antidumping no establece responsabilidad solidaria automática."
        }
      },
      {
        question: "¿Qué consecuencias puede tener el incumplimiento de la documentación exigida para mercancías peligrosas?",
        options: {
          A: "Únicamente la imposibilidad de aplicar un arancel preferencial en la importación",
          B: "La retención de la mercancía, sanciones administrativas, costes de almacenaje y retrasos en la cadena logística",
          C: "La anulación automática del contrato de compraventa internacional",
          D: "La obligación de reexportar la mercancía sin posibilidad de corrección documental"
        },
        correct: "B",
        explanations: {
          A: "El impacto va más allá de un efecto arancelario.",
          C: "El incumplimiento documental no anula automáticamente el contrato comercial.",
          D: "En muchos casos es posible subsanar la documentación sin reexportar."
        }
      },
      {
        question: "Ante la combinación de problemas detectados, ¿qué estrategia debería seguir el exportador para minimizar riesgos y costes?",
        options: {
          A: "Solicitar la reexportación inmediata de la mercancía para evitar sanciones futuras",
          B: "Delegar toda la gestión en el transitario sin intervenir en las decisiones aduaneras",
          C: "Negociar exclusivamente con el cliente una ampliación de plazos sin actuar ante la aduana",
          D: "Regularizar la documentación ADR, corregir la clasificación arancelaria, coordinar el pago de garantías y negociar la liberación de la mercancía"
        },
        correct: "D",
        explanations: {
          A: "La reexportación suele implicar mayores costes y no resuelve el fondo del problema.",
          B: "La responsabilidad final no puede delegarse completamente en el transitario.",
          C: "La ampliación de plazos no soluciona las incidencias regulatorias."
        }
      }
    ]
  }
};
