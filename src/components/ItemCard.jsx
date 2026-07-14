// import {useState} from "react"

function ItemCard(props)
{
    let tituloTarjeta = "Elemento"
    if (props.titulo != undefined)
        tituloTarjeta = props.titulo
    
    return (
        <>
        <div class="card">
            {/* <img class="card-img-top" src="holder.js/100x180/" alt="Title" /> */}
            <div class="card-body">
                <h4 class="card-title">{tituloTarjeta}</h4>
                <p class="card-text">Descripcion del elemento</p>
            </div>
        </div>
        
        </>
    )
}

export default ItemCard