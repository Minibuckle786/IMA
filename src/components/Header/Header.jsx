import "./header.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="header-container">
                <div>
                    <h1 className="logo"><Link to="/">IMA</Link></h1>
                </div>
                <nav className="header_actions">
                    <Link to="/cadastro" className="header_actions_botao">Cadastrar</Link>
                    <Link to="/login" className="header_actions_botao">Login</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header