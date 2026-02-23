import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/HomeMain"
import Cadastre from "./pages/Cadastre/CadastroMain"
import Login from "./pages/Login/LoginMain"

function App() {

  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastre />} />
        <Route path="login" element={<Login />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
