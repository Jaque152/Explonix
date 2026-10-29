import { LegalPage } from "@/components/LegalPage";

export default function PoliticaDeDevolucionesPage() {
  const sections = [
    {
      heading: "Lineamientos Generales de Cancelación[span_0](start_span)[span_0](end_span)",
      content: "Debido a que las experiencias operadas por Explonix dependen de cupos limitados y contrataciones anticipadas con terceros, la cancelación de una reserva implica pérdidas operativas que imposibilitan la reasignación del lugar[span_1](start_span)[span_1](end_span). Por este motivo, las devoluciones se determinan según la antelación con la que se notifique la cancelación[span_2](start_span)[span_2](end_span)."
    },
    {
      heading: "1. Cancelación con Antelación Mayor a 7 Días Naturales[span_3](start_span)[span_3](end_span)",
      content: "Cuando la solicitud de cancelación se efectúe con más de 7 días naturales de anticipación a la fecha programada de inicio[span_4](start_span)[span_4](end_span):\nExperiencias de catálogo: Se reembolsará hasta el 90% del costo total del servicio[span_5](start_span)[span_5](end_span). El 10% no reembolsable cubre gastos administrativos, operativos y comisiones de la pasarela de pagos[span_6](start_span)[span_6](end_span).\nItinerarios personalizados: Corresponderá una devolución de hasta el 80%, dado que la fase de diseño, logística previa y apartado de proveedores ya genera un costo no recuperable para la empresa[span_7](start_span)[span_7](end_span).\nSe respeta el derecho de revocación dentro de los 5 días hábiles posteriores a la contratación por medios electrónicos (conforme a la Ley Federal de Protección al Consumidor), siempre que el servicio no haya comenzado ni aplique una excepción legal[span_8](start_span)[span_8](end_span)."
    },
    {
      heading: "2. Cancelaciones en Periodo Intermedio (Entre 3 y 7 Días Naturales)[span_9](start_span)[span_9](end_span)",
      content: "Si la notificación se realiza en este rango de tiempo antes del inicio de la actividad[span_10](start_span)[span_10](end_span):\nExperiencias de catálogo: Aplica un reembolso de hasta el 50% del monto abonado[span_11](start_span)[span_11](end_span).\nItinerarios personalizados: Se reembolsará hasta el 30%[span_12](start_span)[span_12](end_span). Adicionalmente, se deducirán las penalizaciones estipuladas por los proveedores finales que carezcan de política de devolución[span_13](start_span)[span_13](end_span). Explonix proporcionará al cliente el desglose por escrito de dichos cargos previa aplicación de la liquidación[span_14](start_span)[span_14](end_span)."
    },
    {
      heading: "3. Cancelaciones con Menos de 3 Días Naturales (48 Horas o Menos)[span_15](start_span)[span_15](end_span)",
      content: "Experiencias de catálogo: El servicio se considerará no reembolsable, en virtud de que las reservaciones y pagos a proveedores locales quedan formalmente ejecutados e irrevocables dentro de este periodo[span_16](start_span)[span_16](end_span).\nItinerarios personalizados: Por regla general no aplicará reembolso[span_17](start_span)[span_17](end_span). Explonix analizará el expediente de manera individual, justificando por escrito los gastos comprometidos, y tramitará la devolución del saldo remanente únicamente si existiera algún remanente recuperable[span_18](start_span)[span_18](end_span)."
    },
    {
      heading: "4. Ausencias (No Show), Cancelaciones de Último Momento y Abandono[span_19](start_span)[span_19](end_span)",
      content: "No habrá lugar a devoluciones ni reembolsos bajo ninguna circunstancia cuando[span_20](start_span)[span_20](end_span):\nLa cancelación se presente con menos de 72 horas de anticipación[span_21](start_span)[span_21](end_span).\nEl cliente no se presente a la hora acordada, impidiendo el desarrollo de la actividad (no show)[span_22](start_span)[span_22](end_span).\nEl usuario decida retirarse o suspender de forma voluntaria la experiencia una vez iniciada[span_23](start_span)[span_23](end_span).\nExcepción por Emergencia Médica: En casos extraordinarios respaldados mediante constancia médica formal, Explonix no emitirá reembolso, pero evaluará la opción de reprogramar la experiencia sin penalizaciones administrativas, sujeto estrictamente a la disponibilidad y apertura de los proveedores involucrados[span_24](start_span)[span_24](end_span)."
    },
    {
      heading: "5. Cancelaciones Imputables a Explonix o Caso Fortuito[span_25](start_span)[span_25](end_span)",
      content: "Causas atribuibles a la empresa: Si Explonix se ve obligada a cancelar la experiencia por causas internas operativas, el usuario recibirá el 100% de la devolución de su dinero en un lapso no mayor a 15 días hábiles[span_26](start_span)[span_26](end_span).\nFuerza mayor o causas meteorológicas: Ante eventualidades ajenas al control operativo (alertas climáticas, cierres oficiales de áreas turísticas, contingencias de seguridad), se ofrecerá como primera opción el cambio de fecha[span_27](start_span)[span_27](end_span). De no ser factible para el cliente, se reembolsará la suma pagada deduciendo únicamente los costos irrecuperables previamente pagados a terceros, con su debido comprobante[span_28](start_span)[span_28](end_span)."
    },
    {
      heading: "6. Modificación y Reprogramación de Fechas[span_29](start_span)[span_29](end_span)",
      content: "Solicitudes con más de 7 días naturales de anticipación: La reprogramación se efectuará sin costos adicionales por gestión de Explonix, sujeta a disponibilidad de fechas[span_30](start_span)[span_30](end_span).\nSolicitudes fuera de ese plazo: El cliente deberá asumir los ajustadores tarifarios o penalizaciones por cambio que determine el operador o proveedor del servicio[span_31](start_span)[span_31](end_span)."
    },
    {
      heading: "7. Procedimiento para Solicitud de Reembolso o Cambio[span_32](start_span)[span_32](end_span)",
      content: "Para tramitar cualquier aclaración, modificación o reembolso, el titular debe redactar una solicitud a contacto@explonix.com o comunicarse a través de atención telefónica al +52 1 55 5523 7379, adjuntando la siguiente información[span_33](start_span)[span_33](end_span):\nFolio o confirmación de la reserva[span_34](start_span)[span_34](end_span).\nNombre completo del titular[span_35](start_span)[span_35](end_span).\nFecha del servicio contratado[span_36](start_span)[span_36](end_span).\nComprobante o monto pagado[span_37](start_span)[span_37](end_span).\nExplicación detallada del motivo de la solicitud[span_38](start_span)[span_38](end_span).\nConfirmaremos la recepción del mensaje en un lapso máximo de 48 horas hábiles y emitiremos la resolución formal en un periodo de hasta 7 días hábiles[span_39](start_span)[span_39](end_span). Una vez autorizada la devolución, el depósito se reflejará en un plazo máximo de 15 días hábiles a través del mismo método de pago utilizado en la transacción original[span_40](start_span)[span_40](end_span)."
    }
  ];

  return <LegalPage title="Política de Devoluciones y Reembolsos[span_41](start_span)[span_41](end_span)" sections={sections} />;
}
