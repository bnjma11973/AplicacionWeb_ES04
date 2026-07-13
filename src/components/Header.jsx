///
import miImagen from "../assets/headertest.png";

function Header()
{
    return (
        <>
            <div class="container-fluid p-2">
                <div class=" container 
                position-relative
                ">
                    <div class="container
                    d-inline-block
                    ">
                         {/* IMAGEN */}
                        <img src={miImagen} class="img-fluid" alt="..."></img>
                    </div>
                    {/* TITULO Y SUBTITULO */}
                    <div class=" container
                    w-50
                    position-absolute bottom-0 left-20
                    bg-white
                    border border-3 border-primary
                    ">
                        <p class="h2">
                            Landing page de un tema que esta por verse...
                        </p>
                        <p class="lead">
                            (la imagen es de prueba)
                        </p>

                    </div>
                    <hr></hr>
                </div>
            </div>
            
        </>
    )
}

export default Header