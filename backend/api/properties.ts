import type { NextApiRequest, NextApiResponse } from 'next';

const properties = [
  {
    title: "Penthouse en Aldea Zama",
    image: "/img/aldea.jpg",
    price: "$220,000 USD",
    location: "Tulum, Quintana Roo"
  },
  {
    title: "Loft minimalista en Región 15",
    image: "/img/selva.jpg",
    price: "$175,000 USD",
    location: "Tulum, Región 15"
  },
  {
    title: "Estudio cerca del mar",
    image: "/img/playa.jpg",
    price: "$145,000 USD",
    location: "Tulum Centro"
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(properties);
}