import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import ListingCard from '../Components/listing_card'

export const Homepage = () => 
{
  return (
    <div>
        <Navbar/>
        <Footer/>
        <ListingCard/>
    </div>
  )
}
