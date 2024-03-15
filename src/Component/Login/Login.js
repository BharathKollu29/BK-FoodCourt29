import React from 'react'

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import LoginImage from '../Images/LoginImage.png';

import './Login.css'

function Login() {
  
  return (
      <div>
        <div className='login-container'>
        <div className='login-left-section'>
          <img className='login-image' src={LoginImage} alt='' />
      </div>

      <div className='login-right-section'>

        <form className='login-form-container'>
          <span>Login</span>
          <input type='text' placeholder='Enter Username' />
          <input type='text' placeholder='Password' />
          <span>Forget Password</span>
          <button>Login</button>
          <span>Don't have an Account ?<span className='signup'> Signup</span></span>
          <div className='react-icons'>
            <FaGoogle />
            <FaFacebook />
            <FaTwitter />
          </div>
        </form>
        
      </div>
    </div>  
      </div>
    
  )
}

export default Login
