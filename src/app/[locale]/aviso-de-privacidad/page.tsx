import { LegalPage } from "@/components/LegalPage";

export default function AvisoDePrivacidadPage() {
  const sections = [
    {
      heading: "Identidad y Domicilio del Responsable",
      content: "Al interactuar con el portal explonix.com o enviar información mediante nuestros formularios de contacto, usted consiente el tratamiento de sus datos personales bajo las condiciones establecidas en este aviso. NEC DIGITAL PUBLICITY S.A. DE C.V. (comercialmente conocida como Explonix), con domicilio fiscal en Heriberto Frías 903, Col. Del Valle Centro, Alcaldía Benito Juárez, C.P. 03100, Ciudad de México, es responsable de resguardar y gestionar su información personal de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Nuestra labor abarca la planeación, logística y coordinación integral de servicios turísticos en México, tales como itinerarios a la medida, transportación, experiencias VIP, reservaciones de actividades y gastronomía, así como asistencia técnica y personalizada durante su viaje. Puede contactarnos directamente a contacto@explonix.com o al teléfono +52 1 55 5523 7379."
    },
    {
      heading: "Recopilación de Datos Personales",
      content: "Recibimos su información únicamente a través de dos mecanismos:\nFormularios web de contacto: Donde de manera voluntaria nos proporciona nombre completo, correo electrónico, número telefónico o WhatsApp, fechas estimadas de viaje, número de acompañantes e itinerarios o preferencias específicas requeridas para estructurar su experiencia.\nProcesamiento de pagos: Toda transacción económica se ejecuta mediante pasarelas de pago externas con protocolos de cifrado y certificación bancaria. Explonix jamás almacena, recopila ni tiene visibilidad de los datos completos de sus tarjetas de crédito o débito.\nEn ninguna etapa de la interacción ni en la prestación del servicio recabamos datos personales sensibles."
    },
    {
      heading: "Finalidades del Tratamiento de Datos",
      content: "La información recabada se destina de forma exclusiva a las siguientes actividades operativas:\nDiseño, cotización y estructuración de itinerarios de viaje personalizados.\nGestión directa de reservas y confirmaciones con prestadores de servicios finales (restaurantes, transportistas, guías locales y operadores turísticos).\nComunicación en tiempo real a través de nuestro equipo de soporte y concierge asignado antes y durante la travesía.\nEmisión de facturas y comprobantes fiscales correspondientes.\nNo comercializamos su información con terceros ni la empleamos para fines publicitarios ajenos a nuestro servicio. Si en el futuro deseamos dar seguimiento a alguna cotización previa, le solicitaremos su confirmación antes de iniciar cualquier contacto."
    },
    {
      heading: "Transferencias y Protección de la Información",
      content: "Para hacer efectiva su experiencia de viaje, compartimos únicamente los datos estrictamente necesarios (nombre, número de viajeros, fechas y especificaciones operativas como restricciones alimentarias o de movilidad) con los operadores locales y prestadores de servicios asignados. Asimismo, sus datos podrán ser requeridos por autoridades competentes en cumplimiento de obligaciones fiscales o legales. No realizamos transferencias de datos con fines promocionales o comerciales.\nExplonix mantiene medidas de seguridad técnicas, físicas y administrativas orientadas a prevenir la pérdida, alteración, divulgación o acceso no autorizado a su información."
    },
    {
      heading: "Uso de Cookies y Rastreo Web",
      content: "El sitio explonix.com utiliza cookies esenciales requeridas para la navegación técnica, la gestión del carrito de compras y el análisis estadístico del tráfico. Las cookies destinadas a métricas avanzadas o publicidad requerirán su consentimiento explicito. Puede desactivar las cookies desde la configuración de su navegador, tomando en cuenta que esto podría restringir ciertas funciones del sitio web."
    },
    {
      heading: "Plazos de Conservación y Eliminación",
      content: "Consultas no concretadas: Los datos provenientes de formularios que no deriven en una compra o reserva confirmada serán eliminados o anonimizados tras un periodo máximo de 6 meses contados desde el último contacto.\nRegistros contables: La información vinculada a facturación y pagos se resguardará por el plazo de 5 años, en estricto cumplimiento del Código Fiscal de la Federación.\nCumplido el periodo reglamentario, los registros serán bloqueados y destruidos de forma segura."
    },
    {
      heading: "Derechos ARCO y Revocación del Consentimiento",
      content: "Usted tiene derecho a ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO), así como a revocar el consentimiento previamente otorgado. Para tramitar cualquier solicitud, envíe un correo a contacto@explonix.com incluyendo:\nNombre completo del titular.\nDescripción clara de la solicitud o del derecho a ejercer.\nCopia de una identificación oficial vigente.\nEmitiremos respuesta a su requerimiento en un plazo máximo de 20 días hábiles. En caso de considerar insatisfecho su derecho, tiene la facultad de acudir ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) en www.inai.org.mx."
    },
    {
      heading: "Modificaciones al Aviso de Privacidad",
      content: "Nos reservamos el derecho de actualizar este documento. Cualquier ajuste será publicado en explonix.com indicando la fecha de entrada en vigor, sin afectar las condiciones contratadas de servicios previamente pagados.\nDomicilio Operativo: NEC DIGITAL PUBLICITY S.A. DE C.V. — Heriberto Frías 903, Col. Del Valle Centro, Benito Juárez, C.P. 03100, Ciudad de México.\nÚltima actualización: Octubre de 2026."
    }
  ];

  return <LegalPage title="Aviso de Privacidad" sections={sections} />;
}
