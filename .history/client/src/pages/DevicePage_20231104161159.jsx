import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Card from 'react-bootstrap/esm/Card';
import star from '../assets/star.svg';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

function DevicePage() {
  const device = {
    id: 8,
    name: 'iphone 12 max pro',
    price: 98000,
    rating: 5,
    img: 'https://www.tradeinn.com/f/13782/137821846/apple-iphone-12-pro-max-6gb-128gb-67-%D0%B4%D1%8E%D0%B9%D0%BC%D0%B0.jpg',
  };

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className='d-flex align-items-center flex-column text-center'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                width: 240,
                backgroundImage: `url(${star})`,
                height: 240,
                fill: 'currentcolor',
                fontSize: 64,
                backgroundSize: 'cover',
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>from:{device.price}$</h3>
            <Button variant='outline-dark'>Add to cart</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DevicePage;
