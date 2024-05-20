import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/user/HomePage';
import ShopPage from './pages/user/ShopPage';
import LoginPage from './pages/user/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import ProductsPage from './pages/admin/ProductsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes cho user */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Routes cho admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
