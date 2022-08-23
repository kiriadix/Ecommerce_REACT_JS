import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importamos nuestros commponentes
import NavBarIni from "./components/NavBar";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarIni /> }>

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
