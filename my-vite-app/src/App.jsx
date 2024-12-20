import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage'; 
import ListingDetail from './Pages/Listing-Detail'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listing/:slug" element={<ListingDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;
