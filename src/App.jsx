import { HashRouter, Routes, Route } from "react-router-dom"

import PublicLayout from "./layouts/PublicLayout"
import PrivateLayout from "./layouts/PrivateLayout"
import PrivateRoute from "./routes/PrivateRoute"

/* Publico */
import Home from "./pages/Home/HomeMain"
import Cadastre from "./pages/Cadastre/CadastroMain"
import Login from "./pages/Login/LoginMain"

/* Privado */
import Dashboard from "./pages/Dashboard/DashboardMain"
import CategoriaDetalhes from "./pages/admin/CategoriaDetalhe"
import ServiceVisualizar from "./pages/admin/ServiceDetalhe/ServiceVisualizar"

function App() {

  return (
    <HashRouter>

      <Routes>

        {/* Rotas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="cadastro" element={<Cadastre />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Rotas privadas */}
        <Route
          element={
            <PrivateRoute>
              <PrivateLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="CategoriaDetalhes" element={<CategoriaDetalhes />} />
          <Route path="ServiceVisualizar" element={<ServiceVisualizar />} />
        </Route>

      </Routes>

    </HashRouter>
  )
}

export default App
