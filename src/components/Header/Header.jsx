import "./header.css"

function Header() {
    return (
        <header>
            <div className="header-container">
                <div>
                    <h1 className="logo">IMA</h1>
                </div>
                <nav className="header_actions">
                    <button>Cadastrar</button>
                    <button>Login</button>
                </nav>
            </div>
        </header>
    )
}

export default Header