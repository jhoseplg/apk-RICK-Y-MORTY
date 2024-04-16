import { useState } from "react"
import { authUser } from "../../actions/auth.api"
import { useNavigate } from "react-router-dom"

export const PageLogin = () => {
    const navigation = useNavigate()
    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    })

    const handleChangeInputs = (e) => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        authUser(inputForm).then(res => {
            if(res.access_token){
                localStorage.setItem("token", res.access_token)
                navigation("/dashboard")
            }else{
                alert("ERROR AL INICIAR SESION")
            }
        })
    }

    return (
        <div>
            <h1>LOGIN</h1>

            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="">Correo:</label>
                    <input type="text" name="email" onChange={handleChangeInputs} />
                </div>

                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="password"  onChange={handleChangeInputs} />
                </div>

                <button type="submit">Ingresar</button>

            </form>

        </div>
    )
}