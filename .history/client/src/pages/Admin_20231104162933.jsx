import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

function Admin() {
  return (
    <Container className='d-flex flex-column'>
      <Button variant='outline-dark'>Add type</Button>
      <Button variant='outline-dark'>Add Brand</Button>
      <Button variant='outline-dark'>Add Device</Button>
    </Container>
  );
}

export default Admin;
