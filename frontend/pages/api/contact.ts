import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  // Save contact form to Supabase

  const { error: dbError } = await supabase
    .from('contact_messages')
    .insert([{ name, email, message }]);
  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return res.status(500).json({ message: 'Database error. Try again later.' });
  }
  
try {
  console.log("📤 Connecting to SMTP transporter...");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log("✅ Transporter ready. Sending email...");
  console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
  console.log("SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY);

  const info = await transporter.sendMail({
    from: `"Suisse Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: `New contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong><br>${email}</p><p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`,
  });

  console.log("✅ Email SENT. Message ID:", info.messageId);
  console.log("📨 Full info:", info);

  return res.status(200).json({ message: "Message sent", messageId: info.messageId });
} catch (error: any) {
  console.error("❌ Email sending failed:", error.message);
  return res.status(500).json({ message: 'Email failed', error: error.message });
}
}