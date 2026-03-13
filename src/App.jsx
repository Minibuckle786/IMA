import { HashRouter, Routes, Route } from "react-router-dom"

import PublicLayout from "./layouts/PublicLayout"
import PrivateLayout from "./layouts/PrivateLayout"
import PrivateRoute from "./routes/PrivateRoute"

/* Publico */
import Home from "./pages/Home/HomeMain"
import Cadastre from "./pages/Cadastre/CadastroMain"
import Login from "./pages/Login/LoginMain"
import Categoria from "./pages/admin/Categoria"

/* Privado */
import Dashboard from "./pages/Dashboard/DashboardMain"
import CategoriaDetalhes from "./pages/admin/CategoriaDetalhe"
import ServiceVisualizar from "./pages/admin/ServiceVisualizar/ServiceVisualizar"
import ServiceEditar from "./pages/admin/ServiceEditar/ServiceEditar"
import ServicePerguntas from "./pages/admin/ServicePerguntas/ServicePerguntas"
import EditarPerguntas from "./pages/admin/ServicePerguntas/EditarPerguntas/EditarPerguntas"

function App() {

  return (
    <HashRouter>

      <Routes>

        {/* Rotas públicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="cadastro" element={<Cadastre />} />
          <Route path="login" element={<Login />} />
          <Route path="/Categoria" element={<Categoria />} />
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
          <Route path="ServiceEditar" element={<ServiceEditar />} />
          <Route path="ServicePerguntas" element={<ServicePerguntas />} />
          <Route path="EditarPerguntas" element={<EditarPerguntas />} />
        </Route>

      </Routes>

    </HashRouter>
  )
}

export default App
