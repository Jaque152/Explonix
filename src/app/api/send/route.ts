import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, customerName, email, phone, message } = body;

    if (type !== 'CONTACT') {
      return NextResponse.json(
        { error: 'Tipo de correo no soportado' },
        { status: 400 }
      );
    }

    const primaryColor = '#c2410c';

    const subjectClient = '[Solicitud Recibida] Gracias por tu mensaje - Zenith México';
    const greeting = `¡Hola ${customerName}!`;
    const bodyText =
      'Recibimos tu mensaje exitosamente. Un asesor experto de nuestro equipo se pondrá en contacto contigo en breve para ayudarte con tu solicitud.';
    const detailsLabel = 'Detalles de tu solicitud:';
    const contactLabel = 'Contacto:';
    const messageLabel = 'Tu Mensaje:';
    const exploreText =
      'Mientras tanto, te invitamos a seguir explorando nuestras aventuras.';
    const ctaText = 'Ver experiencias';
    const ctaLink = 'https://zenithmex.com/es/#experiencias';

    const htmlClient = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto;">
        <div style="background: linear-gradient(135deg, #c2410c 0%, #ea580c 100%); padding: 20px; text-align: center; border-radius: 10px 10px 0 0; color: #fff; font-weight: bold;">
          Zenith México
        </div>
        <div style="padding: 30px; border: 1px solid #eee; border-top: 0; border-radius: 0 0 10px 10px;">
          <h2 style="margin:0 0 15px; color: #1c1917;">${greeting}</h2>
          <p>${bodyText}</p>

          <div style="background: #fafaf9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid ${primaryColor};">
            <p style="margin: 0 0 15px; color: ${primaryColor}; font-weight: bold; font-size: 14px; text-transform: uppercase;">
              ${detailsLabel}
            </p>
            <p style="margin: 5px 0; font-size: 14px; color: #444;">
              <strong>${contactLabel}</strong> ${email} / ${phone}
            </p>
          </div>

          <div style="margin: 25px 0; padding: 15px; border: 1px solid #eee; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #78716c;">
              ${messageLabel}
            </p>
            <p style="margin: 10px 0 0; font-size: 14px; font-style: italic; color: #444;">
              ${message || 'Sin mensaje adicional.'}
            </p>
          </div>

          <p style="color: #666; margin-bottom: 25px;">${exploreText}</p>
          <a
            href="${ctaLink}"
            style="display: block; width: 100%; text-align: center; background: ${primaryColor}; color: #fff; padding: 15px; border-radius: 30px; text-decoration: none; font-weight: bold;"
          >
            ${ctaText}
          </a>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Zenith México <cotizaciones@zenithmex.com>',
      to: [email],
      subject: subjectClient,
      html: htmlClient,
    });

    if (error) {
      console.error('Error de Resend al enviar al cliente:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    const subjectInternal = `[NUEVO CONTACTO] - ${customerName}`;

    const htmlInternal = `
      <div style="font-family: sans-serif; color: #333;">
        <h2 style="color: #c2410c;">Nueva Solicitud de Contacto Web</h2>
        <p>Un usuario ha llenado el formulario de contacto en la página principal.</p>
        <hr/>
        <p><strong>Cliente:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <hr/>
        <p><strong>Mensaje del cliente:</strong></p>
        <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
          ${message || 'Sin mensaje.'}
        </p>
        <hr/>
        <p><em>Tip: Responde a este cliente antes de 24 horas para brindar un mejor servicio.</em></p>
      </div>
    `;

    const internalMail = await resend.emails.send({
      from: 'Sistema Zenith México <cotizaciones@zenithmex.com>',
      to: ['contacto@zenithmex.com'],
      subject: subjectInternal,
      html: htmlInternal,
    });

    if (internalMail.error) {
      console.error('Error al enviar correo interno:', internalMail.error);
    }

    return NextResponse.json({
      ok: true,
      data,
    });
  } catch (error) {
    console.error('Error crítico en API Send:', error);
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    );
  }
}