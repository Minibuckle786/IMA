import "./EditarPerguntas.css"
import { Link } from "react-router-dom"

function EditarPerguntas() {
    return (
        <>
            <div>
                <div className="center">
                    <div className="header-body">
                        <p>Voltar para triagens</p>
                        <h2>Perguntas da triagem</h2>
                    </div>
                </div>
                <div className="body-fundo">
                    <div className="center">
                        <form action="">

                            <label htmlFor=""> Texto da Pergunta
                                <input type="text" placeholder="Você possui matricula da SANASA?" />
                            </label>

                            <div>
                                <p>Tipo de Pergunta</p>
                                <input type="radio" id="sim" />
                                <label for="sim">SIM</label>

                                <input type="radio" id="Nao" />
                                <label for="Nao">Não</label>
                            </div>
                            <div>
                                <p>Respostas Possíveis</p>
                                <div>
                                    <p>Resposta 1</p>
                                    <select name="escolha">
                                        <option value="sim" selected>sim</option>
                                        <option value="nao" >nao</option>
                                    </select>
                                    <p>Ir para:</p>
                                    <select name="respostas">
                                        <option value="1" selected>1</option>
                                        <option value="2" >2</option>
                                    </select>
                                </div>
                                <div>
                                    <p>Resposta 2</p>
                                    <select name="escolha">
                                        <option value="sim" selected>sim</option>
                                        <option value="nao" >nao</option>
                                    </select>
                                    <p>Ir para:</p>
                                    <select name="respostas">
                                        <option value="1" selected>1</option>
                                        <option value="2" >2</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditarPerguntas