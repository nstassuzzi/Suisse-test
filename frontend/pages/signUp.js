import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import AuthFormWrapper from '../components/AuthFormWrapper';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('Revisá tu correo para confirmar el registro');
  };

  return (
    <AuthFormWrapper title="Registrarse">
      <form onSubmit={handleSignup} className="space-y-4">
        <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="w-full px-4 py-2 border rounded-lg" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Crear cuenta</button>
      </form>
      <p className="text-center text-sm mt-4">
        ¿Ya tenés cuenta? <a href="/login" className="text-blue-600">Iniciar sesión</a>
      </p>
    </AuthFormWrapper>
  );
}
