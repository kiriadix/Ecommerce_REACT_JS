import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./style.css"
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Cart = () => {
  const {items, removeItem, clear, GetTotalPrice} = useContext(CartContext);

  const [idOrder, setIdOrder] = useState("");

  return (
    <Container>
      <Row>
        {idOrder && <p> Su orden fue creada exitosamente con el id: {idOrder} </p>}
      </Row>
      <Row>
        {
          items.length === 0 ? 
          (
            <>
              <Col>
                <Row className='align-items-center justify-content-center'>
                    <h3 className='redText'>EL CARRITO ESTÁ VACÍO</h3>
                </Row>
                <Row className='align-items-center justify-content-center' md='auto'>
                  <Link to={`/`}>
                    <Button variant="dark" onClick={clear}>VER PRODUCTOS</Button>
                  </Link>
                </Row>
              </Col>
            </>
            
          ) : 
          (
            <>
              <Col> 
                <Row className='align-items-center' >
                  <Col></Col>
                  <Col><h6>Producto</h6></Col>
                  <Col><h6>Precio</h6></Col>
                  <Col><h6>Cantidad</h6></Col>
                  <Col><h6>Total</h6></Col>                   
                  <Col></Col> 
                </Row>
                {items.map(item=>(
                    <Row className='itemCard align-items-center' key={item.id}>
                      <CartItem 
                        id={item.id}
                        title={item.title}
                        quantity={item.quantity}
                        description={item.description}
                        price={item.price}
                        picture={item.picture}
                        removeItem={removeItem}
                      />  
                    </Row>
                ))}
                <Row className='align-items-center justify-content-center'>
                  <Col><h2>TOTAL: $ {GetTotalPrice()}</h2></Col>
                  <Col>
                    <Button variant="danger" onClick={clear}>VACIAR CARRITO</Button>
                  </Col> 
                </Row>
                <hr />
                <Row>
                  <CheckoutForm items={items} GetTotalPrice={GetTotalPrice} setIdOrder={setIdOrder} />
                </Row>
              </Col>
            </>                
          )
        }
      </Row>
    </Container>
  )
}

export default Cart