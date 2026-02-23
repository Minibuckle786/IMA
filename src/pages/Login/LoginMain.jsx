import "./LoginMain.css"
import { Link } from "react-router-dom"
import { FaEnvelope, FaLock } from "react-icons/fa"

function LoginMain() {
    return (
        <main className="login">
            <div className="Login-container">
                <h1 className="login-title">Login</h1>
                <form action="" className="login-form ">

                    <section className="input-group">
                        <FaEnvelope className="icon" />
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="Email" required />
                    </section>

                    <section className="input-group">
                        <FaLock className="icon" />
                        <label htmlFor="senha"></label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" required />
                    </section>

                </form>
                <button className="cadastre-button">Logar</button>
                <div className="login-options">
                    <div>Esqueceu a senha?</div>
                    <div>Não tem uma conta? Cadastre-se</div>
                </div>

            </div>

        </main>
    )
}

export default LoginMain