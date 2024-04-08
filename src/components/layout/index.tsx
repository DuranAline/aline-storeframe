import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import "./style.css";

export function Layout() {
    return(
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}