import cart from './cart.svg'
import { Link } from 'react-router-dom';


const CartWidget = ({t}) => {
  console.log(t)
  return (
    <div>
      <Link to={'/cart'} style={{ textDecoration: 'none' }}>
        <img src={cart}/> <span className='colornav'>{t}</span>
      </Link>
    </div>
  )
}

export default CartWidget