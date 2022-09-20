import logo from '../../logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom';
import './style.css'


const NavBarIni = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='distancia' sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" >
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            /> ALDO E-COMMERCE
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >INICIO</Nav.Link>
            <NavDropdown title="CATEGORÍAS" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categorias/2_puertas" >
                Roperos 2 Puertas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categorias/3_puertas" >
                Roperos 3 Puertas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarIni