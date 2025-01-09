import React, { useState, useEffect } from 'react';
import '../css/Loader.css'; 
import audioSong from "../images/audioSong.mp3";

const Loader = () => {
  const [gifSrc, setGifSrc] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set the GIF source
    setGifSrc(`${"https://res.cloudinary.com/dupeml4xm/image/upload/v1736308777/rmageddon_sjvdd3.gif"}?t=${new Date().getTime()}`);

    // Play audio using AudioContext
    const playAudio = async () => {
      try {
        const audio = new Audio(audioSong);
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const track = audioContext.createMediaElementSource(audio);
        track.connect(audioContext.destination);

        await audio.play();
        console.log("Audio is playing!");
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };

    playAudio();

    // Hide loader after 4 seconds
    const hideTimer = setTimeout(() => setIsVisible(false), 4000);
    return () => clearTimeout(hideTimer);
  }, []);

  return (
    isVisible && (
      <div className="loadercontainer">
        <div className="loader">
          <img src={gifSrc} alt="Loading..." className="rmageddonLogo" />
        </div>
      </div>
    )
  );
};

export default Loader;
