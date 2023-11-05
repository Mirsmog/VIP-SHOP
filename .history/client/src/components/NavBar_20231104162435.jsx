import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { ADMIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'; // Or "mobx-react".
import { Context } from '../main';

const NavBar = observer(() => {
  const { user } = React.useContext(Context);
  const location = useLocation();
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
              onClick={() => location(ADMIN_ROUTE)}
            >
              Moderate
            </Button>
            <Button variant={'outline-light'} onClick={() => location()}>
              Log in
            </Button>
          </Nav>
        ) : (
          <Nav className=' ml-auto'>
            <Button variant={'outline-light'} onClick={() => location()}>
              Join us
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
