import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>Integrantes del grupo: Marcos Valentín Cornejo Pereira, Alejandro Bertoldi Toloza, Rodrigo Rotger</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
