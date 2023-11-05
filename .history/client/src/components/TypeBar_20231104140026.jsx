import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';

const TypeBar = observer(() => {
  const { device } = React.useContext(Context);
  return <div>TypeBar</div>;
});

export default TypeBar;
