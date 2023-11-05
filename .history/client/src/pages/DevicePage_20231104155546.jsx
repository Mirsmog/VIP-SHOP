import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import star from '../assets/star.svg';
import Row from 'react-bootstrap/esm/Row';

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
          <Row className='d-flex align-items-center flex-column'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                backgroundImage: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}

export default DevicePage;
