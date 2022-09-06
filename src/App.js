import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//Importamos nuestros commponentes
import NavBarIni from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <div className="App">

        <NavBarIni elementos='4'/>

        <ItemListContainer />
        
      </div>
      
    </>
  );
}

export default App;
