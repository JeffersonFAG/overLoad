import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Envuelve tu App aquí */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
