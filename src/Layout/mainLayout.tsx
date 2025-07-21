import { Outlet } from "react-router"
import Header from "../component/Header/Header"
import Footer from "../component/Footer/footer"

export const Mainlayout = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}