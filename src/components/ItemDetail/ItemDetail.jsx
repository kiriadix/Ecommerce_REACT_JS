import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount';
import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import "./style.css"

const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext);

  const onAdd = (count) => {
    addItem(item,count);
  }
 
  return (
    <>
      <Container>
        <Row>

          <Col>
            <img className='img_product_page' src={item.picture} alt={item.title} />
          </Col>

          <Col>
            <Row>
              <h1>{item.title}</h1>
              <h6>Disponibilidad: {item.stock} </h6>
            </Row>

            <hr></hr>

            <Row className='price_color'>
              <h3>${item.price}</h3>
            </Row>

            <hr></hr>

            <Row>
              {<ItemCount stock={item.stock} onAdd={onAdd}/>}
            </Row>
          </Col>

        </Row>

        <Row>
          <h4>{item.description}</h4>
        </Row>

      </Container>
    </>
  )
}

export default ItemDetail