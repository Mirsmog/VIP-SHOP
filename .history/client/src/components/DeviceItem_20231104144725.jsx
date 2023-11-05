import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import star from '../assets/star.svg'

const DeviceItem = ({ rating, img }) => {
  return (
    <Col md={3}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={img} />
        <div>
          <div>Apple...</div>
          <div className='d-flex align-items-center gap-1'>
            <div>{rating}</div>
            <Image width={15} height={15} src={star}/>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
