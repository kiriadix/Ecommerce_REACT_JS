import './App.css';

//Importamos nuestros commponentes
import NavBarIni from "./components/navegacion/NavBar";
import ItemListContainer from "./components/contenedor/ItemListContainer"

function App() {
  return (
    <div className="App">

      <NavBarIni elementos='4'/>
      <ItemListContainer greeting='HOLA SOY UN SALUDO'/>

    </div>
  );
}

export default App;
