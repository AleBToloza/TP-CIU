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
      <Row>
        <Col>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.66556451432!2d-58.72987318837595!3d-34.663148060526865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf6fde733da9%3A0xf0197047ac5903c6!2sClub%20Martino%20Merlo!5e0!3m2!1ses!2sar!4v1721358665889!5m2!1ses!2sar"
              width="700" 
              height="550" 
              frameBorder="0" 
              style={{ border:0 }} 
              allowFullScreen>
            </iframe>
          </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
