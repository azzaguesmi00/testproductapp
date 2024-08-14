import React from 'react';
import './App.css';
import products from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap'; 


function App() {
  const firstName = "stranger"; 
  return (
    <div className="App">
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={4}>
              <Card className="product-card">
                <Image imageUrl={product.imageUrl} name={product.name} />
                <Card.Body>
                  <Name name={product.name} />
                  <Price price={product.price} />
                  <Description description={product.description} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="greeting-message">
        {firstName ? <h2>Hello, {firstName}!</h2> : <h2>Hello, there!</h2>}
        {firstName && <img src="https://images.app.goo.gl/HnYUkoAacGNPBxrW6" alt="Hello" className="greeting-image" />}
      </div>
    </div>
  );
}

export default App;