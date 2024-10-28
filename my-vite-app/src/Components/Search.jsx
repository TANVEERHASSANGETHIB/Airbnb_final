import React from 'react';

export const Search = () => {
  return (
    <div id="search" style={{ display: 'flex', alignItems: 'center' }}>
      <input 
        type="text" 
        placeholder="Search..." 
        style={{ marginRight: '10px', padding: '5px' }} 
      />
      <div id="search_btn">
        <button>
          Search
        </button>
      </div>
    </div>
  );
};
