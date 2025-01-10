import React, { useRef, useState } from 'react';
import '../css/Loader.css';

const Loader = () => {
  const videoRef = useRef(null);

  const playWithSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute the video
      videoRef.current.play();       // Play the video
    }
  };

  return (
    <div className="loadercontainer">
      <div className="loader">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dupeml4xm/video/upload/v1736450357/rmageddon_feathered_yellow_eyes_audio_qrueni.mp4"
          autoPlay
          loop
          muted
          width="300"
          height="300"
        ></video>
        <button onClick={playWithSound}>Play with Sound</button>
      </div>
    </div>
  );
};

export default Loader;
