/// DETALLE DE TARJETA SELECCIONADA
import {useState} from "react"

function DetalleItems(props)
{
    return (
        <>
            <div class=" container w-75 my-2 mx-auto">
                <div class="row">
                    <div class="col-2">
                        <img 
                            src={props.info.image}
                            class="img-fluid"
                            alt={props.pj}
                        ></img>
                    </div>
                    <div class="col-6">
                        <h3>
                            {(props.pj != "") ? 
                            props.info.nombre : "Seleccione un personaje"}
                        </h3>
                        <p>
                            {props.info.bio}
                        </p>
                    </div>
                    <div class="col-4">
                        <p>
                            <strong>{(props.pj!="") ? "Edad: " : ""} </strong>
                            {props.info.edad}
                        </p>
                        <p>
                            <strong>{(props.pj!="") ? "Alias: " : ""} </strong>
                            {props.info.aliases}
                        </p>
                        <p>
                            <strong>{(props.pj!="") ? "Vive en" : ""} </strong>
                            {props.info.residencia}
                        </p>
                    </div>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default DetalleItems