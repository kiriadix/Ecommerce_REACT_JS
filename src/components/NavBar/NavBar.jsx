import logo from '../../logo.svg';
import { Navbar, Container } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget"
import './style.css'


const NavBarIni = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> ALDO E-COMMERCE</Navbar.Brand>
            <CartWidget element='4'/>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarIni