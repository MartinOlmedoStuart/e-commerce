import "./CarroWidget.css";
import CartItem from "./Items/CartItem";




function CarroWidget(){
    return(
        <div className="carro-desplegable">
            <div className="cdc">
                <img  className="cross" onClick={Widget} src="https://static.thenounproject.com/png/74835-200.png" alt=""/>
                <h1>Carrito de Compras</h1>
            </div>
        
            <CartItem url="https://s1.surfinc.co/1720-product_ss19/sunset-seeker-longsleeve.jpg" nombre="Buzo All Day (Negro, S)" precio="4.99"/>
            <CartItem url="https://s2.surfinc.co/1841-product_ss19/classy-hoodie-black.jpg" nombre="Sudadera Con Capucha" precio="3.699"/>
            <CartItem url="https://s1.surfinc.co/2619-product_ss19/merino-beanie.jpg" nombre="Gorro Merino Gris Claro" precio="$20"/>
           
            <div className="subtotal">
                <h2>Subtotal <span className="envio">(sin envio) </span> :</h2>
                <h2 className="prec">$1.999</h2>
            </div>
           
            <h2>Calcula el costo de tu envio:</h2>
            <form action="">
                <input type="text" placeholder="Código postal"/>
                <button>Aplicar</button>
            </form>
            <div className="total">
            <h1>Total:</h1>
            <h1>$1.999</h1>
            </div>
           
            <button id="btn-1">Iniciar Compra</button>
            <button id="btn-2">Seguir Comprando</button>
        </div>
    )
}

function Widget(){
    const Compras=document.querySelector(".carro-desplegable");
    Compras.classList.toggle("toggle");
};

export default CarroWidget;