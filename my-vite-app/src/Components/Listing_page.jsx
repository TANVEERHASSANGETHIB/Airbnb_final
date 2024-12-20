import React, { useState, useEffect } from 'react';
import ListingCard from '../Components/Listing_card';
import '../Style/ListingPage.css';

const ListingPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/listing')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div className="listing-page">
      {listings.length > 0 ? (
        listings.map((listing) => (
          <ListingCard
            key={listing.id}
            image={listing.image}
            title={listing.title}
            propertyType={listing.propertyType}
            guests={listing.guests}
            bedrooms={listing.bedrooms}
            bathrooms={listing.bathrooms}
            price={listing.price}
            rating={listing.rating}
            slug={listing.title.replace(/\s+/g, '-').toLowerCase()}
          />
        ))
      ) : (
        <p className="no-listings">No listings available</p>
      )}
    </div>
  );
};

export default ListingPage;
