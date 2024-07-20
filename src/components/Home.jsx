import React from 'react';
import { Container, Row, Col, Card, Button, CardBody } from 'react-bootstrap';
const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <h2>Bienvenidos a Cafetería Rosendo</h2>
          <Col>
                <i><h5><b>Cómo empezamos: </b></h5></i>
                  <b>Fundado en 1939 por <i>Rosendo Carrascal</i>, fue una de las primeras cafeterías en la zona oeste del gran Buenos Aires.</b>
                  <h6><b>Atendido por su mismo dueño, desde un principio, este se propuso a crear un lugar familiar donde pasar un buen momento o resguardarse del embrollo de la ciudad.</b></h6>
                  <h6><b>Al pasar los años, y dejar un legado, la familia Carrascal continúa atendiendo con el mismo amor y dedicación que lo hacía Rosendo.</b></h6>
                  <p>
                  <Card.Img class= "w-75" variant="top" src="https://www.franquiciasdecafe.com.mx/storage/2014/04/5-caracteristicas-de-una-cafeteria-exitosa.jpg" alt="Foto mostrando el interior de la cafetería" width="280"/>
                  </p>
          </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <h5>Salimos en la tele: </h5>
            <a href="https://www.youtube.com/watch?v=1h6YHAi1LdY" target="_blank" rel="noopener noreferrer">
            <Card.Img variant="top" src="https://i.ytimg.com/vi/1h6YHAi1LdY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgSChCMA8=&rs=AOn4CLARiQcthF-neoRo1-NtkG12Z4qRHw" alt="Descripción de la imagen" />
            https://www.youtube.com/watch?v=1h6YHAi1LdY
            </a>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
          <h5>Reseña de nuestra cafetería: </h5>
            <a href="https://www.youtube.com/watch?v=np0yw5tyJ0Q" target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src="https://i.ytimg.com/vi/52SvE-Hx-to/maxresdefault.jpg" alt="Descripción de la imagen" />
              https://www.youtube.com/watch?v=np0yw5tyJ0Q
            </a>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Organizá tu cumpleaños</h3>
            <Col className="mt-3" md={6}>
                <Card.Img class='rounded float-end' variant="top" src="https://estaderolashamacas.com/wp-content/uploads/2022/06/IMG_6038-scaled.jpg" alt="Foto mostrando globos, pasteles y luces" width="380"/>
            </Col>
            <Col className="mt-3"  md={6}>
                <Card.Img class='rounded float-start' mxvariant="top" src="https://globosfloresyfiestas.com/wp-content/uploads/2020/01/Rest-11-1-768x1024.jpeg" alt="Foto mostrando globos, pasteles y luces" width="380"/>
            </Col>
            <Col className="mt-4"  md={6}>
                <Card.Img class='rounded float-end' variant="top" src="https://globosfloresyfiestas.com/wp-content/uploads/2020/01/Rest-20-1-scaled.jpg" alt="Foto mostrando globos, pasteles y luces" width="380"/>
            </Col>
            <Col className="mt-4"  md={6}>
                <Card.Img class='rounded float-start' mxvariant="top" src="https://estaderolashamacas.com/wp-content/uploads/2022/06/IMG_0904-scaled.jpg" alt="Foto mostrando globos, pasteles y luces" width="380"/>
            </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h3>Contacto</h3>
          <p>Dirección: Av Hipólito Yrigoyen 135, Merlo</p>
          <p>Teléfono: 011-23431810</p>
          <p>Horario: 6:00AM - 10:00PM</p>
        </Col>
      </Row>
      <Row className="mt-3">
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

export default Home;
