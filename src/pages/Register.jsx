import { useState } from "react"

function Register({ setPage }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleRegister() {
        if (!email || !password) {
            alert("Preencha todos os campos")
            return
        }

        const user = { email, password }
        localStorage.setItem("user", JSON.stringify(user))

        alert("Cadastro realizado!")
        setPage("login")
    }

    return (
        <div>
            <h2>Cadastro</h2>

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

            <button onClick={handleRegister}>Cadastrar</button>

            <p onClick={() => setPage("login")} style={{ cursor: "pointer" }}>
                Já tenho conta
            </p>
        </div>
    )
}

export default Register
