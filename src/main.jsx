import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import App from "./App.jsx";

// Bootstrap JS

// Bootstrap CSS
// import "../node_modules"
// Custom CSS
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
