import {Link} from 'react-router-dom'

import React from 'react'

import './Navbar.css'

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-left-section">
      <span>BK</span>
    </div>
    <div className="navbar-right-section">

      <Link className="route-link" to="/">
        Home
      </Link>

      <Link className="route-link" to="/Services">
        Services
      </Link>

      <Link className="route-link" to="/About">
        About
      </Link>
      
      <Link className="route-link" to="/Login">
        Login
      </Link>

    </div>
  </div>
)

export default Navbar
