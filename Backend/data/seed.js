const mongoose = require('../db'); 
const Listing = require('../models/Listing'); 

const seedData = [
  {
    id: 1,
    title: 'Cozy Apartment',
    propertyType: 'Apartment',
    image: 'https://example.com/image1.jpg',
    price: 100,
    rating: 4.5,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    description: 'A cozy apartment in the city center.',
  },
  {
    id: 2,
    title: 'Luxury Villa',
    propertyType: 'Villa',
    image: 'https://example.com/image2.jpg',
    price: 300,
    rating: 5,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    description: 'A luxury villa with a pool and stunning views.',
  },
];

const seedDB = async () => {
  try {
    await Listing.deleteMany(); 
    console.log('Previous data removed.');
    await Listing.insertMany(seedData); 
    console.log('Seed data inserted successfully.');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
