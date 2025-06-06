// pages/admin-dashboard.tsx
import MainLayout from "@/components/MainLayout";
import { withAuth } from "@/lib/withAuth";

function AdminDashboard({ user, role }) {
  if (role !== "admin") {
    return <p className="p-6 text-red-500">Acceso denegado</p>;
  }

  return (
    <MainLayout role={role}>
      <h1 className="text-3xl font-bold text-navy mb-6">Panel de Administración</h1>
      <p className="text-gray-700">Bienvenido, {user.email}</p>
      {/* Más widgets o secciones para admins aquí */}
    </MainLayout>
  );
}

export default withAuth(AdminDashboard);
