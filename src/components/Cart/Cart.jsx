import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./style.css"

const Cart = () => {
  const {items, removeItem, clear} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let a = total;
    items.forEach(item => {
      a +=  parseInt(item.price)  * parseInt(item.quantity)
    });

    setTotal(a);

  }, [items])
  

  return (
    <Container>
        <Col>
            {items.map(item=>(
                <Row className='itemCard align-items-center' key={item.id}>
                  <Col>
                    <img className="imgCard" src={item.picture} alt={item.title} />
                  </Col>
                  <Col><h4>{item.quantity}</h4></Col>
                  <Col><h4>{item.title}</h4></Col>
                  <Col><h4>{item.price}</h4></Col>                  
                  <Col>
                    <Button variant="danger" onClick={()=>removeItem(item.id)}>Eliminar</Button>
                  </Col>          
                </Row>
            ))}
            {
              items.length === 0 ? 
              (
                <div></div>
              ) : 
              (
                <>
                  <Row className='align-items-center justify-content-center'>
                    <Col><h2>TOTAL: $ {total}</h2></Col>
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