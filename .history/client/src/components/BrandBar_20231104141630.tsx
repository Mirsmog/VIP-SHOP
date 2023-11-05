import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../main';
import Row from 'react-bootstrap/esm/Row';

const BrandBar = observer(() => {
  const {device} = React.useContext(Context);
  return <Row className='d-flex'>
    {device.brands.map((brand) => )}
  </Row>;
});

export default BrandBar;
