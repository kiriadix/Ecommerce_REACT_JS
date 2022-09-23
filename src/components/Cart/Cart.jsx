import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./style.css"
import { Link } from 'react-router-dom';

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
                        <Col>
                          <img className="imgCard" src={item.picture} alt={item.title} />
                        </Col>
                        <Col><h4>{item.quantity}</h4></Col>
                        <Col><h4>{item.title}</h4></Col>
                        <Col><h4>${item.price}</h4></Col>                  
                        <Col>
                          <Button variant="danger" onClick={()=>removeItem(item.id)}>Eliminar</Button>
                        </Col>          
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