import Stripe from 'stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nombre, monto, email, id } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: { name: nombre },
            unit_amount: parseInt(monto) * 100, // en centavos
          },
          quantity: 1,
        },
      ],
      metadata: { inversion_id: id },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/pago-exitoso`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/inversiones/${id}`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Error creando sesión de pago' });
  }
}
