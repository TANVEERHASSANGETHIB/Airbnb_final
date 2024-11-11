import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import ListingCard from '../Components/listing_card'
import ListingPage from '../Components/Listing_page'

export const Homepage = () => 
{
  return (
    <div>
        <Navbar/>
        <Footer/>
        <ListingPage/>
    </div>
  )
}
