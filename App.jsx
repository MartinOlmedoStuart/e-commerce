import NavigationBar from "./components/NavigationBar";
import Container from "./containers/Container";
import Footer from "./components/Footer";
import StarWars from "./components/StarWars";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {

  return (
    <>
    < NavigationBar/>
    {/* < StarWars /> */}
    < ItemDetailContainer />
    {/* <Container/> */}
    <Footer />
    </>
  );
}

export default App;
