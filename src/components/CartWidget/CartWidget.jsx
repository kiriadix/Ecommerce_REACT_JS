import carrito from './carrito.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
  const {GetTotalItems} = useContext(CartContext); 
  return (
    <div>
      <Link to={'/cart'} style={{ textDecoration: 'none' }}>
        <img src={carrito} alt='carrito'/>
        <span className='colornav'>{GetTotalItems()}</span>
      </Link>
    </div>
  )
}

export default CartWidget