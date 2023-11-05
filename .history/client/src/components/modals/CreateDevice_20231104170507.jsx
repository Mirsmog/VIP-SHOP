import React from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';

const CreateDevice = (show, onHide) => {
  return (
    <Modal show={false} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder='name' />
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
