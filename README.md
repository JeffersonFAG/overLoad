# React Auth Dashboard

## Descripción

Aplicación React con autenticación simulada que muestra un dashboard con lista de 2,000 elementos consumidos desde API pública.

## Características

- Autenticación simulada con token fake
- Lista virtualizada de alto rendimiento
- Diseño responsivo (mobile/desktop)
- Persistencia de sesión
- Arquitectura escalable

## Tecnologías

- React 18 + TypeScript
- Vite
- React Router 6
- Axios
- CSS Modules
- react-window

## Mejoras propuestas para los llamados al backend

- Crear o utilizar sistema o libreria que ayude a caching de datos para evitar llamado innecesarios a la api.
- Paginar desde el back o front la respuesta del endpoint, para registros con contenido extenso.
- Implementar cancelacion de peticiones cuando no sean necesarias.
- Manejo de lazy loading para la espera de las peticiones.

## Instalación

```bash
git clone https://github.com/JeffersonFAG/overLoad.git
cd [repo-folder]
npm install
npm run dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
