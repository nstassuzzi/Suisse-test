import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white text-gray-900 min-h-screen flex flex-col justify-center items-center px-6 py-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-house.jpg"
          alt="Casa moderna"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-30"
        />
      </div>

      <div className="z-10 max-w-3xl text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 text-blue-900 drop-shadow-md">
          Invertí con clase.
        </h1>
        <p className="text-xl text-gray-800 mb-8 font-light drop-shadow-sm">
          Accedé a propiedades exclusivas, asesoramiento con inteligencia artificial y una experiencia que transforma tu manera de invertir.
        </p>
        <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 transition">
          Comenzá tu camino
        </button>
      </div>
    </section>
  );
}
