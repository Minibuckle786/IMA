import "./ServicePerguntas.css"
import { Link } from "react-router-dom"

function ServicePerguntas() {
    return (
        <>
            <div>
                <div className="ServicePerguntas-layout">
                    <div className="ServicePerguntas-layout-body">
                        <p>Voltar para triagens</p>
                        <h2>Perguntas da triagem</h2>
                        <p>Triagem: Segunda via SANASA</p>
                    </div>
                </div>
                <div className="ServicePerguntas-layout2">
                    <div className="ServicePerguntas-layout-body2">
                        <div className="ServicePerguntas-header">
                            <h3>Perguntas da Triagem</h3>
                            <button>+ Nova Pergunta</button>
                        </div>
                        <div className="ServicePerguntas-body">
                            <div className="ServicePerguntas-body-perguntas">
                                <strong>1. Você possui matrícula da SANASA?</strong>
                                <p>Tipo: Sim ou Não</p>
                                <div className="ServicePerguntas-body-button">
                                    <button>
                                        <Link to="/EditarPerguntas">Editar</Link>
                                    </button>
                                    <button>Excluir</button>
                                </div>
                            </div>
                            <div className="ServicePerguntas-body-perguntas">
                                <strong>2. Você possui matrícula da SANASA?</strong>
                                <p>Tipo: Sim ou Não</p>
                                <div className="ServicePerguntas-body-button">
                                    <button>Editar</button>
                                    <button>Excluir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ServicePerguntas 