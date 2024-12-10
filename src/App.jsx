import { useState } from "react";

// Components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";

// Custom CSS
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <BrowserRouter>
                    <Routes>
                        <Route index component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/posts" component={PostsPage} />
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    );
}

export default App;
