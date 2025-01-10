import React, { useState, useEffect } from 'react';
import '../css/Loader.css'; 
const Loader = () => {
  const [gifSrc, setGifSrc] = useState("");
  const [isShrinking, setIsShrinking] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    setGifSrc(`${"https://res.cloudinary.com/dupeml4xm/image/upload/v1736308777/rmageddon_sjvdd3.gif"}?t=${new Date().getTime()}`);

    const shrinkTimer = setTimeout(() => setIsShrinking(true), 3000); 
    const hideTimer = setTimeout(() => setIsVisible(false), 4000); 

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(hideTimer);
    };
  }, []); 
  return (
    isVisible && (
      <div className={`loadercontainer `}>
        <div className="loader">
          <img src={gifSrc} alt="Loading..." className="rmageddonLogo" />
        </div>
      </div>
    )
  );
};

export default Loader;