import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Menu = () => {
  const [cafeData, setCafeData] = useState([]);
  const [itemsSeleccionados, setItemsSeleccionados] = useState({});
  const [precioTotal, setPrecioTotal] = useState(0);
  const [contadorItem, setContadorItem] = useState(0);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => setCafeData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const anadirItem = (name) => {
    setItemsSeleccionados(prevItems => ({
      ...prevItems,
      [name]: (prevItems[name] || 0) + 1
    }));
    setContadorItem(contCarrito => contCarrito + 1);
  };

  const calcularTotal = () => {
    const total = Object.entries(itemsSeleccionados).reduce((total, [name, cantd]) => {
      const item = cafeData.find(item => item.title === name);
      return total + (item.id * cantd);
    }, 0);
    setPrecioTotal(total);
  };

  const resetearEstados = () => {
    if (contadorItem == 0) {alert("Nada para pagar, carrito vacío. :/"); }
    else if (precioTotal == 0) {
      alert("Hay algo en el carrito, pero desconozco el monto. Clickee en 'Calcular Total' y luego realice la compra, por favor.");
    }
    else {
      setItemsSeleccionados({});
      setPrecioTotal(0);
      setContadorItem(0);
      alert("¡Gracias por su compra! :D");
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Menú</h2>
        </Col>
      </Row>
      <Row>
        {cafeData.filter(cafe => cafe.id <= 20).map(cafe => (
          <Col md={4} key={cafe.id} className="col-xxl-3">
            <Card>
              <Card.Img variant="top" src={cafe.image} alt={cafe.title} />
              <Card.Body>
                <Card.Title>{cafe.title}</Card.Title>
                <Card.Subtitle>{cafe.description}</Card.Subtitle>
                <Card.Subtitle><h5><b className="text-primary">${cafe.id}</b></h5></Card.Subtitle>
              </Card.Body>
              <Button variant="primary" onClick={() => anadirItem(cafe.title)}>Añadir</Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="dark" onClick={calcularTotal}>Calcular Total</Button>
          {precioTotal > 0 && <p>Total A Pagar: ${precioTotal}</p>}
          <p>Productos En El Carrito: {contadorItem}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="success" onClick={resetearEstados} className="ml-3">Realizar Compra</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
