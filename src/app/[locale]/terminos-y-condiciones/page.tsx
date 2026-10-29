import { LegalPage } from "@/components/LegalPage";

export default function TerminosYCondicionesPage() {
  const sections = [
    {
      heading: "Introducción[span_85](start_span)[span_85](end_span)",
      content: "El presente documento establece el marco normativo y contractual que rige la relación entre NEC DIGITAL PUBLICITY S.A. DE C.V. (comercialmente Explonix) y cualquier usuario o cliente que acceda al portal explonix.com, solicite cotizaciones o adquiera los servicios ofertados[span_86](start_span)[span_86](end_span). Su estructura está dispuesta en forma de glosario normativo, en donde cada término define las directrices y compromisos aplicables[span_87](start_span)[span_87](end_span). La navegación en el portal o la contratación de servicios formaliza la aceptación expresa de estas cláusulas, en términos de los artículos 1792 y 1803 del Código Civil Federal[span_88](start_span)[span_88](end_span)."
    },
    {
      heading: "1. Datos de Identificación[span_89](start_span)[span_89](end_span)",
      content: "Explonix es la marca comercial bajo la cual opera la sociedad NEC DIGITAL PUBLICITY S.A. DE C.V[span_90](start_span)[span_90](end_span).\nDomicilio Fiscal: Heriberto Frías 903, Col. Del Valle Centro, Alcaldía Benito Juárez, C.P. 03100, Ciudad de México, CDMX[span_91](start_span)[span_91](end_span).\nCanales de Atención: Correo electrónico contacto@explonix.com y atención telefónica/WhatsApp al +52 1 55 5523 7379[span_92](start_span)[span_92](end_span).\nPortal Web: explonix.com[span_93](start_span)[span_93](end_span)."
    },
    {
      heading: "2. Definición de Experiencia[span_94](start_span)[span_94](end_span)",
      content: "Se entiende por \"Experiencia\" cualquier oferta turística comercializada por Explonix, ya sea mediante paquetes preestablecidos en el catálogo del sitio web o itinerarios diseñados a la medida[span_95](start_span)[span_95](end_span). Esto abarca, de forma enunciativa pero no limitativa: recorridos gastronómicos, expediciones culturales, turismo de aventura, reservaciones en establecimientos de consumo, servicios de transporte, pases prioritarios VIP y experiencias de bienestar[span_96](start_span)[span_96](end_span). Cada ficha de producto o propuesta detallará sus inclusiones, exclusiones y particularidades operativas[span_97](start_span)[span_97](end_span)."
    },
    {
      heading: "3. Propuestas y Cotizaciones a la Medida[span_98](start_span)[span_98](end_span)",
      content: "Es el itinerario personalizado elaborado por el equipo de coordinación con base en los requerimientos manifestados por el viajero (fechas, número de participantes, intereses y presupuesto)[span_99](start_span)[span_99](end_span). Dicha propuesta no genera compromiso económico para el cliente sino hasta su aprobación expresa[span_100](start_span)[span_100](end_span). El pago de cotizaciones personalizadas se procesa en el sitio web ingresando la referencia o folio acordado con el asesor[span_101](start_span)[span_101](end_span)."
    },
    {
      heading: "4. Rol del Concierge[span_102](start_span)[span_102](end_span)",
      content: "Es el coordinador asignado por Explonix para la estructuración, logística y asistencia continua del viaje[span_103](start_span)[span_103](end_span). Funciona como punto de contacto directo antes y durante la estancia a través de canales digitales o telefónicos[span_104](start_span)[span_104](end_span). Su función esencial es la de intermediario operativo entre el usuario y los prestadores finales de servicios, mas no la de ejecutor directo de las actividades en destino[span_105](start_span)[span_105](end_span)."
    },
    {
      heading: "5. Lineamientos de Uso Permitido[span_106](start_span)[span_106](end_span)",
      content: "El portal explonix.com está reservado exclusivamente para personas físicas o morales con capacidad legal para contratar[span_107](start_span)[span_107](end_span). Queda estrictamente prohibido:\nUtilizar la plataforma con fines ilícitos, fraudulentos o vulneradores de derechos de terceros[span_108](start_span)[span_108](end_span).\nCopiar, extraer, alterar o distribuir el contenido, gráficos, diseño o textos del portal sin consentimiento expreso por escrito de NEC DIGITAL PUBLICITY S.A. DE C.V[span_109](start_span)[span_109](end_span).\nHacer uso no autorizado de los signos distintivos, marca o logotipos de Explonix[span_110](start_span)[span_110](end_span).\nIntentar vulnerar la seguridad de la plataforma o introducir código malicioso en sus servidores[span_111](start_span)[span_111](end_span)."
    },
    {
      heading: "6. Normativa General del Sitio y Jurisdicción[span_112](start_span)[span_112](end_span)",
      content: "El ingreso a explonix.com y el envío de consultas implican la conformidad del usuario con estos términos y con nuestra Política de Privacidad[span_113](start_span)[span_113](end_span). Explonix se reserva la facultad de denegar la prestación de servicios o cancelar solicitudes conforme a sus criterios de gestión[span_114](start_span)[span_114](end_span). Cualquier controversia legal derivada de la interpretación o cumplimiento de este instrumento se someterá a los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que por domicilio presente o futuro pudiere corresponder[span_115](start_span)[span_115](end_span)."
    },
    {
      heading: "7. Estructura de Precios[span_116](start_span)[span_116](end_span)",
      content: "Los precios exhibidos en explonix.com están tasados en moneda nacional (pesos mexicanos - MXN) y comprenden el Impuesto al Valor Agregado (IVA), salvo que expresamente se indique lo contrario en una cotización particular[span_117](start_span)[span_117](end_span). Si bien las tarifas están sujetas a variaciones por estacionalidad o ajustes de proveedores, una vez liquidada y confirmada la reserva, Explonix mantendrá la tarifa pactada[span_118](start_span)[span_118](end_span). En el evento imprevisto de un error tipográfico manifiesto en el sistema (montos evidentemente desproporcionados), se notificará al cliente para corregir el valor o proceder con la cancelación y devolución total del pago[span_119](start_span)[span_119](end_span)."
    },
    {
      heading: "8. Formas de Pago[span_120](start_span)[span_120](end_span)",
      content: "Se aceptan tarjetas de crédito y débito bancarias autorizadas, además de las opciones digitales habilitadas a través de pasarelas de pago certificadas dentro de explonix.com[span_121](start_span)[span_121](end_span). La disponibilidad de ciertos medios puede variar en función de la entidad emisora o el país de origen[span_122](start_span)[span_122](end_span). El cliente garantiza contar con la titularidad o la autorización legal correspondiente sobre el instrumento de pago utilizado[span_123](start_span)[span_123](end_span)."
    },
    {
      heading: "9. Régimen Fiscal (IVA) Y Facturación[span_124](start_span)[span_124](end_span)",
      content: "Las tarifas mostradas en el catálogo web incluyen el 16% del Impuesto al Valor Agregado, en estricto apego a la legislación fiscal vigente[span_125](start_span)[span_125](end_span). En itinerarios a la medida, el desglose correspondiente se especificará en la cotización enviada[span_126](start_span)[span_126](end_span). NEC DIGITAL PUBLICITY S.A. DE C.V. emitirá el Comprobante Fiscal Digital por Internet (CFDI) respectivo previa solicitud del cliente dentro del mes de la compra[span_127](start_span)[span_127](end_span)."
    },
    {
      heading: "10. Procesamiento Seguro de Transacciones[span_128](start_span)[span_128](end_span)",
      content: "Los cobros se procesan mediante módulos de pago externos con cifrado de datos de alta seguridad[span_129](start_span)[span_129](end_span). Explonix no recopila, consulta ni conserva información completa sobre las tarjetas bancarias de los usuarios[span_130](start_span)[span_130](end_span). La validación del pago es la condición necesaria para activar la confirmación del servicio; la falta de liquidación de los compromisos adquiridos libera a la empresa de cualquier obligación con terceros proveedores[span_131](start_span)[span_131](end_span)."
    },
    {
      heading: "11. Tiempos de Reserva Anticipada[span_132](start_span)[span_132](end_span)",
      content: "Con el objetivo de asegurar disponibilidad logística, Explonix solicita gestionar las reservaciones con al menos 34 días naturales de antelación al inicio del viaje[span_133](start_span)[span_133](end_span). Las solicitudes tramitadas en plazos inferiores quedarán sujetas a confirmación según el cupo existente, informando al cliente de forma transparente sobre las coberturas y limitaciones aplicables[span_134](start_span)[span_134](end_span)."
    },
    {
      heading: "12. Requerimientos y Especificaciones del Viajero[span_135](start_span)[span_135](end_span)",
      content: "El usuario es responsable de declarar oportunamente cualquier condición relevante para la ejecución del viaje (restricciones alimentarias, requerimientos de accesibilidad, alergias o capacidades físicas)[span_136](start_span)[span_136](end_span). Explonix comunicará estas precisiones a los prestadores finales; sin embargo, no responderá por omisiones o datos imprecisos proporcionados por el cliente[span_137](start_span)[span_137](end_span)."
    },
    {
      heading: "13. Confirmación Electrónica[span_138](start_span)[span_138](end_span)",
      content: "Al acreditarse el importe correspondiente, Explonix enviará un comprobante digital al correo electrónico proporcionado, indicando el número de orden o folio, resumen de servicios, fechas e importes[span_139](start_span)[span_139](end_span). Este documento constituye el respaldo formal de la operación para cualquier aclaración posterior[span_140](start_span)[span_140](end_span)."
    },
    {
      heading: "14. Derecho de Revocación[span_141](start_span)[span_141](end_span)",
      content: "En apego al artículo 56 de la Ley Federal de Protección al Consumidor, el cliente podrá revocar su decisión de compra dentro de los 5 días hábiles posteriores a la transacción realizada en medios digitales, siempre que la experiencia no se haya ejecutado o iniciado[span_142](start_span)[span_142](end_span). Para hacer efectivo este derecho, se deberá notificar por escrito a contacto@explonix.com dentro del plazo legal[span_143](start_span)[span_143](end_span)."
    },
    {
      heading: "15. Suspensión y Detección de Infracciones[span_144](start_span)[span_144](end_span)",
      content: "Explonix ostenta la facultad de cancelar el acceso al portal o suspender servicios en desarrollo ante la detección de actos fraudulentos, violaciones a estos términos, uso indebido de los canales de pago o conductas que vulneren la seguridad de la empresa o de terceros[span_145](start_span)[span_145](end_span). En tales supuestos, no procederá reembolso cuando la falta sea atribuible al usuario[span_146](start_span)[span_146](end_span)."
    },
    {
      heading: "16. Cancelaciones y Reembolsos[span_147](start_span)[span_147](end_span)",
      content: "La anulación voluntaria de una reserva confirmada se regirá de manera integral por las condiciones, ventanas de tiempo y deducciones fijadas en la Política de Devoluciones y Reembolsos de Explonix, la cual forma parte vinculante de este contrato[span_148](start_span)[span_148](end_span)."
    },
    {
      heading: "17. Relación con Proveedores Finales[span_149](start_span)[span_149](end_span)",
      content: "Los servicios que integran las experiencias son ejecutados de forma independiente por terceros (restaurantes, transportistas, guías locales, centros recreativos, entre otros)[span_150](start_span)[span_150](end_span). Explonix actúa como intermediario organizador y gestor de concierge; por ende, aunque selecciona minuciosamente a sus aliados, no ejerce control directo sobre sus decisiones operativas internas, políticas de acceso o contingencias en sus instalaciones[span_151](start_span)[span_151](end_span). Si un proveedor modifica las condiciones contratadas, Explonix buscará alternativas de nivel equivalente para el cliente[span_152](start_span)[span_152](end_span)."
    },
    {
      heading: "18. Deslinde de Responsabilidad[span_153](start_span)[span_153](end_span)",
      content: "La responsabilidad material de la prestación directa del servicio (seguridad en trayectos, puntualidad, condiciones de los establecimientos) recae en los proveedores ejecutores[span_154](start_span)[span_154](end_span). En la medida permitida por el ordenamiento legal mexicano, Explonix no asumirá responsabilidad por daños indirectos, pérdidas de oportunidad o lucros cesantes[span_155](start_span)[span_155](end_span). En los casos en que se determine responsabilidad directa imputable a la empresa, el resarcimiento máximo no excederá el monto efectivamente abonado por el usuario para la experiencia en cuestión, respetando los derechos irrenunciables previstos por la LFPC[span_156](start_span)[span_156](end_span)."
    },
    {
      heading: "19. Derechos de Propiedad Intelectual[span_157](start_span)[span_157](end_span)",
      content: "Todo el material albergado en explonix.com (textos, gráficos, arquitectura de software, marcas, logotipos y diseños) es titularidad de NEC DIGITAL PUBLICITY S.A. DE C.V. o cuenta con las licencias correspondientes[span_158](start_span)[span_158](end_span). Queda prohibida su reproducción, uso comercial o explotación sin la autorización previa y por escrito de la sociedad[span_159](start_span)[span_159](end_span)."
    },
    {
      heading: "20. Eventos de Fuerza Mayor o Caso Fortuito[span_160](start_span)[span_160](end_span)",
      content: "Ante imprevistos fuera del control operativo de la empresa (fenómenos meteorológicos severos, disposiciones de autoridad, cierres de emergencia o problemáticas de seguridad en destino), Explonix priorizará la reprogramación de la experiencia[span_161](start_span)[span_161](end_span). De no ser posible o no ser aceptada por el cliente, se reembolsará la suma pagada descontando los costos irrecuperables pagados a terceros, entregando el respaldo documental correspondiente[span_162](start_span)[span_162](end_span)."
    },
    {
      heading: "21. Disposiciones Generales[span_163](start_span)[span_163](end_span)",
      content: "Este acuerdo representa el entendimiento total entre NEC DIGITAL PUBLICITY S.A. DE C.V. y el usuario, sustituyendo cualquier negociación o comunicación previa[span_164](start_span)[span_164](end_span). Si alguna cláusula fuere declarada nula o ineficaz por un tribunal, las disposiciones restantes conservarán plena validez legal[span_165](start_span)[span_165](end_span). La tolerancia u omisión de Explonix en el ejercicio de algún derecho no constituirá renuncia definitiva al mismo[span_166](start_span)[span_166](end_span)."
    }
  ];

  return <LegalPage title="Términos y Condiciones de Uso y Contratación[span_167](start_span)[span_167](end_span)" sections={sections} />;
}
