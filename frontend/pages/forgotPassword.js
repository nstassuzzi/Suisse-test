import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import AuthFormWrapper from '../components/AuthFormWrapper';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/reset-password',
    });
    if (error) alert(error.message);
    else setMessage('Revisá tu correo para continuar.');
  };

  return (
    <AuthFormWrapper title="Recuperar contraseña">
      <form onSubmit={handleReset} className="space-y-4">
        <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Correo registrado" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Enviar enlace</button>
      </form>
      {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
    </AuthFormWrapper>
  );
}
