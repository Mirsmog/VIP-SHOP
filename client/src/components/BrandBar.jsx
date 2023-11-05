import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../main';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/esm/Card';

const BrandBar = observer(() => {
  const { device } = React.useContext(Context);
  return (
    <div className='d-flex'>
      {device.brands.map((brand) => (
        <Card
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          role='button'
          onClick={() => device.setSelectedBrand(brand)}
          className='p-3'
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
