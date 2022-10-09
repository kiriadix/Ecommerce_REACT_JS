import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { db } from "../../utils/firebase";
import { collection, addDoc, writeBatch, doc } from "firebase/firestore";
import "./style.css"
import { useState } from 'react';

const CheckoutForm = ({ items, GetTotalPrice, setShow , clear}) => {

  const [btn, setBtn] = useState({label:"COMPRAR", disabled:false});

  function sendOrder(event) {
    //prevenimos el evento submit
    event.preventDefault();

    //deshabilitamos el boton de compra y cambiamos su label
    setBtn({label:"..PROCESANDO", disabled:true});

    //Creamos la referencia de donde guardaremos la información de la orden
    const queryRef = collection(db, "orders");
    const batch = writeBatch(db);

    //arreglo con formato de items orden
    const itemsOrden = [];

    //Recorremos items para crear las consultas de actualizacion de stock y el formato correcto de la orden
    items.forEach(element => {

      batch.update(doc(db, "items", element.id), {"stock": element.stock - element.quantity});

      itemsOrden.push({
        id:element.id,
        title:element.title,
        quantity:element.quantity,
        price:element.price
      });
      
    });

    //Creamos objeto con con los datos de la orden
    const order ={
        buyer:{
        name:event.target[0].value,
        phone:event.target[1].value,
        email:event.target[2].value
        },
        items: itemsOrden,
        date:new Date().toLocaleDateString(),
        total: GetTotalPrice()
    }

    //Creamos la orden en firebase
    addDoc( queryRef, order).then(response => {

      //actualizamos los stocks
      batch.commit();

      //mostramos resultado al user
      setShow({
        show:true, 
        variant:"success", 
        text1:`LA ORDEN: ${response.id}`, 
        text2:"SE PROCESÓ CORECTAMENTE"
      });

      //Vaciamos el carrito
      clear();

    }).catch((e)=>{

      //levantamos alerta al user
      setShow({
        show:true, 
        variant:"danger", 
        text1:`OCURRIÓ UN ERROR`, 
        text2:"LA ORDEN NO PUDO SER PROCESADA"
      });

    }).finally(()=>{
      // cambiamos el estado del boton
      setBtn({label:"COMPRAR", disabled:false});
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

            <div className='d-flex justify-content-end'>
              <Button id='comprar' variant="success" type="submit" disabled={btn.disabled}>
                  {btn.label}
              </Button>
            </div>
        </Form>
      </Col>
      <Col xs={3}></Col>

    </>
  )
}

export default CheckoutForm