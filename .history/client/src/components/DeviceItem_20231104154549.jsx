import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import star from '../assets/star.svg';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ rating, img, name }) => {
  const navigate = useNavigate();
  return (
    <Col md={3} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={img} />
        <div className='text-black-50 d-flex justify-content-between mt-2'>
          <div className=''>Apple...</div>
          <div className='d-flex align-items-center gap-1'>
            <div>{rating}</div>
            <Image width={15} height={15} src={star} />
          </div>
        </div>
        <div>{name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
