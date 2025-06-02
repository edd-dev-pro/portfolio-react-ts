# 📦 Portfolio React + TypeScript

Este es un proyecto profesional de portafolio web construido con:

- ✅ Vite
- ✅ React
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ ESLint (Flat Config, con TypeScript y React)
- ✅ Prettier
- ✅ Husky + lint-staged (control de calidad en los commits)

---

## 🚀 Scripts disponibles

| Comando            | Descripción                                        |
| ------------------ | -------------------------------------------------- |
| `npm run dev`      | Levanta el servidor de desarrollo (Vite).          |
| `npm run build`    | Compila el proyecto.                               |
| `npm run preview`  | Sirve el build generado para pruebas locales.      |
| `npm run lint`     | Corre ESLint (Flat Config) sobre todo el proyecto. |
| `npm run lint:fix` | Corre ESLint con autocorrección.                   |
| `npm run format`   | Aplica Prettier para formatear todo el proyecto.   |
| `npm run prepare`  | Instala y configura Husky.                         |

---

## ⚙️ Husky + lint-staged

El proyecto usa hooks de Git para garantizar calidad de código:

- **pre-commit** → Ejecuta lint + format solo sobre los archivos staged.
- **pre-push** → Ejecuta los tests antes de permitir subir cambios.

---

## 🌱 Cómo empezar

1️⃣ Instala dependencias:

```bash
npm install
```
