import React, { useState, useEffect } from "react";
import "../css/Timer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Timer = ({className}) => {
   useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const targetDate = new Date(`February 21, 2025 00:00:00`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / (1000 * 60)) % 60);
        const s = Math.floor((difference / 1000) % 60);

        setDays(String(d).padStart(2, "0"));
        setHours(String(h).padStart(2, "0"));
        setMinutes(String(m).padStart(2, "0"));
        setSeconds(String(s).padStart(2, "0"));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
   
    <div className={className} data-aos="fade-up"  data-aos-delay="500">
      <div className="timeremains">Time Remaining</div>
      <div className="timer">
        <div className="box">
          <div className="numbers">{days}</div>
          <div className="text">Days</div>
        </div>
        <div className="colon">:</div>
        <div className="box">
          <div className="numbers">{hours}</div>
          <div className="text">Hours</div>
        </div>
        <div className="colon">:</div>
        <div className="box">
          <div className="numbers">{minutes}</div>
          <div className="text">Minutes</div>
        </div>
        <div className="colon">:</div>
        <div className="box">
          <div className="numbers">{seconds}</div>
          <div className="text">Seconds</div>
        </div>
      </div>
    </div>
   
  );
};

export default Timer;
