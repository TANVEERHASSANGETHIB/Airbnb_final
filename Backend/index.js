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


app.get('/listing', async (req, res) => {
  try {
    console.log('Request received at /listing');
    const listings = await Listing.find(); 

   
    res.json(listings);
    console.log('Serving data from MongoDB:', listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Server error while fetching listings' });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
