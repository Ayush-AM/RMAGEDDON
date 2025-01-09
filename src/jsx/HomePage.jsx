import React, { useState, useEffect } from 'react';
import HeroPage from './HeroPage';
import RNXGandSponsers from './RNXGandSponsers';
import RmageddonUnlock from './RmageddonUnlock';
import '../css/HomePage.css';
import Glimpses from './Glimpses';
import Footer from './Footer';

const HomePage = () => {


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