const express = require('express');
const cors = require('cors');
const Lisitng_Data = require('./Data.json'); 
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());  


app.get('/listing', (req, res) => {
  console.log("Request received at /");
  res.json(Lisitng_Data);  
  console.log(Lisitng_Data); 
});

app.listen(port, () => 
  {
  console.log(`Server running on port ${port}`);
}
);
