import "./DashboardMain.css"
import ServicosPorAssunto from "../ServicosPorAssunto/ServicosPorAssunto"

function DashboardMain() {
    return (
        <div className="DashboardMain">
            <div className="DashboardMain-Layout">
                <div className="DashboardMain-h1">
                    <h1>Meu Painel</h1>
                </div>
                <div>
                    <button className="DashboardMain-button1"> <span>+</span> Novo Painel</button>
                </div>

            </div>
            <hr />
            <button className="DashboardMain-button2"><span>+</span> Novo Painel</button>
            <hr />
            <ServicosPorAssunto />
        </div>
    )
}

export default DashboardMain