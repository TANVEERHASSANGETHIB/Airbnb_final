import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/Listing-Detail.css'

const ListingDetail = () => {
  const { slug } = useParams(); 
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`http://localhost:3000/listing/${slug}`);
        if (!response.ok) {
          throw new Error('Listing not found');
        }
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
      <div className="listing-header">
        <div className="image-container">
          {listing.images.map((image, index) => (
            <img key={index} src={image} alt={listing.title} />
          ))}
        </div>
        <div className="details">
          <h1>{listing.title}</h1>
          <p>{listing.description}</p>
          <div className="price">${listing.price}</div>
        </div>
      </div>
      
      <div className="features">
        <p><i className="fa fa-users"></i> <span>{listing.guests} Guests</span></p>
        <p><i className="fa fa-bed"></i> <span>{listing.bedrooms} Bedrooms</span></p>
        <p><i className="fa fa-bath"></i> <span>{listing.bathrooms} Bathrooms</span></p>
        <p><i className="fa fa-star"></i> <span>{listing.rating} Rating</span></p>
        <p><i className="fa fa-home"></i> <span>{listing.propertyType}</span></p>
      </div>

      <div className="amenities">
        <h2>Amenities</h2>
        {listing.amenities.lockOnBedroomDoor && <p><i className="fa fa-lock"></i> Lock on Bedroom Door</p>}
        {listing.amenities.citySkylineView && <p><i className="fa fa-building"></i> City Skyline View</p>}
        {listing.amenities.kitchen && <p><i className="fa fa-utensils"></i> Kitchen</p>}
        {listing.amenities.wifi && <p><i className="fa fa-wifi"></i> Wifi</p>}
        {listing.amenities.dedicatedWorkspace && <p><i className="fa fa-laptop"></i> Dedicated Workspace</p>}
        {listing.amenities.hdtv && <p><i className="fa fa-tv"></i> 65 inch HDTV with HBO Max, Netflix</p>}
        {listing.amenities.freeWasher && <p><i className="fa fa-tshirt"></i> Free Washer – In unit</p>}
        {listing.amenities.freeDryer && <p><i className="fa fa-tshirt"></i> Free Dryer – In unit</p>}
        {listing.amenities.hairDryer && <p><i className="fa fa-hair-dryer"></i> Hair Dryer</p>}
        {listing.amenities.carbonMonoxideAlarm && <p><i className="fa fa-biohazard"></i> Carbon Monoxide Alarm</p>}
      </div>
    </div>
  );
};

export default ListingDetail;
