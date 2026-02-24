import { Link } from "react-router-dom"

function handleLogout() {
    localStorage.removeItem("user")
    navigate("/login")
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
                    <button>Sair</button>
                </nav>
            </div>
        </header>
    )
}

export default HeaderPrivate