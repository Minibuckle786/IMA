import "./DashboardMain.css"

function DashboardMain() {
    return (
        <div className="DashboardMain">
            <div className="DashboardMain-Layout">
                <div className="DashboardMain-h1">
                    <h1>Meu Painel</h1>
                </div>
                <div>
                    <button className="DashboardMain-button1">Novo Painel</button>
                </div>

            </div>
            <hr />
            <button className="DashboardMain-button2">Novo Painel</button>
        </div>
    )
}

export default DashboardMain