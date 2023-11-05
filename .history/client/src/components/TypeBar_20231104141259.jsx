import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
  const { device } = React.useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          role='button'
          key={type.id}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
