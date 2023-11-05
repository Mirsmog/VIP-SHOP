import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../main';

const DeviceList = observer(() => {
  const { device } = React.useContext(Context);
  return <div className='d-flex'>
    {device.devices.map((device) => )}
  </div>;
});

export default DeviceList;
