// lib/withAuth.js
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export function withAuth(Component, allowedRoles = []) {
  return function ProtectedComponent(props) {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const verifyAccess = async () => {
        const { data: { session } } = await supabase.auth.getSession();

        if (!session?.user) {
          window.location.href = '/login';
          return;
        }

        setUser(session.user);

        const { data: profile, error } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();

        if (error || !profile) {
          console.error('Error al obtener rol:', error?.message || 'Perfil no encontrado');
          window.location.href = '/dashboard';
          return;
        }

        setRole(profile.role);

        // Si se especifican roles permitidos y no coincide, redirige
        if (allowedRoles.length > 0 && !allowedRoles.includes(profile.role)) {
          window.location.href = '/dashboard';
          return;
        }

        setLoading(false);
      };

      verifyAccess();
    }, []);

    if (loading) return <p className="text-center mt-10">Verificando acceso...</p>;

    return <Component {...props} user={user} role={role} />;
  };
}
