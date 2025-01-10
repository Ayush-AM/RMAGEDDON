import React from 'react'
import "../css/Accomodation.css"
import NavBar from './NavBar'
import Footer from './Footer'
import Loader from './Loader'

const Accommodation = () => {
  return (
    <>
    <div className='Accommodation'>
        <div className='AccomodationNavBar'>
            <NavBar className="AccomodationNavBar" />
        </div>
      <h1 className='h1class'>Coming Soon....</h1>
    </div>
    <Footer />
    </>
  )
}

export default Accommodation
