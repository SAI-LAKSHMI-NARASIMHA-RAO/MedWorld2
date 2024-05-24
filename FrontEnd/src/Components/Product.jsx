import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/home');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (id) => {
    try {
      await axios.post(`http://localhost:3000/home/${id}`);
      alert('Item added to cart');
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    navigate('/login');
  };

  return (
    <div className="home">
     {/* <nav className="userNavbar">
        <button onClick={() => navigate('/dashboard')} className="medHomeButton">Home</button>
        <button onClick={() => navigate('/cart')} className="medCartButton">Cart</button>
        <button onClick={() => navigate('/orders')} className="medOrderButton">Orders</button>
        <button onClick={logout} className="logoutButton">Logout</button>
  </nav> */}
      <div className="homeBody">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
                  
    </div>

         
               


  );
};

export default Home;
