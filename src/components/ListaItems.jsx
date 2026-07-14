import ItemCard from "./ItemCard"

function ListaItems()
{
    return (
        <>
        <div class="container-fluid my-2 w-75 mx-auto
        ">
            <p> <h3>Tarjetas</h3> </p>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <ItemCard titulo="Elemento A"/>
                    </div>
                    <div class="col">
                        <ItemCard titulo="Elemento demasiado alargado"/>
                    </div>
                    <div class="col">
                        <ItemCard titulo="???"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <ItemCard/>
                    </div>
                    <div class="col">
                        <ItemCard/>
                    </div>
                    <div class="col">
                        <ItemCard titulo="Tambien otro elemento"/>
                    </div>
                </div>
            </div>

        </div>
        <hr></hr>
        </>
    )
}

export default ListaItems