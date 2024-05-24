import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav>
      <Link to="/admin">Admin Dashboard</Link>
      <Link to="/admin/addProduct">Add Product</Link>
      <Link to="/login">Logout</Link>
    </nav>
  );
};

export default AdminNav;