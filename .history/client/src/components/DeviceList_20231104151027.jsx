import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '../main';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const { device } = React.useContext(Context);
  return (
    <div className='d-flex flex-wrap column-gap-4'>
      {device.devices.map((device) => (
        <DeviceItem key={device.id} {...device} />
      ))}
    </div>
  );
});

export default DeviceList;
