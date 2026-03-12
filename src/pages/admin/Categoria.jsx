import "./Categoria.css"
import { Link } from "react-router-dom"
import { FiEdit } from "react-icons/fi";

function Categoria() {
    return (

        <section className="cards-layout">
            <h2>Serviços por assunto</h2>
            <ul className="cards">
                <li>
                    <div className="cards-header">
                        <h3>Água, esgoto e meio ambiente</h3>
                        <Link to="/CategoriaDetalhes">
                            <FiEdit />
                        </Link>
                    </div>
                    <div className="cards-opcao">
                        <Link to="/CategoriaDetalhes" className="header_actions_botao">Abrir</Link>
                    </div>
                </li>
                <li>
                    <div className="cards-header">
                        <h3>Água, esgoto e meio ambiente</h3>
                        <Link to="/CategoriaDetalhes">
                            <FiEdit />
                        </Link>
                    </div>
                    <div className="cards-opcao">
                        <Link to="/CategoriaDetalhes" className="header_actions_botao">Abrir</Link>
                    </div>
                </li>

            </ul>
        </section>
    )
}

export default Categoria