const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number },
  guests: { type: Number },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  rating: { type: Number },
  propertyType: { type: String },
  amenities: { 
    lockOnBedroomDoor: Boolean,
    citySkylineView: Boolean,
    kitchen: Boolean,
    wifi: Boolean,
    dedicatedWorkspace: Boolean,
    hdtv: Boolean,
    freeWasher: Boolean,
    freeDryer: Boolean,
    hairDryer: Boolean,
    carbonMonoxideAlarm: Boolean
  },
  images: [String]
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
