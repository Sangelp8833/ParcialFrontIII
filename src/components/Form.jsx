import { useState } from "react"
import Card from "./Card"

function Formulario(props){
    const [generoFav, setGeneroFavValue] = useState('')
    const [artistaFav, setArtistaFavValue] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        if(!generoFav || !artistaFav || generoFav.length < 3 || artistaFav.length < 6 || generoFav.indexOf(" ") != -1){
            console.error('Por favor chequea que la información sea correcta')
            props.onSubmit(generoFav,artistaFav,'Por favor chequea que la información sea correcta')
            return
        }
        props.onSubmit(generoFav,artistaFav)
    }

    function handleGeneroChange(event){
        setGeneroFavValue(event.target.value)
    }

    function handleArtistaChange(event){
        setArtistaFavValue(event.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={generoFav} onChange={handleGeneroChange} placeholder="Genero musical favorito"></input>
            <input type="text" value={artistaFav} onChange={handleArtistaChange} placeholder="Cantante o artista favorita"></input>
            <button typeof="submit">Enviar</button>
        </form>
    )
}

export default Formulario