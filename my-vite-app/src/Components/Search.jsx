import React, { useState } from 'react';

export const Search = () => {
  const [location, setLocation] = useState('');
  const [listings, setListings] = useState([]);

  const handleSearch = async () => {
    if (location) {
      try {
        const response = await fetch(`http://localhost:3000/search?location=${location}`);
        if (!response.ok) {
          throw new Error('No listings found for this location');
        }
        const data = await response.json();
        setListings(data);  // Set the fetched listings to state
        console.log(data);   // Display data in console (optional)
      } catch (error) {
        console.error('Error searching listings:', error);
      }
    }
  };

  return (
    <div>
      <div id="search">
        <input
          type="text"
          placeholder="Where - Search destinations"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button id="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div>
        {listings.length > 0 ? (
          <ul>
            {listings.map((listing) => (
              <li key={listing._id}>
                <h3>{listing.title}</h3>
                <p>{listing.description}</p>
                <p>Price: ${listing.price}</p>
                <p>Location(s): {listing.locations.join(', ')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No listings found for this location</p>
        )}
      </div>
    </div>
  );
};
