import { withAuth } from '../lib/withAuth';
import MainLayout from '../components/MainLayout';

function Dashboard({ user, role }) {
  return (
    <MainLayout role={role}>
      <h2 className="text-2xl font-semibold mb-4">Bienvenido, {user.email}</h2>
      <p>Tu rol es: <strong>{role}</strong></p>
    </MainLayout>
  );
}

export default withAuth(Dashboard);
