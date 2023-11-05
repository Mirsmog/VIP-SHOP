import React from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import { Context } from '../../main';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({ show, onHide }) => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [file, setFile] = React.useState(null);
  const { device } = React.useContext(Context);
  const [info, setInfo] = React.useState([]);
  React.useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (id) => {
    setInfo(info.filter((i) => i.number !== id));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));
    console.log(formData);
    createDevice(formData).then((data) => onHide());
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add new Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='d-flex gap-2 flex-wrap'>
          <Dropdown>
            <Dropdown.Toggle>
              {device.selectedType.name || 'Select the type'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>
              {device.selectedBrand.name || 'Select the brand'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Device name'
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type='number'
            placeholder='Device price'
          />
          <Form.Control
            type='file'
            placeholder='Device image'
            onChange={selectFile}
            className='mb-4'
          />
          {info.map((i, _) => (
            <Row key={i.number} style={{ width: '100%' }} className='mb-4'>
              <Col md={9} className='d-flex flex-column gap-2'>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo('title', e.target.value, i.number)
                  }
                  placeholder='Type name of the property'
                />
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo('description', e.target.value, i.number)
                  }
                  placeholder='Type description of the property'
                />
              </Col>

              <Col md={3} className='d-flex align-items-center'>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant='outline-danger'
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
          <Button onClick={addInfo} variant='outline-dark'>
            add new info
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Close
        </Button>
        <Button variant='primary' onClick={addDevice}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
