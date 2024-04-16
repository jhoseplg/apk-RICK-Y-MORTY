import { useNavigate } from "react-router-dom"

export const PageDashboard = () => {
    const navigation = useNavigate()
    const handleCerrarSeison = () => {
        localStorage.removeItem("token")
        navigation("/login", { replace: true })
    }

    return (
        <div>
            Soy el dashboard

            <button onClick={handleCerrarSeison}>Cerrar Sesion</button>
        </div>
    )
}