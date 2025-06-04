import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Suisse Wealth Management</title>
      </Head>
      <main className="bg-white text-gray-900">
        <Hero />
      </main>
    </>
  );
}
