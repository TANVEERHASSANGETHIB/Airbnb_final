const express = require('express');
const cors = require('cors');
const Data = require('./Data.json'); 
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());  


app.get('/', (req, res) => {
  console.log("Request received at /");
  res.json(Data);  
  console.log(Data); 
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
