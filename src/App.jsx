import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Form'
import Card from './components/Card'

function App() {
  const [gendre, setGendre] = useState('')
  const [artist, setArtist] = useState('')
  const [error, setError] = useState('')

  function handleEnviar(genero,artista,error){
    setGendre(genero)
    setArtist(artista)
    setError(error)
  }
    
  return (
    <div className="App">
      <Header title="Genero de música favorito"/>
      <hr/>
      <Formulario onSubmit={handleEnviar}/>
      <Card gendre={gendre} artist={artist} error={error}/>
    </div>
  )
}


export default App
