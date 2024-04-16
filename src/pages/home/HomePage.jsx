import { useEffect, useState } from "react"
import { GetAllCharacters } from "../../actions/characters.api"
import { Link } from "react-router-dom"

export const HomePage = () => {
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    useEffect(() => {
        //setLoading(true)
        GetAllCharacters(search).then(res => {
            if (res.results) {
                setTimeout(() => {
                    setCharacter(res.results)
                    //setLoading(false)
                }, 500)
            }
        })
    }, [search])

    console.log("character", character)

    /*if (loading === true) {
        return <div>Cargando......</div>
    }*/

    return (
        <div>
            <h1>PERSONAJES RICK AND MORTY</h1>

            <div>
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Buscar personaje...." />
            </div>
            
            <br />

            <div>
                {character.map((personajes) =>
                    <Link to={`/character/${personajes.id}`} key={personajes.id}>
                        <img src={personajes.image} alt="" />
                        <p>{personajes.name}</p>
                    </Link>
                )}
            </div>

        </div>
    )
}