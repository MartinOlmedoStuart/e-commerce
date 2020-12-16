import logo from "../assets/logo.png";
import './NavigationBar.css';
import CartWidget from "./CartWidget";





function NavigationBar () { 

    return(
  <div className="container">
    <div className="descuentos">
      <p>Black Friday Promo 🔐💻 Descuentos De Hasta 30% 💰🛒🙈</p>
    </div>
    <div className="orden">
      <div className="izq">
        <div className="mundo">
                <img className="mundo" src="https://i.pinimg.com/originals/60/0a/cc/600acc714e06c25c46fa55e8d799eb25.png" alt=""/>
                <p>
                CORDOBA, ARGENTINA
                </p> 
        </div>
      </div>
      <div  className="med">
        <span className="logo">
          <img src={logo} id="logo" alt=""/>
        </span>
        <ul className="linked">
              <li><a href="" >Hombre</a></li>
              <li><a href="">Mujer</a></li>
              <li><a href="">Niño</a></li>
              <li><a href="">Surf</a></li>
              <li><a href="">Contacto</a></li>
            </ul>
         
      </div>
      <div  className="der">

        <CartWidget />

     
      </div>
    </div>

   
  </div>
    )
}

window.onscroll = function() {myFunction()};

function myFunction() {

  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("logo").className = "test";
  } else {
    document.getElementById("logo").className = "";
  }
}

export default NavigationBar;