import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ItemCount from '../ItemCount/ItemCount';
import "./style.css"

const ItemDetail = ({item}) => {
 
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
            </Row>
            <hr></hr>
            <Row>
              {<ItemCount stock={item.stock} onAdd={''}/>}
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