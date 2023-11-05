import React from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import { authRoutes } from '../routes';

function AppRouter() {
  return <Routes>
    {authRoutes.map((path, component) => )}
  </Routes>;
}

export default AppRouter;
