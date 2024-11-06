import React from 'react';

const ListingCard = ({ image, title, propertyType, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="listing-card">
      {/* Property Image */}
      <img src={image} alt={title} className="listing-image" />

      {/* Property Title */}
      <h2 className="listing-title">{title}</h2>

      {/* Property Type */}
      <p className="property-type">{propertyType}</p>

      {/* Guests, Bedrooms, and Bathrooms */}
      <p className="property-details">
        {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
      </p>

      {/* Price per Night */}
      <p className="price">${price} per night</p>

      {/* Rating */}
      <p className="rating">⭐ {rating}</p>
    </div>
  );
};

export default ListingCard;
