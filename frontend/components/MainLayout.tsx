// components/MainLayout.tsx
import Link from "next/link";

export default function MainLayout({ children, role }: { children: React.ReactNode; role: string }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Suisse</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/dashboard" className="hover:underline">Inicio</Link>
          {role === "admin" && <Link href="/admin-dashboard" className="hover:underline">Admin</Link>}
          <Link href="/profile" className="hover:underline">Perfil</Link>
          <button
            onClick={async () => {
              const { supabase } = await import("../lib/supabaseClient");
              await supabase.auth.signOut();
              window.location.href = "/login";
            }}
            className="text-red-500 hover:underline"
          >
            Cerrar sesión
          </button>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
