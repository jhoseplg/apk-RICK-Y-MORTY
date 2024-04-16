import { URL_API_RICK_AND_MORTY } from "./url"

export const GetAllCharacters = async(name) =>{
    const response = await fetch(`${URL_API_RICK_AND_MORTY}/character/?name=${name}`)
    const data = await response.json()
    return data
}

export const GetCharacterId = async(id) =>{
    const response = await fetch(`${URL_API_RICK_AND_MORTY}/character/${id}`)
    const data = await response.json()
    return data
}