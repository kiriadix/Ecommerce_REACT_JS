import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./style.css"
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const {items, removeItem, clear, GetTotalPrice} = useContext(CartContext); 

  return (
    <Container>
        <Col>
            {
              items.length === 0 ? 
              (
                <>
                  <Row className='align-items-center justify-content-center'>
                      <h3 className='redText'>EL CARRITO ESTA VACÍO</h3>
                  </Row>
                  <Row className='align-items-center justify-content-center' md='auto'>
                    <Link to={`/`}>
                      <Button variant="dark" onClick={clear}>VER PRODUCTOS</Button>
                    </Link>
                  </Row>
                </>
                
              ) : 
              (
                <> 
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
                </>                
              )
            }
        </Col>
    </Container>
  )
}

export default Cart