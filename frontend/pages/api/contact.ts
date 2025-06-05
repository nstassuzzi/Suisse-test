import type { NextApiRequest, NextApiResponse } from 'next';
import { sendContactEmail } from '@/lib/emailService';
import { saveContactMessage } from '@/lib/dbService';

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
    ]);

    return res.status(200).json({ message: 'Message sent', messageId: emailInfo.messageId });
  } catch (error: any) {
    console.error('❌ Error in handler:', error.message);
    return res.status(500).json({ message: 'Processing failed', error: error.message });
  }
}
