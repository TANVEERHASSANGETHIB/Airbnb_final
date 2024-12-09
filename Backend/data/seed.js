const mongoose = require('../db');
const Listing = require('../models/Listing');

const data = [
    {
      "id": 1,
      "title": "Beautiful Beach House Back",
      "category": "Beach Houses",
      "image": "https://static.giggster.com/media/pages/activities/house/1080.jpg",
      "price": 150,
      "rating": 4.5,
      "description": "A beautiful beachfront property with stunning views.",
      "bathrooms": 2,
      "bedrooms": 3,
      "guests": 6,
      "propertyType": "House"
    },
    {
      "id": 2,
      "title": "Cozy Mountain Cabin",
      "category": "Mountain Cabins",
      "image": "https://static.giggster.com/media/activities/collaboration/uploads/1707925072/720.webp",
      "price": 100,
      "rating": 4.7,
      "description": "A cozy cabin in the mountains perfect for a getaway.",
      "bathrooms": 1,
      "bedrooms": 2,
      "guests": 4,
      "propertyType": "Cabin"
    },
    {
      "id": 3,
      "title": "Luxury Lake House",
      "category": "Luxury Villas",
      "image": "https://static.giggster.com/images/location/ce8963c6-549b-4658-9b5d-cec742045d4a/11bdfd5d-9053-437f-ad12-d1ecf2621fa1/mid_x3.jpeg",
      "price": 300,
      "rating": 4.8,
      "description": "A luxurious lakeside villa for a relaxing retreat.",
      "bathrooms": 3,
      "bedrooms": 5,
      "guests": 10,
      "propertyType": "Villa"
    },
    {
      "id": 4,
      "title": "Modern City Apartment",
      "category": "City Apartments",
      "image": "https://static.giggster.com/images/location/4dbab110-930e-4341-82cd-f331747a8cdc/e2bd1c90-b487-4f5a-ac11-c7df027a0c55/mid_x3.jpeg",
      "price": 120,
      "rating": 4.2,
      "description": "A stylish apartment in the heart of the city.",
      "bathrooms": 1,
      "bedrooms": 2,
      "guests": 4,
      "propertyType": "Apartment"
    }
  ];
  

Listing.insertMany(data)
  .then(() => {
    console.log('Data inserted!');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
