import { withAuth } from '../lib/withAuth';
import MainLayout from '../components/MainLayout';

function AdminDashboard({ user, role }) {
  return (
    <MainLayout role={role}>
      <h2 className="text-2xl font-semibold mb-4">Panel de Administración</h2>
      <p>Accedés como: <strong>{role}</strong></p>
    </MainLayout>
  );
}

export default withAuth(AdminDashboard, ['admin']);
