import React, { useState, useEffect } from 'react';
import HeroPage from './HeroPage';
import RNXGandSponsers from './RNXGandSponsers';
import RmageddonUnlock from './RmageddonUnlock';
import '../css/HomePage.css';
import Glimpses from './Glimpses';
import Footer from './Footer';
import Loader from './Loader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="homePage">
      <>
        <HeroPage />
        <RNXGandSponsers />
        <RmageddonUnlock />
        <Glimpses />
        <Footer />
      </>
    </div>
  );
};

export default HomePage;