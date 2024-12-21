const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Listing = require('./models/Listing');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://airbnb-app:bscs22144@cluster0.7w7j4.mongodb.net/airbnb-app?retryWrites=true&w=majority';

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/listing', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching listings' });
  }
});

app.get('/listing/:slug', async (req, res) => {
  const { slug } = req.params; 
  try {
    const listing = await Listing.findOne({ slug: slug }); 
    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error while fetching listing' });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
