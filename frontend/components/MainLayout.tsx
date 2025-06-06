import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "@/lib/supabaseClient";

interface MainLayoutProps {
  children: React.ReactNode;
  role: string;
}

export default function MainLayout({ children, role }: MainLayoutProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold text-navy tracking-tight">
          Suisse <span className="font-light">Wealth</span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-medium">
          {role === "inversor" && (
            <>
              <Link href="/dashboard/inversiones" className="hover:underline">
                Mis Inversiones
              </Link>
              <Link href="/profile" className="hover:underline">
                Perfil
              </Link>
            </>
          )}

          {role === "admin" && (
            <>
              <Link href="/admin-dashboard" className="hover:underline">
                Panel Admin
              </Link>
              <Link href="/admin/users" className="hover:underline">
                Usuarios
              </Link>
            </>
          )}

          <button
            onClick={handleLogout}
            className="text-red-600 hover:underline ml-4"
          >
            Cerrar sesión
          </button>
        </nav>
      </header>

      {/* Main content */}
      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
