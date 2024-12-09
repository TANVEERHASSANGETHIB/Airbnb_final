const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Listing = require('./models/Listing'); // Import the Listing model
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// MongoDB Atlas URI
const mongoURI =
  'mongodb+srv://airbnb-app:th7V2Zrb.6ySX_8@cluster0.7w7j4.mongodb.net/airbnb-app?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection error:', err));

// GET /listing: Fetch listings from MongoDB
app.get('/listing', async (req, res) => {
  try {
    console.log('Request received at /listing');
    const listings = await Listing.find(); // Fetch data from MongoDB

    // Respond with listings or an empty array if no data exists
    res.json(listings);
    console.log('Serving data from MongoDB:', listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Server error while fetching listings' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
