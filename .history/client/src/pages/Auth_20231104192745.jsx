import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';

const Auth = observer(() => {
  const { user } = React.useContext(Context);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const click = async () => {
    let data;
    if (isLogin) {
      data = await login();
    } else {
      data = await registration(email, password);
    }
    user.setUser(data);
    user.setIsAuth(true);
  };
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 57 }}
    >
      <Card style={{ width: 600 }} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-3'
            placeholder='email'
          />
          <Form.Control
            value={password}
            type='password'
            className='mt-3'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />
          <div className='d-flex justify-content-between mt-3 align-items-center'>
            {isLogin ? (
              <div>
                don't have an account yet?{' '}
                <NavLink to={REGISTRATION_ROUTE}>join us</NavLink>
              </div>
            ) : (
              <div>
                already have an account?{' '}
                <NavLink to={LOGIN_ROUTE}>login</NavLink>
              </div>
            )}
            <Button variant={'outline-success'} onClick={() => click()}>
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
