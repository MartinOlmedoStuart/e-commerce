import {useState} from "react";

function ItemCount({stock}){

    const [contador, setContador] = useState(1);
    function disminuirContador(){
        if(contador>1){
            setContador(contador-1);
        }
    };
    function aumentarContador(){
        if(contador!= stock){
            setContador(contador+1);
        }
        else{
            alert("UY, NO TENEMOS MAS STOCK DE ESE PRODUCTO")
        }
    };

    return(
        <>
        <div className="contador-items">
            <img className="menos" onClick={disminuirContador} src="https://www.iconsdb.com/icons/preview/gray/minus-7-xxl.png" alt=""/>
            <span>{contador}</span>
            <div>
                <img className="menos" onClick={aumentarContador} src="https://www.iconsdb.com/icons/preview/gray/minus-7-xxl.png" alt=""/>
                <img id="menos" onClick={aumentarContador} src="https://www.iconsdb.com/icons/preview/gray/minus-7-xxl.png" alt=""/>
            </div>
            
        </div> 
    </>
    )
}

export default ItemCount;