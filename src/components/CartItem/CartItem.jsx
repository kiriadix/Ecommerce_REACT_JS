import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./style.css"

const CartItem = ({id, picture, quantity, title, price, removeItem}) => {
  return (
    <>
        <Col>
            <img className="imgCard" src={picture} alt={title} />
        </Col>
        <Col><h4>{title}</h4></Col>
        <Col><h4>${price}</h4></Col>
        <Col><h4>{quantity}</h4></Col>
        <Col><h4>${price*quantity}</h4></Col>                  
        <Col>
            <Button variant="danger" onClick={()=>removeItem(id)}>Eliminar</Button>
        </Col> 
    </>
  )
}

export default CartItem