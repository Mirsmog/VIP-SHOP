import React from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { authRoutes } from '../routes';

function AppRouter() {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component}></Route>
        ))}
    </Routes>
  );
}

export default AppRouter;
