import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'; // Or "mobx-react".
import { Context } from '../main';

const NavBar = observer(() => {
  const { user } = React.useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg='dark' data-bs-theme='dark' variant='dark'>
      <Container>
        <NavLink
          className='text-warning text-2xl h3 font-weight-bold '
          to={SHOP_ROUTE}
        >
          VIP-SHOP
        </NavLink>
        {user.isAuth ? (
          <Nav className=' ml-auto gap-2'>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Moderate
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className=' ml-auto'>
            <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>
              Join us
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
