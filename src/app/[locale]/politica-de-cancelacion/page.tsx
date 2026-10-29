import { LegalPage } from "@/components/LegalPage";

export default function PoliticaDeDevolucionesPage() {
  const sections = [
    {
      heading: "Lineamientos Generales de Cancelación",
      content: "Debido a que las experiencias operadas por Explonix dependen de cupos limitados y contrataciones anticipadas con terceros, la cancelación de una reserva implica pérdidas operativas que imposibilitan la reasignación del lugar. Por este motivo, las devoluciones se determinan según la antelación con la que se notifique la cancelación."
    },
    {
      heading: "1. Cancelación con Antelación Mayor a 7 Días Naturales",
      content: "Cuando la solicitud de cancelación se efectúe con más de 7 días naturales de anticipación a la fecha programada de inicio:\nExperiencias de catálogo: Se reembolsará hasta el 90% del costo total del servicio. El 10% no reembolsable cubre gastos administrativos, operativos y comisiones de la pasarela de pagos.\nItinerarios personalizados: Corresponderá una devolución de hasta el 80%, dado que la fase de diseño, logística previa y apartado de proveedores ya genera un costo no recuperable para la empresa.\nSe respeta el derecho de revocación dentro de los 5 días hábiles posteriores a la contratación por medios electrónicos (conforme a la Ley Federal de Protección al Consumidor), siempre que el servicio no haya comenzado ni aplique una excepción legal."
    },
    {
      heading: "2. Cancelaciones en Periodo Intermedio (Entre 3 y 7 Días Naturales)",
      content: "Si la notificación se realiza en este rango de tiempo antes del inicio de la actividad:\nExperiencias de catálogo: Aplica un reembolso de hasta el 50% del monto abonado.\nItinerarios personalizados: Se reembolsará hasta el 30%. Adicionalmente, se deducirán las penalizaciones estipuladas por los proveedores finales que carezcan de política de devolución. Explonix proporcionará al cliente el desglose por escrito de dichos cargos previa aplicación de la liquidación."
    },
    {
      heading: "3. Cancelaciones con Menos de 3 Días Naturales (48 Horas o Menos)",
      content: "Experiencias de catálogo: El servicio se considerará no reembolsable, en virtud de que las reservaciones y pagos a proveedores locales quedan formalmente ejecutados e irrevocables dentro de este periodo.\nItinerarios personalizados: Por regla general no aplicará reembolso. Explonix analizará el expediente de manera individual, justificando por escrito los gastos comprometidos, y tramitará la devolución del saldo remanente únicamente si existiera algún remanente recuperable."
    },
    {
      heading: "4. Ausencias (No Show), Cancelaciones de Último Momento y Abandono",
      content: "No habrá lugar a devoluciones ni reembolsos bajo ninguna circunstancia cuando:\nLa cancelación se presente con menos de 72 horas de anticipación.\nEl cliente no se presente a la hora acordada, impidiendo el desarrollo de la actividad (no show).\nEl usuario decida retirarse o suspender de forma voluntaria la experiencia una vez iniciada.\nExcepción por Emergencia Médica: En casos extraordinarios respaldados mediante constancia médica formal, Explonix no emitirá reembolso, pero evaluará la opción de reprogramar la experiencia sin penalizaciones administrativas, sujeto estrictamente a la disponibilidad y apertura de los proveedores involucrados."
    },
    {
      heading: "5. Cancelaciones Imputables a Explonix o Caso Fortuito",
      content: "Causas atribuibles a la empresa: Si Explonix se ve obligada a cancelar la experiencia por causas internas operativas, el usuario recibirá el 100% de la devolución de su dinero en un lapso no mayor a 15 días hábiles.\nFuerza mayor o causas meteorológicas: Ante eventualidades ajenas al control operativo (alertas climáticas, cierres oficiales de áreas turísticas, contingencias de seguridad), se ofrecerá como primera opción el cambio de fecha. De no ser factible para el cliente, se reembolsará la suma pagada deduciendo únicamente los costos irrecuperables previamente pagados a terceros, con su debido comprobante."
    },
    {
      heading: "6. Modificación y Reprogramación de Fechas",
      content: "Solicitudes con más de 7 días naturales de anticipación: La reprogramación se efectuará sin costos adicionales por gestión de Explonix, sujeta a disponibilidad de fechas.\nSolicitudes fuera de ese plazo: El cliente deberá asumir los ajustadores tarifarios o penalizaciones por cambio que determine el operador o proveedor del servicio."
    },
    {
      heading: "7. Procedimiento para Solicitud de Reembolso o Cambio",
      content: "Para tramitar cualquier aclaración, modificación o reembolso, el titular debe redactar una solicitud a contacto@explonix.com o comunicarse a través de atención telefónica al +52 1 55 5523 7379, adjuntando la siguiente información:\nFolio o confirmación de la reserva.\nNombre completo del titular.\nFecha del servicio contratado.\nComprobante o monto pagado.\nExplicación detallada del motivo de la solicitud.\nConfirmaremos la recepción del mensaje en un lapso máximo de 48 horas hábiles y emitiremos la resolución formal en un periodo de hasta 7 días hábiles. Una vez autorizada la devolución, el depósito se reflejará en un plazo máximo de 15 días hábiles a través del mismo método de pago utilizado en la transacción original."
    }
  ];

  return <LegalPage title="Política de Devoluciones y Reembolsos" sections={sections} />;
}
