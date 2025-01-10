import React, { useState, useEffect } from 'react';
import "../css/Accomodation.css";
import NavBar from './NavBar';
import Footer from './Footer';
import Loader from './Loader';

const Accommodation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
  );
}

export default Accommodation;