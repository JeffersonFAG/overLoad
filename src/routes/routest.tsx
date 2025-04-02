import { RouteObject, Navigate } from "react-router-dom";
import Login from "../pages/public/Login/Login";
import Home from "../pages/private/Home/Home";
import { useAuth } from "../contexts/AuthContext";

export const useAppRoutes = () => {
  const { token } = useAuth();

  //Se centralizan las rutas para garantizar scalabilidad
  //TODO se puede mejorar la validacion de las rutas protegidas con un protecte
  const routes: RouteObject[] = [
    {
      path: "/login",
      element: !token ? <Login /> : <Navigate to="/" replace />,
    },
    {
      path: "/",
      element: token ? <Home /> : <Navigate to="/login" replace />,
    },
    {
      path: "*",
      element: <Navigate to={token ? "/" : "/login"} replace />,
    },
  ];

  return routes;
};
