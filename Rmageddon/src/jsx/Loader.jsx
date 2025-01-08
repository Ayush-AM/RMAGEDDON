import React, { useState, useEffect } from 'react';
import '../css/Loader.css'; 
const Loader = () => {
  const [gifSrc, setGifSrc] = useState("");
  const [isShrinking, setIsShrinking] = useState(false); // State to trigger shrinking
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  useEffect(() => {
    // Add a unique query parameter to force the browser to reload the GIF
    setGifSrc(`${"https://res.cloudinary.com/dupeml4xm/image/upload/v1736308777/rmageddon_sjvdd3.gif"}?t=${new Date().getTime()}`);

    // After the GIF finishes playing, trigger shrinking
    const shrinkTimer = setTimeout(() => setIsShrinking(true), 3000); // Adjust timing to match GIF duration
    const hideTimer = setTimeout(() => setIsVisible(false), 4000); // Add 1 sec delay for shrinking

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(hideTimer);
    };
  }, []); // Run only when the component is mounted

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
