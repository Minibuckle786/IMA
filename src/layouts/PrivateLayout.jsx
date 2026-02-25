import HeaderPrivate from "../components/HeaderPrivate/HeaderPrivate"
import { Outlet } from "react-router-dom"

function PrivateLayout() {
    return (
        <>
            <HeaderPrivate />

            <main className="private-container">
                <Outlet />
            </main>
        </>
    )
}

export default PrivateLayout