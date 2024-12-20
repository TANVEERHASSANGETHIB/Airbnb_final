const mongoose = require('mongoose');
const slugify = require('slugify');

const ListingSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  propertyType: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  guests: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true, unique: true } 
});


ListingSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('title')) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('Listing', ListingSchema);
