import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState} from "react";
import { Link } from 'react-router-dom';


const ItemCount = ({stock, initial=1, onAdd}) => {

    const [count, setCount] = useState(initial)
    const [compra, setCompra] = useState(false)

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
        onAdd(count);
        setCompra(true);
    }

    return (
        <>  
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs="1" sm="1">
                        <Button variant="outline-primary" onClick={resta}>-</Button>
                    </Col>
                    <Col xs="2" sm="2">{count}</Col>
                    <Col xs="1" sm="1">
                        <Button variant="outline-primary" onClick={suma}>+</Button>
                    </Col>
                </Row>
                <Row><p></p></Row>
                <Row className="justify-content-center align-items-center">
                    <Col >
                        <Button variant="success" onClick={comprar}> Agregar al carrito </Button>
                    </Col>
                    {
                        compra === true &&
                        <Col>
                            <Link to={'/cart'}>
                                <Button variant="warning"> Ir al carrito </Button>
                            </Link>
                        </Col>
                    }
                    
                        
                    
                </Row>
            </Container>
        </>
    );
}

export default ItemCount