const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  propertyType: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  guests: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Listing', ListingSchema);
