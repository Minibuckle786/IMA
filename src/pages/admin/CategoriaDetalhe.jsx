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

            </section>
        </>
    )
}

export default CategoriaDetalhes