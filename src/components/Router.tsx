import { Routes, Route } from 'react-router-dom';
import * as React from 'react';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Admin = React.lazy(() => import('../pages/admin/Admin'));
const Components = React.lazy(() => import('../pages/components/Components'));
const Home = React.lazy(() => import('../pages/home/Home'));

const PrivateRoute = React.lazy(() => import('./PrivateRoute'));

const Router: React.FC = () => (
  <Routes>
    <Route element={<Home />} path="/" />
    <Route element={<PrivateRoute element={<Admin />} />} path="/admin" />
    <Route element={<Components />} path="/components" />
    <Route element={<LoginPage/>} path="/login" />
    <Route element={<RegisterPage/>} path="/register" />
  </Routes>
);

export default Router;
