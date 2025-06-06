import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    // Detectar si se abrió desde el link de recuperación
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        console.log('Recuperación activa');
      }
    });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) alert(error.message);
    else setConfirmed(true);
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Nueva contraseña"
        required
      />
      <button type="submit">Actualizar contraseña</button>
      {confirmed && <p>Contraseña actualizada. Ya podés iniciar sesión.</p>}
    </form>
  );
}
