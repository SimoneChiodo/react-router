import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Custom CSS
import "./assets/App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Component={DefaultLayout}>
                        <Route index Component={HomePage} />
                        <Route path="/about" Component={AboutPage} />
                        <Route path="/posts" Component={PostsPage} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
