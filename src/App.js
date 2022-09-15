import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//Importamos nuestros commponentes
import NavBarIni from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <NavBarIni carNum={0}/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>

    </div> 

  );
}

export default App;
