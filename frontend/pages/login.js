import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import AuthFormWrapper from '../components/AuthFormWrapper';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else window.location.href = '/dashboard';
  };

  return (
    <AuthFormWrapper title="Iniciar sesión">
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="w-full px-4 py-2 border rounded-lg" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Entrar</button>
      </form>
      <p className="text-center text-sm mt-4">
        ¿Olvidaste tu contraseña? <a href="/forgot-password" className="text-blue-600">Recuperar</a>
      </p>
    </AuthFormWrapper>
  );
}
