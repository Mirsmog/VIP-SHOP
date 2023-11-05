import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';

function Admin() {
  const [brandVisible, setBrandVisible] = React.useState(false);
  const [typeVisible, setTypeVisible] = React.useState(false);
  const [deviceVisible, setDeviceVisible] = React.useState(false);
  return (
    <Container className='d-flex flex-column'>
      <Button variant='outline-dark' className='mt-4 p-2'>
        Add type
      </Button>
      <Button variant='outline-dark' className='mt-4 p-2'>
        Add Brand
      </Button>
      <Button variant='outline-dark' className='mt-4 p-2'>
        Add Device
      </Button>
      <CreateBrand show={brandVisible} />
      <CreateType show={typeVisible} />
      <CreateDevice show={deviceVisible} />
    </Container>
  );
}

export default Admin;
