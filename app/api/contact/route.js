import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Send email to Hillanic team
    await resend.emails.send({
      from: 'Hillanic Website <noreply@hillanichealthcare.com>', // ← Must be a verified Resend domain
      to: [process.env.CONTACT_EMAIL],                   // ← The inbox that receives enquiries
      replyTo: email,
      subject: `New Enquiry from ${name}${service ? ` — ${service}` : ''}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2C2C2C;">
          <div style="background: #1A4A6A; padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #EAF5F2; font-size: 22px; margin: 0 0 4px;">New Website Enquiry</h1>
            <p style="color: rgba(250,247,242,0.6); font-size: 13px; margin: 0;">Hillanic Health Care Ltd — Contact Form</p>
          </div>

          <div style="background: #EAF5F2; padding: 32px 40px; border: 1px solid #D5EDE8; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D5EDE8; width: 140px;">
                  <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #2D9E8E;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D5EDE8; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D5EDE8;">
                  <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #2D9E8E;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D5EDE8; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #1A4A6A;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D5EDE8;">
                  <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #2D9E8E;">Phone</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D5EDE8; font-size: 15px;">${phone}</td>
              </tr>` : ''}
              ${service ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #D5EDE8;">
                  <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #2D9E8E;">Service</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #D5EDE8; font-size: 15px;">${service}</td>
              </tr>` : ''}
            </table>

            <div style="margin-top: 24px;">
              <strong style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #2D9E8E;">Message</strong>
              <div style="margin-top: 10px; background: white; border: 1px solid #D5EDE8; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>

          <div style="background: #2C2C2C; padding: 20px 40px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: rgba(250,247,242,0.5); font-size: 12px; margin: 0;">
              This message was sent from the Hillanic Health Care website contact form.
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation to the sender
    await resend.emails.send({
      from: 'Hillanic Health Care <noreply@hillanichealthcare.com>',
      to: [email],
      subject: 'We received your message — Hillanic Health Care',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2C2C2C;">
          <div style="background: #1A4A6A; padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #EAF5F2; font-size: 22px; margin: 0 0 4px;">Thank you, ${name}.</h1>
            <p style="color: rgba(250,247,242,0.6); font-size: 13px; margin: 0;">Hillanic Health Care Ltd</p>
          </div>

          <div style="background: #EAF5F2; padding: 32px 40px; border: 1px solid #D5EDE8; border-top: none;">
            <p style="font-size: 15px; line-height: 1.8; color: #2C2C2C;">
              We have received your message and our team will get back to you within <strong>24 hours</strong>.
            </p>
            <p style="font-size: 15px; line-height: 1.8; color: #2C2C2C;">
              If your matter is urgent, please reach us directly via WhatsApp for a faster response:
            </p>
            <div style="text-align: center; margin: 24px 0;">
              <a href="https://wa.me/254725475443" style="display: inline-block; background: #25D366; color: white; font-size: 15px; font-weight: bold; padding: 14px 32px; border-radius: 50px; text-decoration: none;">
                Chat on WhatsApp
              </a>
            </div>
            <p style="font-size: 13px; color: #5A6B7A; line-height: 1.7;">
              Your enquiry is strictly confidential. We look forward to supporting you.
            </p>
          </div>

          <div style="background: #2C2C2C; padding: 20px 40px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: rgba(250,247,242,0.5); font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Hillanic Health Care Ltd · Nairobi, Kenya
            </p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Failed to send message. Please try again or contact us directly via WhatsApp.' },
      { status: 500 }
    )
  }
}