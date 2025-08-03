import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      limit={1}
      position="top-center" // ✅ use a valid position
      closeOnClick
      pauseOnHover
      draggable
      theme="light" // or "dark"
      autoClose={3000}
    />

    <App />
  </StrictMode>
);
