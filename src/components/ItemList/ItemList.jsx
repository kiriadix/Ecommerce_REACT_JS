import Item from "../Item/Item"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./style.css"

const ItemList = ({items}) => {

  return (
    <>
        <Container>
            <Row className="align-items-center">

                { items.map((articulo) => {
                    return (
                        <Col md="auto" className="producto" key={articulo.id}>
                            <Item
                                id={articulo.id}
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