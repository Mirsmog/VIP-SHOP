import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
  const { device } = React.useContext(Context);
  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>

    </ListGroup>
  );
});

export default TypeBar;
