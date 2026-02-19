import { useState } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const [page, setPage] = useState("login")

  return (
    <div>
      {page === "login" && <Login setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
    </div>
  )
}

export default App
