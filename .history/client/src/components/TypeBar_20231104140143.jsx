import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';

const TypeBar = observer(() => {
  const { device } = React.useContext(Context);
  return;
  <ListGroup>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>;
});

export default TypeBar;
