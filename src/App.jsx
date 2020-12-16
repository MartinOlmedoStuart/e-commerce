import NavigationBar from "./components/NavigationBar";
import Container from "./containers/Container";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";

function App() {
  const[nombre, setNombre]=useState("Pedro");

  useEffect(() =>{
    console.log("Hola Mundo")
  }, [nombre])
  return (
    <>
    < NavigationBar/>
    <button onClick={()=> setNombre("Fede")}>{nombre} </button>
    <Container/>
    <Footer />
    </>
  );
}

export default App;
