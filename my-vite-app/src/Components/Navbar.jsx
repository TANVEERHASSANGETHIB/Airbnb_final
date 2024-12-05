import React from 'react';
import { Search } from './Search';
import '../Style/Navbar.css';

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
          <li>Signup</li>
        </ul>
      </div>
    </div>
  );
};
