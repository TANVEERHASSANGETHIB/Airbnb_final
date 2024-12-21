import React from 'react';
import { Search } from './Search';
import {SignUp} from '../Pages/SignUp'
import '../Style/Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div id="navbar">
      <div id="logo">
        <img src='./download.png' alt='logo' />
      </div>

      <Search />

      <div id="usermenu">
        <ul>
          <li>Login</li>
          <Link to="/signup">Sign Up</Link>
          
        </ul>
      </div>
    </div>
  );
};
