import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import axios from "axios";
import "destyle.css";
import "./index.css";

axios.defaults.headers.common["X-API-KEY"] = import.meta.env.VITE_API_KEY;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
