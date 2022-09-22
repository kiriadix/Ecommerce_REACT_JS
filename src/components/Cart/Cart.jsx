import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Cart = () => {
  const {items, removeItem} = useContext(CartContext);
  return (
    <div>Cart
        <div>
            {items.map(item=>(
                <div key={item.id}>
                    <p >{item.title} - {item.quantity}</p>
                    <button onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cart