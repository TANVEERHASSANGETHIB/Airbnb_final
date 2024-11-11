import React, { useState, useEffect } from 'react';
import ListingCard from './listing_card';
import Data from '../Data.json';



const ListingPage = () => {
  console.log(Data);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    
    // Set the initial data from the JSON file
    setListings(Data);
  }, []);

  return (
    <div className="listing-page">
      {listings.map((listing, index) => (
        <ListingCard
          key={index}
          image={listing.image}
          title={listing.title}
          propertyType={listing.propertyType}
          guests={listing.guests}
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          price={listing.price}
          rating={listing.rating}
        />
      ))}
    </div>
  );
};

export default ListingPage;
