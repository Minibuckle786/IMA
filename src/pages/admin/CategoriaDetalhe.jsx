import "./CategoriaDetalhes.css"

function CategoriaDetalhes() {
    return (
        <>
            <section className="CategoriaDetalhes-fundo">
                <div className="CategoriaDetalhes-layout">
                    <div className="CategoriaDetalhes-texto">
                        <button>Voltar para Categoria</button>
                        <h2>Àgua, esgoto e meio ambiente</h2>
                        <p>Gerencie as triagens deste assunto</p>
                    </div>
                    <hr />
                    <div className="CategoriaDetalhes-button">
                        <input className="CategoriaDetalhes-button-1" type="text" placeholder="Buscar triagem..." />
                        <button className="CategoriaDetalhes-button-2"><span>+</span>Nova Triagem</button>
                    </div>
                </div>

            </section>

            <section>
                <div className="CategoriaDetalhesTriagensLayout">
                    <div className="CategoriaDetalhesTriagens" >
                        <div className="CategoriaDetalhesTriagens" >
                            <h3>Segunda via Sanasa</h3>
                            <samp>remover</samp>
                        </div>
                        <p>Tipo: Servico digital</p>
                        <p>Ùltima atualização: 20/02/2026</p>
                        <div>
                            <button>Visualizar</button>
                            <button>Editar</button>
                            <button>Perguntas</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CategoriaDetalhes