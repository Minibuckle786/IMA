import "./ServiceEditar.css"
import { Link } from "react-router-dom"

function ServiceEditar() {
    return (
        <>
            <div>
                <div className="ServiceEditar-layout">
                    <Link to="/CategoriaDetalhes">Voltar para triagens</Link>
                    <h2>Triagem</h2>
                </div>
                <div className="ServiceEditar-layout2">
                    <div className="ServiceEditar-body">
                        <form action="" className="ServiceEditar-form">

                            <fieldset>
                                <legend className="ServiceEditar-nome">Nome da Triagem</legend>
                                <label htmlFor="" className="ServiceEditar-label">
                                    <input type="text" placeholder="Digite o nome da triagem" />
                                </label>
                            </fieldset>
                            <fieldset>
                                <legend className="ServiceEditar-nome ">Tipo de atendimento</legend>

                                <div className="ServiceEditar-Radio">
                                    <label>
                                        <input type="radio" name="tipo" />
                                        Serviço digital
                                    </label>

                                    <label>
                                        <input type="radio" name="tipo" />
                                        Atendimento presencial
                                    </label>
                                </div>

                            </fieldset>

                            <fieldset>
                                <legend className="ServiceEditar-nome">Status</legend>
                                <div className="ServiceEditar-Radio">
                                    <label>
                                        <input type="radio" name="status" />
                                        Ativa
                                    </label>

                                    <label>
                                        <input type="radio" name="status" />
                                        Inativa
                                    </label></div>

                            </fieldset>

                            <div class="ServiceEditar-campo">
                                <label for="descricao">Descrição</label>
                                <textarea id="descricao"></textarea>
                            </div>


                            <button className="serviceEditarSalvar">Salvar</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceEditar