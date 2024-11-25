import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import ListingPage from '../Components/Listing_page'
// import  Categories  from '../Components/Categories'
import  Contact  from './Contact'

export const Homepage = () => 
{
  return (
    <div>
        <Navbar/>
        {/* <Categories/> */}
        <ListingPage/>
        <Contact/>
        <Footer/>
    </div>
  )
}
