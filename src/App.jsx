import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Cadastre from "./pages/Cadastre/CadastroMain"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastre />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
