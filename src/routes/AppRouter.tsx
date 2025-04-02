import { useRoutes } from "react-router-dom";
import { useAppRoutes } from "./routest";

export const AppRouter = () => {
  const routes = useAppRoutes();
  return useRoutes(routes);
};
