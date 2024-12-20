import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import ListingPage from '../Components/Listing_page';

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <ListingPage />
        <Footer />
    </div>
  );
};

export default Homepage;  // Ensure you're exporting it as default
