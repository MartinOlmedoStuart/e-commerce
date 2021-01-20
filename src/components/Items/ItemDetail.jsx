import ItemCount from "./ItemCount";
import { matchPath, useHistory } from 'react-router-dom';
import {Store} from "../../store";
import {useState, useContext, useEffect} from "react";
import {Carro} from "../../carro"



function ItemDetail({item}){


const [bandera, setBandera] = useState(false);
const [data, setData] = useContext(Store);
const [abierto, setAbierto] = useContext(Carro);

let copia = data;

    // function mapeo(){
        
    //     for (let i =0; i< data.items.length; i++){
    //         if(data.items[i]===item.data.nombre){
    //             copia.items[i].cantidad=copia.items[i].cantidad+1;
    //             return true;
    //         }
    //     }
    //     return false;
    

      const handelClickCarro = () => {

     setAbierto(true);
   
        setData({...data, cantidad:data.cantidad+1, items:[...data.items, item]});
     
     
    
  };

  console.log(data);
  
    return( 
        <article>
            <div >
                <img id="img-detail" src={item.data.url} alt=""/>
            </div>
            
            <div className="flexor">
                <h2>Descripcion: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, rerum quas officia beatae debitis, cumque corrupti asperiores laboriosam dolores excepturi at illo eius, unde autem facilis eaque dolore est. Deleniti.</h2>
                <h2 className="precio-detail">Precio: {item.data.precio}    </h2>
                <button disabled={bandera} onClick={handelClickCarro} className="BtnACarro">{bandera ? "Item Agregado" : "Añadir al carrito"}</button>
            </div>
         
        </article>
    )
}



export default ItemDetail;