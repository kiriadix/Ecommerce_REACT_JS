import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import "./style.css"

const CheckoutForm = ({ items, GetTotalPrice, setIdOrder }) => {

  function sendOrder(event) {
    //prevenimos el evento submit
    event.preventDefault();

    //Creamos objeto con con los datos de la orden
    const order ={
        buyer:{
        name:event.target[0].value,
        phone:event.target[1].value,
        email:event.target[2].value
        },
        items: items,
        total: GetTotalPrice()
    }

    //Creamos la referencia de donde guardaremos la información de la orden
    const queryRef = collection(db, "orders");

    //Creamos el documento en firebase
    addDoc( queryRef, order).then(response => {
      setIdOrder(response.id);
    })
    
  }

  return (
    <>
      <Col xs={3}></Col>
      <Col className='form-checkout'>
        <Form onSubmit={sendOrder}>
            <Form.Label> <h4> DATOS DE COMPRA </h4> </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre Apellido:</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Nombre y Apellido" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Télefono:</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Teléfono" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo:</Form.Label>
                <Form.Control type="email" placeholder="Ingrese Correo" />
            </Form.Group>

            <Button variant="success" type="submit">
                COMPRAR
            </Button>
        </Form>
      </Col>
      <Col xs={3}></Col>

    </>
  )
}

export default CheckoutForm