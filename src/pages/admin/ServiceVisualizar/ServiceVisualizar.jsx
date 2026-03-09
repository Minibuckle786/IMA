import "./ServiceVisualizar.css"


function ServiceVisualizar() {
    return (
        <>
            <div className="servicevisualizar-layout">
                <div className="header-visualizar">
                    <p>Voltar para triagens</p>
                    <h2>Visualizando: <span>Segunda via Sanasa</span> </h2>
                    <p>Modo simulação</p>
                </div>
                <div className="body-visualizar">
                    <div className="bodyLayout-visualizar">
                        <div className="card-pergunta">
                            <div className="card-header">
                                <h3>Pergunta 1 de 3</h3>
                            </div>

                            <hr />

                            <div className="card-body">
                                <p >Você tem o número da matrícula?</p>
                                <div className="pergunta">
                                    <label className="opcao">
                                        <input type="radio" name="matricula" value="sim" />
                                        Sim
                                    </label>
                                    <label className="opcao">
                                        <input type="radio" name="matricula" value="nao" />
                                        Não
                                    </label>
                                </div>
                            </div>

                            <hr />

                            <div class="card-footer">
                                <button class="btn-proxima">Próxima</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceVisualizar