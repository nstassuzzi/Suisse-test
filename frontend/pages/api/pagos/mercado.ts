const mercadopago = require('mercadopago');
import type { NextApiRequest, NextApiResponse } from 'next';

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre, monto, email, id } = req.body;

  try {
    const preference = await mercadopago.preferences.create({
      items: [
        {
          title: nombre,
          quantity: 1,
          unit_price: parseFloat(monto),
          currency_id: 'MXN',
        },
      ],
      metadata: { inversion_id: id },
      payer: { email },
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/pago-exitoso`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/inversiones/${id}`,
      },
      auto_return: 'approved',
    });

    res.status(200).json({ url: preference.body.init_point });
  } catch (error) {
    console.error('Mercado Pago error:', error);
    res.status(500).json({ error: 'Error generando link de pago' });
  }
}
