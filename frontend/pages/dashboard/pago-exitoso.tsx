import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PagoExitoso() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold text-navy">
            ¡Pago exitoso!
          </h1>

          <p className="text-lg text-gray-600">
            Gracias por confirmar tu inversión en Suisse Wealth Management. Tu asesor se pondrá en contacto en las próximas horas para coordinar los siguientes pasos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/dashboard">
              <Button className="bg-navy hover:bg-navy-800 text-white px-6 py-3 rounded-lg text-lg">
                Ir a mi panel
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white px-6 py-3 text-lg">
                Contactar a soporte
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
