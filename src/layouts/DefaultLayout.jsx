import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className="d-flex flex-column align-items-center justify-content-center p-2 mt-5">
                <Outlet />
            </main>
        </>
    );
}
