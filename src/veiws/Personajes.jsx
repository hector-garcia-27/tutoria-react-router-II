import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Personajes = () => {

  const [personajes, setPersonajes] = useState([])
  const [optionSelected, setOptionSelected] = useState(1)

  useEffect(() => {
    peticionApi()
  }, [])

  async function peticionApi() {
    try {
      const apiUrl = 'https://rickandmortyapi.com/api/character'
      const res = await fetch(apiUrl)
      const { results } = await res.json()
      console.log(results)
      setPersonajes(results)
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleSelect = ({ target: { value } }) => setOptionSelected(value)

  const navigate = useNavigate()

  const goToDetails = () => {
    if (!optionSelected) {
      alert("Debes seleccionar un personaje")
    } else {
      navigate(`/personajes/${optionSelected}`)
    }
  }

  return (
    <>

      <h1>Personajes</h1>
      <section>
        <h2>Selecciona tu personaje</h2>
        <h2>{optionSelected}</h2>
        <select onChange={(value) => handleSelect(value)}>
          {personajes && personajes.map(({ id, name }) =>
            // personajes?.map((personaje) =>
            <option value={id} key={id} >{name}</option>
          )}
        </select>
        <button onClick={goToDetails} >Buscar</button>
      </section>
    </>
  )
}

export default Personajes