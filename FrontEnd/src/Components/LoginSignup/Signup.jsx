import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';

export const Signup = () => {
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5632/signup'); 
      if (response.data.success === "true") {
        navigate('/home');
      } else {
        alert('SignUp Unsuccessful');
      }
    } catch (error) {
      console.error("There was an error signing up!", error);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='text'>Sign Up</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <img src={email_icon} alt="Email Icon" />
            <input type='email' placeholder='Email Id' name='email' />
          </div>
          <div className='input'>
            <img src={password_icon} alt="Password Icon" />
            <input type='password' placeholder='Password' name='password' />
          </div>
          <div className='input'>
            <img src={user_icon} alt="User Icon" />
            <input type='text' placeholder='User Name' name='username' />
          </div>
          <div className='input'>
            <img src={user_icon} alt="Mobile Number Icon" />
            <input type='text' placeholder='Mobile Number' name='mobileNumber' />
          </div>
          <div className="btn-group">
            <label htmlFor='btn1'>
              <input type="radio" id='btn1' name="role" value="user" />
              User
            </label>
            <label htmlFor='btn2'>
              <input type="radio" id='btn2' name="role" value="admin" />
              Admin
            </label>
          </div>
        </div>
        <div className="forgot-password">
          Already a user? <Link to='/login' className='clickhere'>Click Here to Login</Link>
        </div>
        <div className="submit-container">
          <div className='submit' onClick={signupHandler}>Sign Up</div>
        </div>
      </div>
    </>
  );
};
