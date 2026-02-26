import { Link } from "react-router-dom"
import "./HeaderPrivate.css"

const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = "/#/login"
}

function HeaderPrivate() {
    return (
        <header>
            <div className="header-container">
                <div>
                    <h1 className="logo"><Link to="/">IMA</Link></h1>
                </div>
                <nav className="header-private">
                    <span>Olá, Emerson</span>
                    <button className="header_private_botao" onClick={handleLogout}>Sair</button>
                </nav>
            </div>
        </header>
    )
}

export default HeaderPrivate