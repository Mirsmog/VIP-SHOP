import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';

const DeviceItem = ({ rating, img }) => {
  return (
    <Col md={3}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={img} />
        <div>
          <div>Apple...</div>
          <div>
            <div>{rating}</div>
            <Image src={}/>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
