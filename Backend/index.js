const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Listing = require('./models/Listing'); 
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const mongoURI =
  'mongodb+srv://airbnb-app:bscs22144@cluster0.7w7j4.mongodb.net/airbnb-app?retryWrites=true&w=majority';

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Route to fetch all listings
app.get('/listing', async (req, res) => {
  try {
    console.log('Request received at /listing');
    const listings = await Listing.find(); // Fetch data from MongoDB
    res.json(listings);
    console.log('Serving data from MongoDB:', listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Server error while fetching listings' });
  }
});

// Route to fetch a specific listing by its title or slug
app.get('/listing/:title', async (req, res) => {
  const { title } = req.params;  // Get title from URL parameter
  try {
    const listing = await Listing.findOne({ title });  // Find listing by title
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.json(listing);
    console.log('Serving data for listing:', listing);
  } catch (error) {
    console.error('Error fetching listing:', error);
    res.status(500).json({ message: 'Server error while fetching listing' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
