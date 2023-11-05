import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

function Admin() {
  return (
    <Container className='d-flex flex-column'>
      <Button>Add type</Button>
      <Button>Add Brand</Button>
      <Button>Add Device</Button>
    </Container>
  );
}

export default Admin;
