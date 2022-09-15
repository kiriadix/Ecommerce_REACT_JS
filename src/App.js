import './App.css';

//Importamos nuestros commponentes
import NavBarIni from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <div className="App">

        <NavBarIni elementos='4'/>
        <ItemListContainer />

        <hr></hr>
        
        <ItemDetailContainer />

      </div>
    </>
  );
}

export default App;
