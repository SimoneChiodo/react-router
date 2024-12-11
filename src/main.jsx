import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./App.jsx";

// Bootstrap JS
import * as bootstrap from "bootstrap";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./assets/index.css";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <App />
    // </StrictMode>
);
