import React from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../main';

function AppRouter() {
  const { user } = React.useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component/>}></Route>
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
    </Routes>
  );
}

export default AppRouter;
