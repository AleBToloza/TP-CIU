import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contacto = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Contacto</h2>
          <p>Dirección: Av Hipólito Yrigoyen 135, Merlo</p>
          <p>Teléfono: 011-23431810</p>
          <p>Horario: 6:00AM - 10:00PM</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
