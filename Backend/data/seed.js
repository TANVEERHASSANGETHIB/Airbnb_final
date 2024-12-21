const mongoose = require('mongoose');
const Listing = require('../models/Listing');

const mongoURI = 'mongodb+srv://airbnb-app:bscs22144@cluster0.7w7j4.mongodb.net/airbnb-app?retryWrites=true&w=majority';

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection error:', err));

const listings = [
  {
    title: 'Luxury Villa',
    slug: 'luxury-villa',
    description: 'A beautiful luxury villa with a city skyline view.',
    price: 350,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.9,
    propertyType: 'Villa',
    amenities: {
      lockOnBedroomDoor: true,
      citySkylineView: true,
      kitchen: true,
      wifi: true,
      dedicatedWorkspace: true,
      hdtv: true,
      freeWasher: true,
      freeDryer: true,
      hairDryer: true,
      carbonMonoxideAlarm: true
    },
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg']
  }
];

const seedListings = async () => {
  try {
    await Listing.insertMany(listings);
    console.log('Listings seeded successfully');
  } catch (error) {
    console.error('Error seeding listings:', error);
  }
};

seedListings();
