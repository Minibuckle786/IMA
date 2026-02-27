import "./Categoria.css"
import { Link } from "react-router-dom"

function Categoria() {
    return (

        <section className="cards-layout">
            <h2>Serviços por assunto</h2>
            <ul className="cards">
                <li>
                    <span>Água, esgoto e meio ambiente</span>
                    <div className="cards-opcao">
                        <button>
                            <Link to="/CategoriaDetalhes" className="header_actions_botao">Abrir</Link>
                        </button>
                        <button>Editar</button>
                    </div>
                </li>
                <li>
                    <span>Atendimento a consumidores</span>
                    <div className="cards-opcao">
                        <button>Abrir</button>
                        <button>Editar</button>
                    </div>
                </li>
                <li>
                    <span>Água, esgoto e meio ambiente</span>
                    <div className="cards-opcao">
                        <button>Abrir</button>
                        <button>Editar</button>
                    </div>
                </li>
                <li>
                    <span>Atendimento a consumidores</span>
                    <div className="cards-opcao">
                        <button>Abrir</button>
                        <button>Editar</button>
                    </div>
                </li>
                <li>
                    <span>Água, esgoto e meio ambiente</span>
                    <div className="cards-opcao">
                        <button>Abrir</button>
                        <button>Editar</button>
                    </div>
                </li>
                <li>
                    <span>Atendimento a consumidores</span>
                    <div className="cards-opcao">
                        <button>Abrir</button>
                        <button>Editar</button>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Categoria