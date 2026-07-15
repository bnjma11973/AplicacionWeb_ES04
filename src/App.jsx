import { useState } from 'react'
// import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListaItems from "./components/ListaItems"
import DetalleItems from "./components/DetalleItems"

function App() {

  const [personaje, setPersonajeDetalle] = useState("")
  const infoPersonaje = ()=>
  {
    if (personaje=="Michael")
      return {
        nombre:"Michael De Santa",
        image:"/card-michael.jpg"
      }
    if (personaje=="Franklin")
      return {
        nombre:"Franklin Clinton",
        image:"/card-franklin.jpg"
      }
    if (personaje=="Trevor")
      return {
        nombre:"Trevor Phillips",
        image:"/card-trevor.jpg"
      }
    else 
      return {}
  }

  return (
    <>
      <Header/>
      <ListaItems
        CambiarPersonaje={(e)=>setPersonajeDetalle(e)}
      />
      <DetalleItems
        personajeActual={personaje}
        personajeInfo={infoPersonaje()}
      />
      <Footer/>
    </>
  )
}

export default App
