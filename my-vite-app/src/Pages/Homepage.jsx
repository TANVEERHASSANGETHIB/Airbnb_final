import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import ListingPage from '../Components/Listing_page'
import  Categories  from '../Components/Categories'

export const Homepage = () => 
{
  return (
    <div>
        <Navbar/>
        <Categories/>
        <ListingPage/>
        <Footer/>
    </div>
  )
}
