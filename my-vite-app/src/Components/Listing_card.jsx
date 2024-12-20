import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/listing_card.css';

const ListingCard = ({ image, title, propertyType, guests, bedrooms, bathrooms, price, rating, slug }) => {
  return (
    <div className="listing-card">
      <Link to={`/listing/${slug}`} className="listing-link">
        <img src={image} alt={title} className="listing-image" />
        <div className="listing-content">
          <h2 className="listing-title">{title}</h2>
          <p className="property-type">{propertyType}</p>
          <p className="property-details">
            {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
          </p>
          <div className="card-footer">
            <p className="price">${price} per night</p>
            <p className="rating">⭐ {rating}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
