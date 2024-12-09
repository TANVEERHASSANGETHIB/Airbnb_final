const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Listing = require('./models/Listing'); 
const Lisitng_Data = require('./Data.json'); 
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());


const mongoURI = 'mongodb+srv://airbnb-app:th7V2Zrb.6ySX_8@cluster0.7w7j4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with MongoDB Atlas URI if needed
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.get('/listing', async (req, res) => {
  try {
    console.log('Request received at /listing');
   
    const listings = await Listing.find();

    if (listings.length > 0) 
      {
    
      res.json(listings);
      console.log('Serving data from MongoDB:', listings);
    } 
    else 
    {  res.json(Lisitng_Data);
      console.log('MongoDB is empty. Serving static JSON data:', Lisitng_Data);
    }
  }
   catch (error) 
   {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => 
  {
  console.log(`Server running on http://localhost:${port}`);
});
