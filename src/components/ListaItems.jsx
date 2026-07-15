import DetalleItems from "./DetalleItems"
import ItemCard from "./ItemCard"

import imgMichael from "../assets/card-michael.jpg"
import imgFranklin from "../assets/card-franklin.jpg"
import imgTrevor from "../assets/card-trevor.jpg"


function ListaItems()
{
    return (
        <>
            <div class="container-fluid 
            w-75 mx-auto
            ">
                <p> <h2>Personajes</h2> </p>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <ItemCard 
                                titulo="Michael"
                                image= {imgMichael}
                            />
                        </div>
                        <div class="col">
                            <ItemCard 
                                titulo="Franklin"
                                image = {imgFranklin}
                            />
                        </div>
                        <div class="col">
                            <ItemCard
                                titulo="Trevor"
                                image={imgTrevor}
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