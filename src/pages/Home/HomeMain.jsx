import "./HomeMain.css"
import { Link } from "react-router-dom"

function HomeMain() {
    return (
        <main className="home">
            <div className="home-container">
                <h1 className="home-title">Sistema de Triagem Digital</h1>
                <div className="home-descricao">
                    <p>Este ambiente foi desenvolvido para orientar decisões por meio de um processo estruturado de perguntas e respostas.</p>
                    <p>Ao iniciar uma triagem, você percorre etapas organizadas que analisam informações importantes para gerar uma recomendação personalizada.</p>
                    <p>O sistema organiza as informações de forma estruturada e objetiva, garantindo maior precisão na recomendação final.</p>
                </div>
                <Link to="/Categoria" className="home-button">Iniciar Triagem</Link>
            </div>
        </main>
    )
}

export default HomeMain