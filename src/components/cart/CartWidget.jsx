import cart from './cart.svg'

const CartWidget = ({element}) => {
  return (
    <div>
        <img src={cart}/> <span className='colornav'>{element}</span>
    </div>
  )
}

export default CartWidget