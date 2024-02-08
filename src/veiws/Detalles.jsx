import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Detalles = () => {

    const [caracter, setCaracter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        peticionPersonaje()
    }, [id])
    async function peticionPersonaje() {
        try {
            const apiUrl = `https://rickandmortyapi.com/api/character/${id}`
            const res = await fetch(apiUrl)
            const data = await res.json()
            setCaracter(data)
            console.log(caracter)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>{caracter.name}</h1>
            <img src={caracter.image} alt={`foto ${caracter.name}`}  />
        </>
    )
}

export default Detalles