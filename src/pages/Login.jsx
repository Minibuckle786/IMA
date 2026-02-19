import { useState } from "react"

function Login({ setPage }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin() {
        const storedUser = JSON.parse(localStorage.getItem("user"))

        if (!storedUser) {
            alert("Nenhum usuário cadastrado")
            return
        }

        if (
            email === storedUser.email &&
            password === storedUser.password
        ) {
            alert("Login realizado com sucesso!")
        } else {
            alert("Email ou senha incorretos")
        }
    }

    return (
        <div>
            <h2>Login</h2>

            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Entrar</button>

            <p onClick={() => setPage("register")} style={{ cursor: "pointer" }}>
                Criar conta
            </p>
        </div>
    )
}

export default Login
