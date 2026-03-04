import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Validar que las variables de entorno están configuradas
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('EMAIL_USER o EMAIL_PASS no están configuradas en las variables de entorno')
}

interface ContactRequest {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json()

    // Validar campos requeridos
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Por favor ingresa un correo electrónico válido' },
        { status: 400 }
      )
    }

    // Validar longitud del mensaje
    if (body.message.length < 10) {
      return NextResponse.json(
        { message: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      )
    }

    // Crear transporte de nodemailer
    // Si usas Gmail, necesitas una contraseña de aplicación (no la contraseña normal)
    // Ver: https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email a ti (propietaria)
    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto - ${body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #E11D48;">Nuevo Mensaje de Contacto</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${escapeHtml(body.name)}</p>
            <p><strong>Correo:</strong> ${escapeHtml(body.email)}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="background-color: white; padding: 15px; border-left: 4px solid #E11D48; border-radius: 3px;">
              ${escapeHtml(body.message).replace(/\n/g, '<br />')}
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Este correo fue enviado desde el formulario de contacto de tu portfolio.
          </p>
        </div>
      `,
    }

    // Email de confirmación al usuario
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: 'Confirmación: Mensaje recibido',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #E11D48;">¡Mensaje Recibido!</h2>
          
          <p>Hola ${escapeHtml(body.name)},</p>
          
          <p>Gracias por tu mensaje. Lo he recibido correctamente y me pondré en contacto contigo muy pronto.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Tu mensaje:</strong></p>
            <p style="background-color: white; padding: 15px; border-left: 4px solid #E11D48; border-radius: 3px;">
              ${escapeHtml(body.message).replace(/\n/g, '<br />')}
            </p>
          </div>
          
          <p style="margin-top: 30px;">
            Saludos,<br />
            <strong>Martina Abigail Canteros</strong>
          </p>
        </div>
      `,
    }

    // Enviar ambos correos
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ])

    return NextResponse.json(
      {
        message:
          'Mensaje enviado exitosamente. ¡Te responderé pronto!',
        success: true,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar el correo:', error)

    return NextResponse.json(
      {
        message: 'Error al enviar el mensaje. Por favor intenta más tarde.',
        error: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    )
  }
}

 // Función auxiliar para escapar caracteres HTML
 function escapeHtml(text: string): string {
   return String(text)
     .replace(/&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;')
     .replace(/"/g, '&quot;')
     .replace(/'/g, '&#039;')
 }
