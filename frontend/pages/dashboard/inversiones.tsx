// pages/dashboard/inversiones.tsx
import MainLayout from "@/components/MainLayout";
import { withAuth } from "@/lib/withAuth";

function Inversiones({ user, role }) {
  const oportunidades = [
    {
      id: "tulum-vista-mar",
      nombre: "Tulum - Vista al Mar",
      ubicacion: "Tulum, Quintana Roo",
      rentabilidad: "12% anual",
      montoMinimo: "$100,000 MXN",
      imagen: "/images/tulum1.jpg",
    },
    {
      id: "aldea-zama-luxury",
      nombre: "Aldea Zama - Luxury Loft",
      ubicacion: "Tulum, Aldea Zama",
      rentabilidad: "10% anual",
      montoMinimo: "$80,000 MXN",
      imagen: "/images/tulum2.jpg",
    },
  ];

  return (
    <MainLayout role={role}>
      <h1 className="text-3xl font-bold mb-8 text-navy">Oportunidades de Inversión</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {oportunidades.map((op) => (
          <div key={op.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={op.imagen} alt={op.nombre} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-2">
              <h2 className="text-xl font-semibold text-navy">{op.nombre}</h2>
              <p className="text-gray-600">{op.ubicacion}</p>
              <p className="text-sm text-gray-500">Rentabilidad: {op.rentabilidad}</p>
              <p className="text-sm text-gray-500">Desde: {op.montoMinimo}</p>
              <a href={`/dashboard/inversiones/${op.id}`}>
                <button className="mt-4 bg-navy text-white px-4 py-2 rounded hover:bg-navy-800 transition">
                  Ver más
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default withAuth(Inversiones);
