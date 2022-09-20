import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState} from "react";


const ItemCount = ({stock, initial=1, onAdd}) => {

    const [count, setCount] = useState(initial)

    const suma = () => {
        if (count < stock) {
            setCount(count + 1)
        }
        
    }

    const resta = () => {
        if (count > 1) {
            setCount(count - 1)
        }
        
    }

    const comprar = () => {
        onAdd(count)
    }

    return (
        <>  
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs lg="1">
                        <Button variant="outline-primary" onClick={resta}>-</Button>
                    </Col>
                    <Col md="auto">{count}</Col>
                    <Col xs lg="1">
                        <Button variant="outline-primary" onClick={suma}>+</Button>
                    </Col>
                </Row>
                <hr></hr>
                <Row className="justify-content-center align-items-center">
                    <Col md="auto">
                        <Button variant="success" onClick={comprar}> Agregar al carrito </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemCount