import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import MenuItem from './MenuItem';

const menuData = [
  { name: 'Café', description: 'Café negro', price: 2 },
  { name: 'Latte', description: 'Café con leche', price: 3 },
  // más ítems del menú...
];

const Menu = () => {

  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => setCoffeeData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const [selectedItems, setSelectedItems] = useState({});
  
  const handleSelectItem = (name) => {
    setSelectedItems(prevItems => ({
      ...prevItems,
      [name]: (prevItems[name] || 0) + 1
    }));
  };

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((total, [name, quantity]) => {
      const item = coffeeData.find(item => item.title === name);
      return total + (item.id * quantity);
    }, 0);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Menú</h2>
        </Col>
      </Row>
      <Row>
          {coffeeData.filter(coffee => coffee.id <=20).map(coffee => (
            <Col md={4} key={coffee.id} className="w-25" className="col-xxl-3">
              <Card md={4} >
                <Card.Img variant="top" src={coffee.image} alt={coffee.title} />
                <Card.Body>
                  <Card.Title>{coffee.title}</Card.Title>
                  <Card.Subtitle>{coffee.description}</Card.Subtitle>
                  <Card.Subtitle><h5><b class="text-primary">${coffee.id}</b></h5></Card.Subtitle>
                </Card.Body>
                <Button variant="primary" onClick={() => handleSelectItem(coffee.title)}>Añadir</Button>
              </Card>
            </Col>
          ))}
      </Row>
      <Row>
        {menuData.map(item => (
          <Col md={4} key={item.name}>
            <Card className="mb-4">
              <Card.Body>
                <MenuItem {...item} />
                <Button variant="primary" onClick={() => handleSelectItem(item.name)}>Añadir</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="success" onClick={calculateTotal}>Calcular Total</Button>
          <p>Total: {calculateTotal()}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
