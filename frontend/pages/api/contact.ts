// File: /pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { sendContactEmail } from '@/lib/emailService';
import { saveContactMessage } from '@/lib/dbService';
import { sendWhatsAppMessage } from '@/lib/whatsappService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const [emailInfo] = await Promise.all([
      sendContactEmail({ name, email, message }),
      saveContactMessage({ name, email, message, source_page: req.headers.referer || null }),
      sendWhatsAppMessage({
        to: process.env.WHATSAPP_TO_NUMBER,
        template: 'hello_world',
      }),
    ]);

    return res.status(200).json({ message: 'Message sent', messageId: emailInfo.messageId });
  } catch (error: any) {
    console.error('❌ Error in contact handler:', error.message);
    return res.status(500).json({ message: 'Processing failed', error: error.message });
  }
}