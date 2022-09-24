import carrito from './carrito.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
  const {totalItems} = useContext(CartContext); 
  return (
    <div>
      <Link to={'/cart'} style={{ textDecoration: 'none' }}>
        <img src={carrito} alt='carrito'/>
        <span className='colornav'>{totalItems}</span>
      </Link>
    </div>
  )
}

export default CartWidget