import { useState } from 'react';
import { withAuth } from '../lib/withAuth';
import MainLayout from '../components/MainLayout';
import { supabase } from '../lib/supabaseClient';

function Profile({ user, role }) {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const updateEmail = async () => {
    const { error } = await supabase.auth.updateUser({ email });
    setMessage(error ? `Error: ${error.message}` : 'Correo actualizado. Revisá tu bandeja de entrada para confirmar.');
  };

  const updatePassword = async () => {
    const { error } = await supabase.auth.updateUser({ password });
    setMessage(error ? `Error: ${error.message}` : 'Contraseña actualizada.');
  };

  return (
    <MainLayout role={role}>
      <div className="max-w-xl mx-auto space-y-6 mt-10">
        <h2 className="text-2xl font-bold">Mi perfil</h2>

        <div className="bg-white p-4 rounded-xl shadow space-y-4">
          <div>
            <label className="block text-sm font-medium">Correo electrónico</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded p-2" />
            <button onClick={updateEmail} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Actualizar correo
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium">Nueva contraseña</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded p-2" />
            <button onClick={updatePassword} className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Cambiar contraseña
            </button>
          </div>

          {message && <p className="text-sm text-center text-gray-700">{message}</p>}
        </div>
      </div>
    </MainLayout>
  );
}

export default withAuth(Profile);
