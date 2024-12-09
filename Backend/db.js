const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://bscs22144:bscs22144@cluster0.7w7j4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

module.exports = mongoose;
