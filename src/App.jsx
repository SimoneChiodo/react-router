import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";

// Custom CSS
import "./assets/App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index Component={HomePage} />
                    <Route path="/about" Component={AboutPage} />
                    <Route path="/posts" Component={PostsPage} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
