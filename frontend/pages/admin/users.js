import { useEffect, useState } from 'react';
import { withAuth } from '../../lib/withAuth';
import MainLayout from '../../components/MainLayout';
import { supabase } from '../../lib/supabaseClient';

function AdminUsers({ role }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('profiles').select('id, email, role');
      if (error) {
        console.error(error.message);
      } else {
        setUsers(data);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const updateRole = async (id, newRole) => {
    const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', id);
    if (error) alert('Error actualizando rol: ' + error.message);
    else {
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, role: newRole } : u))
      );
    }
  };

  return (
    <MainLayout role={role}>
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Gestión de usuarios</h2>
        {loading ? (
          <p>Cargando usuarios...</p>
        ) : (
          <table className="w-full bg-white rounded-xl shadow overflow-hidden text-left">
            <thead className="bg-gray-200 text-sm uppercase">
              <tr>
                <th className="p-4">Email</th>
                <th className="p-4">Rol</th>
                <th className="p-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4 space-x-2">
                    {user.role !== 'admin' && (
                      <button
                        onClick={() => updateRole(user.id, 'admin')}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Hacer admin
                      </button>
                    )}
                    {user.role !== 'inversor' && (
                      <button
                        onClick={() => updateRole(user.id, 'inversor')}
                        className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
                      >
                        Hacer inversor
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </MainLayout>
  );
}

export default withAuth(AdminUsers, ['admin']);
