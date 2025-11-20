import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import AppRouter from "./router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
