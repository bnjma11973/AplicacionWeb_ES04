///
import imgHeader from "../assets/headertest_2.jpg";
// el headertest.png esta muy alto asi que lo cambie

function Header()
{
    return (
        <>
            <div class="container-fluid my-2">
                
                <div class=" container
                position-relative
                ">
                    <div class="container
                    ">
                        <img src={imgHeader} class="img-fluid" alt="..."></img>
                        <div class=" container
                        d-block w-auto 
                        position-absolute bottom-0
                        border border-3 border-info bg-white
                        ">
                            <p class="h1">
                                Titulo de la Landing page
                            </p>
                            <p class="lead">
                                (banner temporal)
                            </p>

                        </div>
                    </div>
                    {/* <hr></hr> */}
                </div>
            </div>
            
        </>
    )
}

export default Header