import {useState} from "react"
import DetalleItems from "./DetalleItems"

function ItemCard(props)
{   
    return (
        <>
        <div class="card">
            <img
                src={(props.image != undefined) ?
                    props.image : ""
                } 
                class="img-fluid" 
                alt="">
                </img>
            <div class="card-body">
                <h4 class="card-title">
                    {(props.titulo != undefined) ? 
                        props.titulo : "Elemento"}
                    {/* alomejor tengo que cambiar esto despues */}
                </h4>
                {/* <p class="card-text">
                    {(props.descripcion != undefined) ?
                        props.descripcion : "Descripcion"}
                </p> */}
                {/* <p>
                    Mas informacion
                </p> */}
                <button type="button" id=""
                class="btn btn-secondary btn-sm"
                    >Mas Informacion
                </button>
            </div>
        </div>
        
        </>
    )
}

export default ItemCard