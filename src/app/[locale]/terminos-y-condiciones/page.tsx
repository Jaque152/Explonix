import { LegalPage } from "@/components/LegalPage";

export default function TerminosYCondicionesPage() {
  const sections = [
    {
      heading: "Introducción",
      content: "El presente documento establece el marco normativo y contractual que rige la relación entre NEC DIGITAL PUBLICITY S.A. DE C.V. (comercialmente Explonix) y cualquier usuario o cliente que acceda al portal explonix.com, solicite cotizaciones o adquiera los servicios ofertados. Su estructura está dispuesta en forma de glosario normativo, en donde cada término define las directrices y compromisos aplicables. La navegación en el portal o la contratación de servicios formaliza la aceptación expresa de estas cláusulas, en términos de los artículos 1792 y 1803 del Código Civil Federal."
    },
    {
      heading: "1. Datos de Identificación",
      content: "Explonix es la marca comercial bajo la cual opera la sociedad NEC DIGITAL PUBLICITY S.A. DE C.V.\nDomicilio Fiscal: Heriberto Frías 903, Col. Del Valle Centro, Alcaldía Benito Juárez, C.P. 03100, Ciudad de México, CDMX.\nCanales de Atención: Correo electrónico contacto@explonix.com y atención telefónica/WhatsApp al +52 1 55 5523 7379.\nPortal Web: explonix.com."
    },
    {
      heading: "2. Definición de Experiencia",
      content: "Se entiende por \"Experiencia\" cualquier oferta turística comercializada por Explonix, ya sea mediante paquetes preestablecidos en el catálogo del sitio web o itinerarios diseñados a la medida. Esto abarca, de forma enunciativa pero no limitativa: recorridos gastronómicos, expediciones culturales, turismo de aventura, reservaciones en establecimientos de consumo, servicios de transporte, pases prioritarios VIP y experiencias de bienestar. Cada ficha de producto o propuesta detallará sus inclusiones, exclusiones y particularidades operativas."
    },
    {
      heading: "3. Propuestas y Cotizaciones a la Medida",
      content: "Es el itinerario personalizado elaborado por el equipo de coordinación con base en los requerimientos manifestados por el viajero (fechas, número de participantes, intereses y presupuesto). Dicha propuesta no genera compromiso económico para el cliente sino hasta su aprobación expresa. El pago de cotizaciones personalizadas se procesa en el sitio web ingresando la referencia o folio acordado con el asesor."
    },
    {
      heading: "4. Rol del Concierge",
      content: "Es el coordinador asignado por Explonix para la estructuración, logística y asistencia continua del viaje. Funciona como punto de contacto directo antes y durante la estancia a través de canales digitales o telefónicos. Su función esencial es la de intermediario operativo entre el usuario y los prestadores finales de servicios, mas no la de ejecutor directo de las actividades en destino."
    },
    {
      heading: "5. Lineamientos de Uso Permitido",
      content: "El portal explonix.com está reservado exclusivamente para personas físicas o morales con capacidad legal para contratar. Queda estrictamente prohibido:\nUtilizar la plataforma con fines ilícitos, fraudulentos o vulneradores de derechos de terceros.\nCopiar, extraer, alterar o distribuir el contenido, gráficos, diseño o textos del portal sin consentimiento expreso por escrito de NEC DIGITAL PUBLICITY S.A. DE C.V.\nHacer uso no autorizado de los signos distintivos, marca o logotipos de Explonix.\nIntentar vulnerar la seguridad de la plataforma o introducir código malicioso en sus servidores."
    },
    {
      heading: "6. Normativa General del Sitio y Jurisdicción",
      content: "El ingreso a explonix.com y el envío de consultas implican la conformidad del usuario con estos términos y con nuestra Política de Privacidad. Explonix se reserva la facultad de denegar la prestación de servicios o cancelar solicitudes conforme a sus criterios de gestión. Cualquier controversia legal derivada de la interpretación o cumplimiento de este instrumento se someterá a los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que por domicilio presente o futuro pudiere corresponder."
    },
    {
      heading: "7. Estructura de Precios",
      content: "Los precios exhibidos en explonix.com están tasados en moneda nacional (pesos mexicanos - MXN) y comprenden el Impuesto al Valor Agregado (IVA), salvo que expresamente se indique lo contrario en una cotización particular. Si bien las tarifas están sujetas a variaciones por estacionalidad o ajustes de proveedores, una vez liquidada y confirmada la reserva, Explonix mantendrá la tarifa pactada. En el evento imprevisto de un error tipográfico manifiesto en el sistema (montos evidentemente desproporcionados), se notificará al cliente para corregir el valor o proceder con la cancelación y devolución total del pago."
    },
    {
      heading: "8. Formas de Pago",
      content: "Se aceptan tarjetas de crédito y débito bancarias autorizadas, además de las opciones digitales habilitadas a través de pasarelas de pago certificadas dentro de explonix.com. La disponibilidad de ciertos medios puede variar en función de la entidad emisora o el país de origen. El cliente garantiza contar con la titularidad o la autorización legal correspondiente sobre el instrumento de pago utilizado."
    },
    {
      heading: "9. Régimen Fiscal (IVA) Y Facturación",
      content: "Las tarifas mostradas en el catálogo web incluyen el 16% del Impuesto al Valor Agregado, en estricto apego a la legislación fiscal vigente. En itinerarios a la medida, el desglose correspondiente se especificará en la cotización enviada. NEC DIGITAL PUBLICITY S.A. DE C.V. emitirá el Comprobante Fiscal Digital por Internet (CFDI) respectivo previa solicitud del cliente dentro del mes de la compra."
    },
    {
      heading: "10. Procesamiento Seguro de Transacciones",
      content: "Los cobros se procesan mediante módulos de pago externos con cifrado de datos de alta seguridad. Explonix no recopila, consulta ni conserva información completa sobre las tarjetas bancarias de los usuarios. La validación del pago es la condición necesaria para activar la confirmación del servicio; la falta de liquidación de los compromisos adquiridos libera a la empresa de cualquier obligación con terceros proveedores."
    },
    {
      heading: "11. Tiempos de Reserva Anticipada",
      content: "Con el objetivo de asegurar disponibilidad logística, Explonix solicita gestionar las reservaciones con al menos 34 días naturales de antelación al inicio del viaje. Las solicitudes tramitadas en plazos inferiores quedarán sujetas a confirmación según el cupo existente, informando al cliente de forma transparente sobre las coberturas y limitaciones aplicables."
    },
    {
      heading: "12. Requerimientos y Especificaciones del Viajero",
      content: "El usuario es responsable de declarar oportunamente cualquier condición relevante para la ejecución del viaje (restricciones alimentarias, requerimientos de accesibilidad, alergias o capacidades físicas). Explonix comunicará estas precisiones a los prestadores finales; sin embargo, no responderá por omisiones o datos imprecisos proporcionados por el cliente."
    },
    {
      heading: "13. Confirmación Electrónica",
      content: "Al acreditarse el importe correspondiente, Explonix enviará un comprobante digital al correo electrónico proporcionado, indicando el número de orden o folio, resumen de servicios, fechas e importes. Este documento constituye el respaldo formal de la operación para cualquier aclaración posterior."
    },
    {
      heading: "14. Derecho de Revocación",
      content: "En apego al artículo 56 de la Ley Federal de Protección al Consumidor, el cliente podrá revocar su decisión de compra dentro de los 5 días hábiles posteriores a la transacción realizada en medios digitales, siempre que la experiencia no se haya ejecutado o iniciado. Para hacer efectivo este derecho, se deberá notificar por escrito a contacto@explonix.com dentro del plazo legal."
    },
    {
      heading: "15. Suspensión y Detección de Infracciones",
      content: "Explonix ostenta la facultad de cancelar el acceso al portal o suspender servicios en desarrollo ante la detección de actos fraudulentos, violaciones a estos términos, uso indebido de los canales de pago o conductas que vulneren la seguridad de la empresa o de terceros. En tales supuestos, no procederá reembolso cuando la falta sea atribuible al usuario."
    },
    {
      heading: "16. Cancelaciones y Reembolsos",
      content: "La anulación voluntaria de una reserva confirmada se regirá de manera integral por las condiciones, ventanas de tiempo y deducciones fijadas en la Política de Devoluciones y Reembolsos de Explonix, la cual forma parte vinculante de este contrato."
    },
    {
      heading: "17. Relación con Proveedores Finales",
      content: "Los servicios que integran las experiencias son ejecutados de forma independiente por terceros (restaurantes, transportistas, guías locales, centros recreativos, entre otros). Explonix actúa como intermediario organizador y gestor de concierge; por ende, aunque selecciona minuciosamente a sus aliados, no ejerce control directo sobre sus decisiones operativas internas, políticas de acceso o contingencias en sus instalaciones. Si un proveedor modifica las condiciones contratadas, Explonix buscará alternativas de nivel equivalente para el cliente."
    },
    {
      heading: "18. Deslinde de Responsabilidad",
      content: "La responsabilidad material de la prestación directa del servicio (seguridad en trayectos, puntualidad, condiciones de los establecimientos) recae en los proveedores ejecutores. En la medida permitida por el ordenamiento legal mexicano, Explonix no asumirá responsabilidad por daños indirectos, pérdidas de oportunidad o lucros cesantes. En los casos en que se determine responsabilidad directa imputable a la empresa, el resarcimiento máximo no excederá el monto efectivamente abonado por el usuario para la experiencia en cuestión, respetando los derechos irrenunciables previstos por la LFPC."
    },
    {
      heading: "19. Derechos de Propiedad Intelectual",
      content: "Todo el material albergado en explonix.com (textos, gráficos, arquitectura de software, marcas, logotipos y diseños) es titularidad de NEC DIGITAL PUBLICITY S.A. DE C.V. o cuenta con las licencias correspondientes. Queda prohibida su reproducción, uso comercial o explotación sin la autorización previa y por escrito de la sociedad."
    },
    {
      heading: "20. Eventos de Fuerza Mayor o Caso Fortuito",
      content: "Ante imprevistos fuera del control operativo de la empresa (fenómenos meteorológicos severos, disposiciones de autoridad, cierres de emergencia o problemáticas de seguridad en destino), Explonix priorizará la reprogramación de la experiencia. De no ser posible o no ser aceptada por el cliente, se reembolsará la suma pagada descontando los costos irrecuperables pagados a terceros, entregando el respaldo documental correspondiente."
    },
    {
      heading: "21. Disposiciones Generales",
      content: "Este acuerdo representa el entendimiento total entre NEC DIGITAL PUBLICITY S.A. DE C.V. y el usuario, sustituyendo cualquier negociación o comunicación previa. Si alguna cláusula fuere declarada nula o ineficaz por un tribunal, las disposiciones restantes conservarán plena validez legal. La tolerancia u omisión de Explonix en el ejercicio de algún derecho no constituirá renuncia definitiva al mismo."
    }
  ];

  return <LegalPage title="Términos y Condiciones de Uso y Contratación" sections={sections} />;
}
