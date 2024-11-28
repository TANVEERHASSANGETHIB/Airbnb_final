import React, { useState } from 'react';
import ListingCard from './listing_card';
import Fetch_Listing from '../Pages/Fetch_Listing';

const ListingPage = () => {
  const [listings, setListings] = useState([]); 

  return (
    <div className="listing-page">
      <Fetch_Listing setListings={setListings} />  

      {listings.length > 0 ? (
        listings.map((listing, index) => (
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
        ))
      ) : (
        <p>No listings available</p>
      )}
    </div>
  );
};

export default ListingPage;
