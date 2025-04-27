import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/gShield/' : '/'}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
