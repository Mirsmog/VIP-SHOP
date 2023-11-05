import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Card from 'react-bootstrap/esm/Card';
import star from '../assets/star.svg';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

const DevicePage = observer(() => {
  const [device, setDevice] = React.useState({ info: [] });
  const { id } = useParams();
  React.useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={import.meta.env.VITE_API_URL + device.img}
          />
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
            <h3>{device.price}$</h3>
            <Button variant='outline-dark'>Add to cart</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h2 className='mb-4'>Characteristics</h2>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              backgroundColor: index % 2 === 0 ? 'lightcyan' : '',
              padding: 10,
            }}
          >
            {info.title}: {info.desc}
          </Row>
        ))}
      </Row>
    </Container>
  );
});

export default DevicePage;
