import React from 'react';
import { Context } from '../main';
import Pagination from 'react-bootstrap/esm/Pagination';
import { observer } from 'mobx-react-lite';

const Pages = observer(() => {
  const { device } = React.useContext(Context);
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination className='mt-3'>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={device.page === page}
          onClick={() => device.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
