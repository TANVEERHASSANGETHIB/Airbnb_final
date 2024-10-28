import React from 'react';

export const Navbar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
 
 <div id="logo">
      <img 
        src='./download.png' 
        alt='logo' 
        style={{ marginRight: '20px', width: '150px', height: '50px' }} 
      />
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '15px' }}>Home</li>
        <li style={{ marginRight: '15px' }}>Experiences</li>
        <li style={{ marginRight: '15px' }}>Online Experiences</li>
      </ul>
      <input 
        type="text" 
        placeholder="Search..." 
        style={{ marginLeft: '20px', padding: '5px' }} 
      />
    </div>
  );
};
