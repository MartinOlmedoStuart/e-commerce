import { isElementOfType } from "react-dom/test-utils";
import "./Listitems.css";



function Listitems({url, precio, nombre}){
    const foto = ()=>{
        alert("Hola");
    };
       
    return(
        <div className="hol">
            <div >
                <img onClick={foto} className="img-producto" src={url} alt=""/>
                <div className="nombre-precio">
                    <h1>{nombre}</h1>
                    <h2>{precio}</h2>
                </div>
            </div>
            <img className="img2 toggle2" src="https://s3.surfinc.co/2619-home_default/merino-beanie.jpg" alt=""/>
        </div>
    )
}




export default Listitems;