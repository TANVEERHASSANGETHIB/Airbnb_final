import React from 'react';

export const Search = () => {
  return (
    <div id="search">
      <input type="text" placeholder="Where - Search destinations" />
      <input type="text" placeholder="Check-in - Add dates" />
      <input type="text" placeholder="Check-out - Add dates" />
      <input type="text" placeholder="Who - Add guests" />
      <button id="search-btn">
        Search
      </button>
    </div>
  );
};
