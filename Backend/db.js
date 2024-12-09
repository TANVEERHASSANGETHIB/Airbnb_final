const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://airbnb-app:th7V2Zrb.6ySX_8@cluster0.7w7j4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

module.exports = mongoose;
