import React from 'react';
import '../Style/listing_card.css'

const ListingCard = ({ image, title, propertyType, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="listing-card">
      
      <img src={image} alt={title} className="listing-image" />

      <h2 className="listing-title">{title}</h2>

      
      <p className="property-type">{propertyType}</p>

     
      <p className="property-details">
        {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
      </p>

      
      <p className="price">${price} per night</p>

      <p className="rating">⭐ {rating}</p>
    </div>
  );
};

export default ListingCard;
