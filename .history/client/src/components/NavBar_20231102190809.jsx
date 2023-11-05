import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observable } from 'mobx';

const NavBar = observable(() => {
  return (
    <Navbar bg='dark' data-bs-theme='dark' variant='dark'>
      <Container>
        <NavLink
          className='text-success text-2xl h3 font-weight-bold '
          to={SHOP_ROUTE}
        >
          TOPSHOP
        </NavLink>
        <Nav className=' ml-auto'>
          <Button variant={'outline-light'}></Button>
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
