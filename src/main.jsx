import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/tokens.css";
import "./styles/base.css";

const applicationRoot = document.getElementById("root");

ReactDOM.createRoot(applicationRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
