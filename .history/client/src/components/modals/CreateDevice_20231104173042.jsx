import React from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import { Context } from '../../main';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const CreateDevice = ({ show, onHide }) => {
  const { device } = React.useContext(Context);
  const [info, setInfo] = React.useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add new Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='d-flex gap-2 flex-wrap'>
          <Dropdown>
            <Dropdown.Toggle>Select the type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>Select the brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control placeholder='Device name' />
          <Form.Control type='number' placeholder='Device price' />
          <Form.Control type='file' placeholder='Device image' />
          <Button onClick={addInfo} variant='outline-dark'>
            add new info
          </Button>
          {info.map((i, _) => (
            <Row key={_} style={{width: '100%',}} className='my-4'>
              <Col md={9} className='d-flex flex-column gap-2'>
                <Form.Control placeholder='Type name of the property' />
                <Form.Control placeholder='Type description of the property' />
              </Col>
              
              <Col md={3} className='d-flex align-items-center'>
                <Button variant='outline-danger'>Delete</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Close
        </Button>
        <Button variant='primary' onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
