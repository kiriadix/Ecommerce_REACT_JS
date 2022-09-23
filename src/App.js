import './App.css';
import React from 'react';

//Importamos nuestros commponentes
import NavBarIni from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBarIni/>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categorias/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
