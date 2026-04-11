import "./CategoriaDetalhesUsuario.css"
import { Link } from "react-router-dom"
import { FaRegTrashAlt } from "react-icons/fa";

function CategoriaDetalhes() {
    return (
        <div className="main">
            <section className="CategoriaDetalhes-fundo ">
                <div className="CategoriaDetalhes-layout">
                    <div className="CategoriaDetalhes-texto">
                        <Link to="/CategoriaUsuario">Voltar para Categoria</Link>
                        <h2>Àgua, esgoto e meio ambiente</h2>
                    </div>
                    <hr />
                    <div className="CategoriaDetalhes-button">
                        <input className="CategoriaDetalhes-button-1" type="text" placeholder="Buscar triagem..." />
                    </div>
                </div>

            </section>

            <section>
                <div className="CategoriaDetalhesTriagensLayout">
                    <div className="CategoriaDetalhesTriagens" >
                        <div className="CategoriaDetalhesCabecalho" >
                            <h3>Segunda via Sanasa</h3>
                        </div>
                        <p>Tipo: Servico digital</p>
                        <p>Ùltima atualização: 20/02/2026</p>
                        <div className="CategoriaDetalhesOpcoes">
                            <Link to="/ServiceVisualizar">Iniciar</Link>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default CategoriaDetalhes