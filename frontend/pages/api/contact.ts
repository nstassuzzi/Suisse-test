import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    console.log("📤 Attempting to send email via Brevo...");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Suisse Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`,
    });

    console.log("✅ Email sent: ", info.messageId);
    return res.status(200).json({ message: 'Email sent', messageId: info.messageId });
  } catch (error: any) {
    console.error("❌ Email sending failed:", error.message);
    return res.status(500).json({
      message: 'Email failed',
      error: error.message,
    });
  }
}