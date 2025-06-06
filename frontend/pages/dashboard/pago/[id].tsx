import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inversiones = [
  {
    id: "tulum-vista-mar",
    nombre: "Tulum - Vista al Mar",
    monto: "$100000",
    metodo: "mercadopago", // podría ser: stripe | transferencia
  },
  {
    id: "aldea-zama-luxury",
    nombre: "Aldea Zama - Luxury Loft",
    monto: "$80000",
    metodo: "mercadopago",
  },
];

export default function PagoInversion() {
  const router = useRouter();
  const { id } = router.query;

  const [inversion, setInversion] = useState<any>(null);
  const [loading, setLoading] = useState(false);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: inversion.nombre,
          monto: inversion.monto.replace(/[^0-9.]/g, ""), // limpia "$"
          email: "inversor@test.com", // ⚠️ luego usar user.email real
          id: inversion.id,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("No se pudo generar el link de pago.");
      }
    } catch (err) {
      console.error(err);
      alert("Error al procesar el pago.");
    } finally {
      setLoading(false);
    }
  };

  if (!inversion) {
    return <p className="p-6">Inversión no encontrada.</p>;
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-6">
          Finalizar inversión: {inversion.nombre}
        </h1>

        <p className="text-gray-700 mb-4">
          Monto a invertir: <strong>{inversion.monto}</strong>
        </p>

        <button
          onClick={handlePago}
          disabled={loading}
          className="bg-navy text-white px-6 py-3 rounded-lg text-lg hover:bg-navy-800 transition"
        >
          {loading ? "Redirigiendo..." : "Pagar con Mercado Pago"}
        </button>

        <p className="text-sm text-gray-500 mt-6">
          Si ya realizaste el pago o necesitás ayuda, contactá a tu asesor o
          escribinos por WhatsApp.
        </p>
      </div>
    </div>
  );
}
