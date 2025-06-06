import { useRouter } from "next/router";
import Link from "next/link";

const inversiones = [
  {
    id: "tulum-vista-mar",
    nombre: "Tulum - Vista al Mar",
    ubicacion: "Tulum, Quintana Roo",
    rentabilidad: "12% anual",
    montoMinimo: "$100,000 MXN",
    imagen: "/images/tulum1.jpg",
    descripcion:
      "Departamento exclusivo con vista al mar Caribe. Proyecto premium en la zona hotelera de Tulum, con alta plusvalía proyectada.",
  },
  {
    id: "aldea-zama-luxury",
    nombre: "Aldea Zama - Luxury Loft",
    ubicacion: "Tulum, Aldea Zama",
    rentabilidad: "10% anual",
    montoMinimo: "$80,000 MXN",
    imagen: "/images/tulum2.jpg",
    descripcion:
      "Inversión en desarrollo boutique de lujo en Aldea Zama, con unidades operativas para renta vacacional.",
  },
];

export default function DetalleInversion() {
  const router = useRouter();
  const { slug } = router.query;

  const inversion = inversiones.find((inv) => inv.id === slug);

  if (!inversion) return <p className="p-6">Inversión no encontrada.</p>;

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <img
          src={inversion.imagen}
          alt={inversion.nombre}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-navy mb-2">{inversion.nombre}</h1>
        <p className="text-gray-600 mb-4">{inversion.ubicacion}</p>
        <p className="text-gray-700 mb-6 leading-relaxed">{inversion.descripcion}</p>
        <div className="text-sm text-gray-500 space-y-1 mb-8">
          <p><strong>Rentabilidad:</strong> {inversion.rentabilidad}</p>
          <p><strong>Monto mínimo de inversión:</strong> {inversion.montoMinimo}</p>
        </div>

        <Link href={`/dashboard/pago/${inversion.id}`}>
          <button className="bg-navy text-white px-6 py-3 rounded-lg text-lg hover:bg-navy-800 transition">
            Avanzar al pago
          </button>
        </Link>
      </div>
    </div>
  );
}
