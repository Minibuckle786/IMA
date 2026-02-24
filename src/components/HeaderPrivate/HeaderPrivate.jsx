import { Link } from "react-router-dom"

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
                <nav className="header_actions">
                    <span>Olá, Emerson</span>
                    <button onClick={handleLogout}>Sair</button>
                </nav>
            </div>
        </header>
    )
}

export default HeaderPrivate