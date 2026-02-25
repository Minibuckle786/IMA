import HeaderPublic from "../components/HeaderPublic/HeaderPublic"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

function PublicLayout() {
    return (
        <>
            <HeaderPublic />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default PublicLayout