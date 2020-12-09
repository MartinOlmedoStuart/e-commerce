import CarroWidget from "./CarroWidget";


function CartWidget(){
    
    return(
        <>
        <img onClick={Widget} src="https://img.icons8.com/material-rounded/452/shopping-cart.png" alt="" className="carrito"/>
        <CarroWidget />
        </>
    )
}

function Widget(){
    const Compras=document.querySelector(".carro-desplegable");
    Compras.classList.toggle("toggle");
};

export default CartWidget;