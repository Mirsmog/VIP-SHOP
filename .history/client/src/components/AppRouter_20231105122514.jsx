import React from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { user } = React.useContext(Context);
  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />}></Route>
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
    </Routes>
  );
});

export default AppRouter;
