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
                    <div className="center body-fundo-branco">
                        <form action="" className="EditarPerguntas-text ">

                            <label htmlFor="" className="EditarPerguntas-1P ">
                                <p>Texto da Pergunta</p>
                                <input type="text" placeholder="Digite a pergunta" />
                            </label>

                            <div >
                                <p >Tipo de Pergunta</p>
                                <div className="EditarPerguntas-2P">
                                    <input type="radio" id="sim" name="SimouNao" />
                                    <label for="sim">SIM</label>

                                    <input type="radio" id="Nao" name="SimouNao" />
                                    <label for="Nao">Não</label>
                                </div>
                            </div>
                            <div >
                                <p>Respostas Possíveis</p>
                                <div className="EditarPerguntas-3P">
                                    <div className="EditarPerguntas-1R">
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
                                        <div className="EditarPerguntas-1R">
                                            <p>Resposta 2</p>
                                            <select name="escolha">
                                                <option value="sim" >sim</option>
                                                <option value="nao" selected>nao</option>
                                            </select>
                                            <p>Ir para:</p>
                                            <select name="respostas">
                                                <option value="1" >1</option>
                                                <option value="2" selected >2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default EditarPerguntas