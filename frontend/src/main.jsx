import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast"; // ✅ Import correct

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Toaster /> {/* 🔹 Toujours ici, en dehors des Routes */}
        <App />
    </StrictMode>
);
