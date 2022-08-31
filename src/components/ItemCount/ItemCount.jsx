import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const ItemCount = ({stock, initial, onAdd}) => {

    const Suma = () => {
        if (initial < stock) {
            onAdd(+1)
        }
    }

    const Resta = () => {
        if (initial > 1) {
            onAdd(-1)
        }
    }

    return (
        <>  
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs lg="1">
                        <Button variant="outline-primary" onClick={Resta}> - </Button>
                    </Col>
                    <Col md="auto">{initial}</Col>
                    <Col xs lg="1">
                        <Button variant="outline-primary" onClick={Suma}>
                             + 
                        </Button>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="justify-content-center align-items-center">
                    <Col md="auto">
                        <Button variant="success"> Agregar al carrito </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemCount