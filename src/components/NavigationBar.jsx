import logo from "../assets/logo.png";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';
// import NavDropdown from "react-bootstrap/NavDropdown";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';





function NavigationBar ({titulo}) { 
    return(
  <container>
    <div className="descuentos">
      <p>Black Friday Promo 🔐💻 Descuentos De Hasta 30% 💰🛒🙈</p>
    </div>
    <header className="logo">
      <div className="mundo">
          <img className="mundo" src="https://i.pinimg.com/originals/60/0a/cc/600acc714e06c25c46fa55e8d799eb25.png" alt=""/>
          <div>
          <p>CORDOBA, ARGENTINA</p> 
          </div>
      </div>
      <img src={logo} id="logo" alt=""/>
      <div className="carro">
      <img src="https://img.icons8.com/material-rounded/452/shopping-cart.png" alt="" className="carrito"/>
      <sub>0</sub>
      </div>
    </header>
    
    <div className="links">
        <ul>
          <li><a href="" >Hombre</a></li>
          <li><a href="">Mujer</a></li>
          <li><a href="">Niño</a></li>
          <li><a href="">Surf</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
    </div>
    <h1>{titulo}</h1>
  </container>
    )
}


export default NavigationBar;