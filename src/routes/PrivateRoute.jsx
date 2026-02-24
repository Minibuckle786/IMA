function PrivateRoute({ children }) {
    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
        return <Navigate to="/login" />
    }

    return children
}