import "./CategoriaDetalhes.css"
import { Link } from "react-router-dom"
import { FaRegTrashAlt } from "react-icons/fa";

function CategoriaDetalhes() {
    return (
        <div className="main">
            <section className="CategoriaDetalhes-fundo">
                <div className="CategoriaDetalhes-layout">
                    <div className="CategoriaDetalhes-texto">
                        <Link to="/dashboard">Voltar para Categoria</Link>
                        <h2>Àgua, esgoto e meio ambiente</h2>
                        <p>Gerencie as triagens deste assunto</p>
                    </div>
                    <hr />
                    <div className="CategoriaDetalhes-button">
                        <input className="CategoriaDetalhes-button-1" type="text" placeholder="Buscar triagem..." />
                        <Link className="CategoriaDetalhes-button-2" to="/ServiceEditar"><span>+</span>Nova Triagem</Link>
                    </div>
                </div>

            </section>

            <section>
                <div className="CategoriaDetalhesTriagensLayout">
                    <div className="CategoriaDetalhesTriagens" >
                        <div className="CategoriaDetalhesCabecalho" >
                            <h3>Segunda via Sanasa</h3>
                            <span><FaRegTrashAlt /></span>
                        </div>
                        <p>Tipo: Servico digital</p>
                        <p>Ùltima atualização: 20/02/2026</p>
                        <div className="CategoriaDetalhesOpcoes">
                            <Link to="/ServiceVisualizar">Visualizar</Link>
                            <Link to="/ServiceEditar">Editar</Link>
                            <Link to="/ServicePerguntas">Perguntas</Link>
                        </div>
                    </div>
                    <div className="CategoriaDetalhesTriagens" >
                        <div className="CategoriaDetalhesCabecalho" >
                            <h3>Segunda via Sanasa</h3>
                            <span><FaRegTrashAlt /></span>
                        </div>
                        <p>Tipo: Servico digital</p>
                        <p>Ùltima atualização: 20/02/2026</p>
                        <div className="CategoriaDetalhesOpcoes">
                            <Link to="/ServiceVisualizar">Visualizar</Link>
                            <Link to="/ServiceEditar">Editar</Link>
                            <Link to="/ServicePerguntas">Perguntas</Link>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default CategoriaDetalhes