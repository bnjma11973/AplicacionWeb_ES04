import { useEffect, useState } from 'react'
// import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListaItems from "./components/ListaItems"
import DetalleItems from "./components/DetalleItems"

function App() {
  // ESTABLECER ESTADO PERSONAJE
  const [personaje, setPersonajeDetalle] = useState("")
  useEffect(() =>
    {
      let personaje_LS = JSON.parse(localStorage.getItem("personaje_ultimo"))
      // console.log(personaje_LS)
      if (personaje_LS != null)
        setPersonajeDetalle(personaje_LS)
    }
  , [])

  //FUNCION DE CUANDO PRESIONA UN BOTON PARA SELECCIONAR
  const SeleccionarPersonaje = (e)=>
  {
    setPersonajeDetalle(e)
    let seleccion = e
    localStorage.setItem("personaje_ultimo", JSON.stringify(seleccion))
  }

  // no supe como pasar toda la info asi normal
  // regresa info del personaje segun la seleccion
  const infoPersonaje = ()=>
  {
    if (personaje=="Michael")
      return {
        nombre:"Michael De Santa",
        image:"/card-michael.jpg",
        edad:"48",
        aliases:"M",
        residencia:"Portola Drive, Rockford Hills",
        bio:`Exladrón de bancos, Michael aparenta tener todo a lo que un delincuente aspira: dinero, 
        una vida apacible, una familia y una gran casa en uno de los mejores barrios de Los Santos. 
        Sin embargo, esta fachada esconde una familia completamente disfuncional. Si bien Michael dice que se
        encuentra bajo la protección de testigos, esto es falso, en diferentes misiones del juego se confirma 
        que nunca estuvo bajo protección por el FIB. Experto en armas, su habilidad especial es 
        ralentizar el tiempo, lo que le dota de una precisión sumamente alta`
      }
    if (personaje=="Franklin")
      return {
        nombre:"Franklin Clinton",
        image:"/card-franklin.jpg",
        edad:25,
        aliases:"Frank, Frankie, F, FC, Mr. C, Mr. Clinton",
        residencia:"Forum Drive, Strawberry",
        bio:`Joven pandillero afroamericano que aspira a tener éxito en el mundo de la delincuencia y 
        salir de su barrio. Se dedica, junto con su amigo Lamar, a los embargos de autos de alta gama 
        para una empresa de venta de automóviles, sin embargo, a diferencia de éste, posee ambición, 
        prudencia y cerebro. Tras conocer a Michael en un fallido intento de embargo, siente admiración 
        por él y cree que su experiencia puede servirle para prosperar. Su habilidad especial es la 
        conducción, pudiendo ralentizar el tiempo cuando se halla a los mandos de un vehículo`
      }
    if (personaje=="Trevor")
      return {
        nombre:"Trevor Phillips",
        image:"/card-trevor.jpg",
        edad:"46",
        aliases:"T",
        residencia:"Zancudo Avenue, Sandy Shores",
        bio:`Antiguo piloto de la Fuerza Aérea Canadiense y exladrón de bancos, fue compañero de Michael 
        en sus golpes, hasta que este fingió su muerte, de modo que Trevor tuvo que comenzar a operar en s
        olitario. Sufre diversos trastornos psicológicos, razón por la cual fue expulsado en la fuerza aérea 
        y acabó decantándose por la vida criminal. Tales desórdenes convierten a Trevor en una persona 
        errática y violenta. Si bien posee grandes 
        talentos a la hora de manejar aeronaves, la habilidad especial de Trevor radica en su incontrolable 
        furia, lo que permite al jugador infligir doble daño a sus enemigos y, a su vez, no recibir daño alguno`
      }
    else 
      return {}
  }

  return (
    <>
      <Header/>
      <ListaItems
        CambiarPersonaje={SeleccionarPersonaje}
      />
      <DetalleItems
        pj={personaje}
        info={infoPersonaje()}
      />
      <Footer/>
    </>
  )
}

export default App
