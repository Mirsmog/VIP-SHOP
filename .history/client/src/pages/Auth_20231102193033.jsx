import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';

function Auth() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 57 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>Authorization</h2>
        <Form className='d-flex flex-column'>
          <Form.Control className='mt-2' placeholder='email'>

          </Form.Control>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
