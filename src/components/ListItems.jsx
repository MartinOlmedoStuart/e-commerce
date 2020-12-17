
import CarroWidget from "./CarroWidget";
import "./Listitems.css";


function Listitems({url, precio, nombre}){

   function addToCart(){
       alert("Has agregado un item nuevo al carro");
   };
    
    return(
        <>
     
        <div className="hol">
            <div>

                <img className="img2 toggle2" src={url} alt=""/>
                <img className="img3" src="https://image.flaticon.com/icons/png/512/1/1393.png" alt=""/>
                <img onClick={addToCart} className="img-producto" src={url} alt="" />
               
                <div className="nombre-precio">
                    <h1>{nombre}</h1>
                    <h2>{precio}</h2>
                </div>
            </div>
           
        </div>
        </>
    )
}




export default Listitems;