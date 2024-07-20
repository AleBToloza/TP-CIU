import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Galeria = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => setCoffeeData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Galería</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
        <Card className='w-100'>
            <h5>Te Enseñamos a Hacer Nuestro Capuchino: </h5>
            <iframe 
              width="w-100" 
              height="315" 
              src="https://www.youtube.com/embed/64HdpGBhnqE" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='w-100'>
          <h5>Te Enseñamos a Hacer Nuestro Frapino Moca: </h5>
          <iframe 
              width="w-100" 
              height="315" 
              src="https://www.youtube.com/embed/PYsu64Jpy3Q" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Row>
          <Col>
            <h4>Nuestros Servicios: </h4>
          </Col>
        </Row>
        <Row>
          {coffeeData.map(coffee => (
            <Col md={4} key={coffee.id} className="w-25" className="col-xxl-3">
              <Card md={4} >
                <Card.Img variant="top" src={coffee.image} alt={coffee.title} />
                <Card.Body>
                  <Card.Title>{coffee.title}</Card.Title>
                  <Card.Subtitle>{coffee.description}</Card.Subtitle>
                </Card.Body>
                <Card.Subtitle>{'Ingredientes: ' + coffee.ingredients.map(Ingredient=>(Ingredient + ' '))}</Card.Subtitle>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
};


export default Galeria;

