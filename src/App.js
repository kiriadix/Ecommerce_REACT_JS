import './App.css';

//Importamos nuestros commponentes
import NavBarIni from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">

      <NavBarIni elementos='4'/>
      <ItemListContainer greeting='HOLA SOY UN SALUDO'/>

    </div>
  );
}

export default App;
