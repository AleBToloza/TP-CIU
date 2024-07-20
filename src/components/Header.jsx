import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">Cafetería Rosendo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/menu">
            <Nav.Link>Menú</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/galeria">
            <Nav.Link>Galería</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contacto">
            <Nav.Link>Contacto</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
