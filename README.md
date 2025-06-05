# 🇨🇭 Suisse Platform – Proyecto Monorepo

Este repositorio contiene todo el ecosistema de desarrollo para la plataforma digital **Suisse Wealth Management**, organizada profesionalmente en un monorepo.

## 📦 Estructura del Proyecto

```
Suisse-Platform/
├── frontend/      → Interfaz de usuario (Next.js, TailwindCSS)
├── backend/       → Lógica del servidor, API Routes, integraciones
├── shared/        → Tipos, constantes y recursos compartidos
```

---

## 📁 Detalle por Carpeta

### `frontend/`
Contiene todo el código del frontend (Next.js o React).
- `/pages`: páginas de la aplicación
- `/components/ui`: componentes reutilizables
- `/public/img`: imágenes y recursos estáticos
- `/styles`: estilos globales o módulos CSS

### `backend/`
Lógica del servidor, APIs y servicios.
- `/api`: endpoints REST o Next.js API Routes
- `/controllers`: lógica de negocio o gestión de datos
- `/models`: estructuras o esquemas (si usás base de datos)

### `shared/`
Recursos compartidos entre frontend y backend.
- `types.ts`: tipos TypeScript (interfaces comunes, enums, etc.)
- `constants.ts` (opcional): valores reutilizables (ej: monedas, rutas)

---

## 🧠 Buenas prácticas sugeridas

- Usar ramas `main`, `dev` y `feature/xxx`
- Mantener documentación mínima en cada carpeta (`README.md`)
- Aplicar control de versiones con Git
- Automatizar deploys por carpeta en Vercel (frontend) y Render/Railway (backend)

---

## 📜 Licencia

Este proyecto está en desarrollo privado. Todos los derechos reservados © 2025.
