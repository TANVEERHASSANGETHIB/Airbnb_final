import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ListingDetail = () => {
  const { slug } = useParams(); 
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`http://localhost:3000/listing/${slug}`); // Fetch listing by slug
        const data = await response.json();
        setListing(data);
      } catch (error) {
        console.error('Error fetching listing details:', error);
      }
    };

    fetchListing();
  }, [slug]); 

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="listing-detail">
      <h1>{listing.title}</h1>
      <img src={listing.image} alt={listing.title} />
      <p>{listing.description}</p>
      <p>Property Type: {listing.propertyType}</p>
      <p>Price: ${listing.price}</p>
      <p>Rating: {listing.rating}</p>
      <p>Guests: {listing.guests}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
     
    </div>
  );
};

export default ListingDetail;
