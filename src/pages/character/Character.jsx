import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetCharacterId } from "../../actions/characters.api"

export const Character = () => {
    const [character, setCharacter] = useState({})
    const navigation = useNavigate()
    const params = useParams()
   
    useEffect(()=>{
        GetCharacterId(params.id).then(res => setCharacter(res))
    },[params.id])

    const handleAtras = () =>{
        navigation(-1 , {replace: true})
    }

    return (
        <div>
            #{params.id}
            <h1>{character.name}</h1>
            <img src={character.image} alt="" />

            <button onClick={handleAtras}>Atras</button>

        </div>
    )
}