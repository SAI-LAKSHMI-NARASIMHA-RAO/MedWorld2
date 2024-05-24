import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './Components/LoginSignup/Login';
import { Signup } from './Components/LoginSignup/Signup';
import { Header } from './Components/headerfiles/Header';
import Footer from './Components/footerfiles/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Order from './Components/Order';
import AdminDashboard from './Components/AdminDashboard';
import AddProduct from './Components/AddProduct';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
