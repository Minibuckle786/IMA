import "./CadastroMain.css"
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"
import { Link } from "react-router-dom"

function CadastroMain() {
    return (
        <main className="home">
            <div className="cadastre-container " >
                <h1 className="home-title">Cadastro</h1>
                <form action="" className="cadastre-form ">

                    <section  >
                        <label htmlFor="nome"></label>
                        <input type="text" name="nome" id="nome" placeholder="Nome Completo" />
                    </section>

                    <section >
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </section>

                    <section >
                        <label htmlFor="senha"></label>
                        <input type="password" name="senha" id="senha" placeholder="Senha" />
                    </section>

                    <section >
                        <label htmlFor="ConfirmarSenha"></label>
                        <input type="password" name="ConfirmarSenha" id="ConfirmarSenha" placeholder="Senha" />
                    </section>
                </form>
                <button className="cadastre-button">Cadastrar</button>
                <div className="cadastre-options">
                    <div>Esqueceu a senha?</div>
                    <div>Já possui cadastro?Login</div>
                </div>
            </div>

        </main>
    )
}

export default CadastroMain