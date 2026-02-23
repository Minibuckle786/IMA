import "./CadastroMain.css"
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"
import { Link } from "react-router-dom"

function CadastroMain() {
    return (
        <main className="home">
            <div className="cadastre-container " >
                <div className="cadastre-layout ">
                    <h1 className="home-title">Cadastro de Usuário</h1>
                    <form action="" className="cadastre-form ">

                        <section className="input-group">
                            <FaUser className="icon" />
                            <label htmlFor="nome"></label>
                            <input type="text" name="nome" id="nome" placeholder="Nome Completo" />
                        </section>

                        <section className="input-group">
                            <FaEnvelope className="icon" />
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </section>

                        <section className="input-group">
                            <FaLock className="icon" />
                            <label htmlFor="senha"></label>
                            <input type="password" name="senha" id="senha" placeholder="Senha" />
                        </section>

                        <section className="input-group">
                            <FaLock className="icon" />
                            <label htmlFor="ConfirmarSenha"></label>
                            <input type="password" name="ConfirmarSenha" id="ConfirmarSenha" placeholder="Confirme a Senha" />
                        </section>
                    </form>
                    <button className="cadastre-button">Cadastrar</button>
                    <div className="cadastre-options">
                        <div>Já possui cadastro?Login</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CadastroMain