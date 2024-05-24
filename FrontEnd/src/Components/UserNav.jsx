import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/login">Logout</Link>
    </nav>
  );
};

export default UserNav;