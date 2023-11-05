import React from 'react';
import Container from 'react-bootstrap/esm/Container';

function Auth() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 57 }}
    >
      <Card style={{ width: 600 }}>
        <Form></Form>
      </Card>
    </Container>
  );
}

export default Auth;
