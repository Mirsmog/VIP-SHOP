import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 57 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control className='mt-3' placeholder='email' />
          <Form.Control className='mt-3' placeholder='password' />
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            <div>
              don't have an account yet?{' '}
              <NavLink to={REGISTRATION_ROUTE}>join us</NavLink>
            </div>
            <Button variant={'outline-success'}>Login</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
