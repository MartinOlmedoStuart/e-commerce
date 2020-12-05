import logo from './logo.svg';
import './styles/app.css';
import Hero from "./components/Hero";
import Vans from "./assets/vans.jpg";
import NavigationBar from "./components/NavigationBar";

function App() {
  const saludar= ()=>{
    alert("Holaaaa");
  }
  return (
    <>
    {/* <Hero />
    <img src={Vans} alt="Zapatillas Vans"/>
    <button onClick={saludar}>Saludar</button> */}
    < NavigationBar />
    </>
  );
}

export default App;
