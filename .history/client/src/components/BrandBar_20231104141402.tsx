import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../main';

const BrandBar = observer(() => {
  const device = React.useContext(Context);
  return <div>BrandBar</div>;
});

export default BrandBar;
