import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./assets/styles/main.css";
import { AuthProvider } from "./context/autorizedContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
