import Item from "../Item/Item"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./style.css"

const ItemList = ({items}) => {

  return (
    <>
        <Container>
            <Row className="justify-content-center align-items-center">

                { items.map((articulo) => {
                    return (
                        <Col md="auto" className="producto">
                            <Item
                                key={articulo.id}
                                title={articulo.title}
                                description={articulo.description}
                                price={articulo.price}
                                picture={articulo.picture}
                            />
                        </Col>
                    )
                }) }
            </Row>
        </Container>
    </>
  )
}

export default ItemList