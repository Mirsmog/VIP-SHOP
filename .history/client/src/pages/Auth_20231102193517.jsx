import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';
import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/consts';

function Auth() {
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 57 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>Authorization</h2>
        <Form className='d-flex flex-column'>
          <Form.Control className='mt-3' placeholder='email' />
          <Form.Control className='mt-3' placeholder='password' />
          <Row>
            <div>
              don't have an account yet?{' '}
              <NavLink to={REGISTRATION_ROUTE}>join us</NavLink>
            </div>
            <Button variant={'outline-success'} className='mt-3 align-self-end'>
              Login
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
