const mongoose = require('../db');
const Listing = require('../models/Listing');

const data = [
  {
    title: "Beautiful Beach House",
    propertyType: "Beach House",
    image: "https://example.com/beach.jpg",
    price: 150,
    rating: 4.5,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    description: "A beautiful beachfront property with stunning views.",
  },
  {
    title: "Cozy Mountain Cabin",
    propertyType: "Cabin",
    image: "https://example.com/cabin.jpg",
    price: 100,
    rating: 4.7,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    description: "A cozy cabin in the mountains perfect for a getaway.",
  },
];

Listing.insertMany(data)
  .then(() => {
    console.log('Data inserted!');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
