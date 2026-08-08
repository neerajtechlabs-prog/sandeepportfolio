import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    })
  }

  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      projectType,
      message,
    } = req.body

    if (!firstName || !lastName || !email || !mobile || !message) {
      return res.status(400).json({
        message: 'Please fill all required fields',
      })
    }

    const { data, error } = await resend.emails.send({
      from: 'SKP Group Website <onboarding@resend.dev>',
      to: ['skpgroup.official@gmail.com', 'neeshubiet@gmail.com'],
      replyTo: email,
      subject: `New Project Enquiry - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

          <h2 style="color: #b8860b;">
            New Enquiry from SKP Group Website
          </h2>

          <hr />

          <p>
            <strong>First Name:</strong>
            ${firstName}
          </p>

          <p>
            <strong>Last Name:</strong>
            ${lastName}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Mobile:</strong>
            ${mobile}
          </p>

          <p>
            <strong>Project Type:</strong>
            ${projectType || 'Not provided'}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

          <hr />

          <p style="color:#777;">
            This enquiry was submitted through the SKP Group website.
          </p>

        </div>
      `,
    })

    if (error) {
      console.error(error)

      return res.status(500).json({
        message: 'Failed to send email',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully',
      data,
    })
  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: 'Internal server error',
    })
  }
}
