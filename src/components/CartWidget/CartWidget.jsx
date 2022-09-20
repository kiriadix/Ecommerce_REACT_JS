import cart from './cart.svg'
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const value = 0;
  return (
    <div>
      <Link to={'/cart'} style={{ textDecoration: 'none' }}>
        <img src={cart}/> <span className='colornav'>{value}</span>
      </Link>
    </div>
  )
}

export default CartWidget