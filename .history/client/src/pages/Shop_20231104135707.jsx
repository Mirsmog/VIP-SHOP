import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Shop() {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
}

export default Shop;
