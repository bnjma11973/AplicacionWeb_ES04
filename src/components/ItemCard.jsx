/// TARJETA
// import {useState} from "react"

function ItemCard({image, titulo, seleccionarPersonaje})
{   
    return (
        <>
        <div class="card">
            <img
                src={(image != undefined) ?
                    image : ""}
                class="img-fluid" 
                alt="">
                </img>
            <div class="card-body">
                {/* CUERPO DE LA TARJETA */}

                <h4 class="card-title">
                    {(titulo != undefined) ?
                        titulo : "Elemento"}
                </h4>
                
                <button class="btn btn-secondary btn-sm"
                onClick={()=> seleccionarPersonaje(titulo)}
                    >Mas Informacion
                </button>
            </div>
        </div>
        
        </>
    )
}

export default ItemCard