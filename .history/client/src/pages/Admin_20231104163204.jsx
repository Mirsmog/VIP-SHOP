import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

function Admin() {
  return (
    <Container className='d-flex flex-column'>
      123
      <Button variant='outline-dark' className='mt-2'>
        Add type
      </Button>
      <Button variant='outline-dark' className='mt-2'>
        Add Brand
      </Button>
      <Button variant='outline-dark' className='mt-2'>
        Add Device
      </Button>
    </Container>
  );
}

export default Admin;
