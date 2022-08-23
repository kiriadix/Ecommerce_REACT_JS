import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';

const NavBarIni = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              src="https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> ALDO E-COMMERCE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default NavBarIni