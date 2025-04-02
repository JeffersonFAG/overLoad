import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Login } from "../pages/public/Login/Login";
import { Home } from "../pages/private/Home/Home";

export const AppRouter = () => {
  const { token } = useAuth();

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />

      {/* Rutas privadas */}
      <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />

      {/* Ruta por defecto */}
      <Route path="*" element={<Navigate to={token ? "/" : "/login"} />} />
    </Routes>
  );
};
