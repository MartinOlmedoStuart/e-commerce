// import logo from './logo.svg';
// import './styles/app.css';
// import Hero from "./components/Hero";
// import Vans from "./assets/vans.jpg";
import NavigationBar from "./components/NavigationBar";
// import Modal from "./components/Modal/modal";
import Container from "./components/Container";
import Listitems from "./components/ListItems";
import Footer from "./components/Footer";

function App() {
  const saludar= ()=>{
    alert("Holaaaa");
  }
  return (
    <>
    {/* <Hero />
    <img src={Vans} alt="Zapatillas Vans"/>
    <button onClick={saludar}>Saludar</button> */}
    < NavigationBar titulo="Fede" action={saludar} />
    {/* <a href="#modal">Abrir Modal</a>
    <Modal>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos asperiores quisquam vitae cumque maxime reiciendis ratione reprehenderit sint dolorum amet odio, sunt unde quidem? Ut, reprehenderit? Doloremque, ipsam corrupti.</p>
    </Modal> */}
    <h1 id="fav">NUESTROS FAVORITOS</h1>
    <Container>
     <Listitems url="https://s3.surfinc.co/1274-product_ss19/merino-beanie.jpg" nombre="Gorro Merino Gris Claro" precio="$31"/>
     <Listitems url="https://s1.surfinc.co/2325-product_ss19/classy-hoodie-black.jpg" nombre="Sudadera con capucha" precio="$59"/>
     <Listitems url="https://s1.surfinc.co/2296-product_ss19/sunset-seeker-longsleeve.jpg" nombre="SUNSET SEEKER MANGA LARGA" precio="$28"/>
     <Listitems url="https://s2.surfinc.co/2246-product_ss19/linen-shirt.jpg" nombre="Camisa de Lino" precio="$67"/>
    </Container>
    <Container>
     <Listitems url="https://s1.surfinc.co/2554-product_ss19/knitted-v-sweater-purple-haze.jpg" nombre="Jersey de punto de punto" precio="$63"/>
     <Listitems url="https://s2.surfinc.co/2269-product_ss19/high-hopes-tee-space-black.jpg" nombre="CAMISETA HIGH HOPES" precio="$19"/>
     <Listitems url="https://s3.surfinc.co/1078-product_ss19/grey-tee.jpg" nombre="CAMISETA GRIS" precio="$21"/>
     <Listitems url="https://s2.surfinc.co/2551-product_ss19/srf-tee.jpg" nombre="SRF TEE Stone GRIS" precio="$67"/>
    </Container>
    <Footer />
    </>
  );
}

export default App;