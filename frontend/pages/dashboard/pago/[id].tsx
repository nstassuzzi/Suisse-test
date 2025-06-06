// pages/dashboard/pago/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "@/components/MainLayout";
import { withAuth } from "@/lib/withAuth";

function PagoInversion({ user, role }) {
  const router = useRouter();
  const { id } = router.query;
  const [inversion, setInversion] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const inversiones = [
    {
      id: "tulum-vista-mar",
      nombre: "Tulum - Vista al Mar",
      monto: "$100000",
      metodo: "mercadopago",
    },
    {
      id: "aldea-zama-luxury",
      nombre: "Aldea Zama - Luxury Loft",
      monto: "$80000",
      metodo: "mercadopago",
    },
  ];

  useEffect(() => {
    if (id) {
      const found = inversiones.find((inv) => inv.id === id);
      setInversion(found);
    }
  }, [id]);

  const handlePago = async () => {
    if (!inversion) return;
    setLoading(true);

    try {
      const response = await fetch("/api/pagos/mercado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: inversion.nombre,
          monto: inversion.monto.replace(/[^0-9.]/g, ""),
          email: user.email,
          id: inversion.id,
        }),
      });

      const data = await response.json();
      if (data.url) window.location.href = data.url;
      else alert("No se pudo generar el link de pago.");
    } catch (err) {
      console.error(err);
      alert("Error al procesar el pago.");
    } finally {
      setLoading(false);
    }
  };

  if (!inversion) return <p className="p-6">Inversión no encontrada.</p>;

  return (
    <MainLayout role={role}>
      <h1 className="text-3xl font-bold text-navy mb-4">Finalizar inversión</h1>
      <p className="text-lg mb-2">{inversion.nombre}</p>
      <p className="text-gray-600 mb-6">Monto: {inversion.monto}</p>
      <button
        onClick={handlePago}
        disabled={loading}
        className="bg-navy text-white px-6 py-3 rounded-lg hover:bg-navy-800 transition"
      >
        {loading ? "Redirigiendo..." : "Pagar con Mercado Pago"}
      </button>
    </MainLayout>
  );
}

export default withAuth(PagoInversion);
