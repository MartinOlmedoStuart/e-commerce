import {useState} from "react";



function ItemCount({stock}){

   const [band, setBand] = useState(true)

    const [contador, setContador] = useState(1);
    function disminuirContador(){
        const consultarStock= new Promise((resolve, reject) => {
            setBand(false);
            setTimeout(()=>{
                if(contador > 1){
                resolve( setContador(contador-1));
                }
        if(contador>1){
            setContador(contador-1);
        }
        setBand(true);
        },2000)
        })
    };
    function aumentarContador(){
        const consultarStock= new Promise((resolve, reject) => {
            setBand(false);
            setTimeout(()=>{
                if(contador < stock){
                resolve( setContador(contador+1));
                }
                else{
                    reject(alert("¡Uy! No tenemos más stock de este producto para agregarlo al carrito"))
                }
            setBand(true);
            },2000)
        })
      
    };

    return(
        <>
        
        <div className="contador-items">
            <img className="menos" onClick={disminuirContador} src="https://www.iconsdb.com/icons/preview/gray/minus-7-xxl.png" alt=""/>
            {
            band ? <span>{contador}</span> : <span><img id="refresh" src="https://cdn.lowgif.com/full/81ba4d9c4c799e48-.gif" alt=""/></span>
            
            }
           
            <div>
                <img className="menos" onClick={aumentarContador} src="https://www.iconsdb.com/icons/preview/gray/minus-7-xxl.png" alt=""/>
                <img id="menos" onClick={aumentarContador} src="https://www.iconsdb.com/icons/preview/gray/minus-7-xxl.png" alt=""/>
            </div>
            
        </div> 
    </>
    )
}



export default ItemCount;