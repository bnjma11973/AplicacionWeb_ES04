/// CABECERA
import imgHeader from "../assets/gta5-banner.png";

function Header()
{
    return (
        <>
            <div class="container-fluid my-2 mx-auto">
                
                <div class=" container
                position-relative
                ">
                    <div class="container
                    ">
                        <img src={imgHeader} 
                            class="img-fluid" 
                            alt="..."/>
                        <div class=" container
                        d-block w-auto text-white
                        position-absolute bottom-0
                        ">
                            <p class="h1 p-2">
                                Landing page de GTA5
                            </p>
                            {/* <p class="lead">
                                (banner temporal)
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
             <hr></hr>
        </>
    )
}

export default Header