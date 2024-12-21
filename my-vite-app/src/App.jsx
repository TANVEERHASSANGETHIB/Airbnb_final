import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage'; 
import ListingDetail from './Pages/Listing-Detail'; 
import { SignUp } from './Pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listing/:slug" element={<ListingDetail />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
      </Routes>
    </Router>
  );
}

export default App;
