/// LISTA DE TARJETAS
import ItemCard from "./ItemCard"

function ListaItems({CambiarPersonaje})
{
    return (
        <>
            <div class="container-fluid 
            w-75 mx-auto my-2
            ">
                <h2>Personajes</h2>
                {/* CONTENEDOR DE TARJETAS */}
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <ItemCard
                                seleccionarPersonaje={
                                    (e)=> CambiarPersonaje(e)}
                                titulo = "Michael"
                                image = {"/card-michael.jpg"}
                            />
                        </div>
                        <div class="col">
                            <ItemCard 
                                seleccionarPersonaje={
                                    (e)=> CambiarPersonaje(e)}
                                titulo = "Franklin"
                                image = {"/card-franklin.jpg"}
                            />
                        </div>
                        <div class="col">
                            <ItemCard
                                seleccionarPersonaje={
                                    (e)=> CambiarPersonaje(e)}
                                titulo = "Trevor"
                                image = {"/card-trevor.jpg"}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <hr></hr>
        </>
    )
}

export default ListaItems