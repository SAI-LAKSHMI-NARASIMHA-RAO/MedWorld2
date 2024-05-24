import React, { useState } from 'react';
import './LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';

export const Login = ({status,setStatus}) => {
  const navigate = useNavigate();
  

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5632/login'); 
      if (response.data.success === "true") {
        setStatus(true);
        navigate('/home');
      } else {
        alert('Login Unsuccessful');
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='text'>Login</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <img src={email_icon} alt="Email Icon" />
            <input type='email' name="email" placeholder='Email Id' />
          </div>
          <div className='input'>
            <img src={password_icon} alt="Password Icon" />
            <input type='password' name="password" placeholder='Password' />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password? <span className='clickhere'>Click Here</span>
        </div>
        <div className="submit-container">
          <div className='submit' onClick={loginHandler}>Login</div>
        </div>
        <div className="register">
          Not a user? <Link to='/signup' className='clickhere'> Click Here to register</Link>
        </div>
      </div>
    </>
  );
};
