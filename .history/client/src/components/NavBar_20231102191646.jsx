import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'; // Or "mobx-react".
import { Context } from '../main';

const NavBar = observer(() => {
  const { user } = React.useContext(Context);
  return (
    <Navbar bg='dark' data-bs-theme='dark' variant='dark'>
      <Container>
        <NavLink
          className='text-success text-2xl h3 font-weight-bold '
          to={SHOP_ROUTE}
        >
          TOPSHOP
        </NavLink>
        {!user.isAuth ? (
          <Nav className=' ml-auto'>
            <Button variant={'outline-light'} className='mr-4'>Moderate</Button>
            <Button variant={'outline-light'}>Log in</Button>
          </Nav>
        ) : (
          <Nav className=' ml-auto'>
            <Button variant={'outline-light'}>Join us</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
