/// DETALLE DE TARJETA SELECCIONADA
import {useState} from "react"

function DetalleItems({personajeActual, personajeInfo})
{
    return (
        <>
            <div class=" container my-2">
                <div class="row">
                    <div class="col-2">
                        <img 
                            src={personajeInfo.image}
                            class="img-fluid"
                            alt={personajeActual}
                        ></img>
                    </div>
                    <div class="col-6">
                        <h3>
                            {(personajeActual != "") ? 
                            personajeInfo.nombre : "Seleccione un personaje"}
                        </h3>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default DetalleItems