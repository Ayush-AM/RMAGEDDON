  // import React, { useEffect } from "react";
  // import "../css/EventPage.css";
  // import NavBar from "../jsx/NavBar.jsx";
  // import AOS from "aos";
  // import "aos/dist/aos.css";
  // import Footer from "./Footer.jsx"

  // const events = [
  //   {
  //     id: 1,
  //     title: "RoboWars",
  //     description: "Battle it out with robots in an epic showdown.",
  //     eventImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308451/robowar_uofjth.webp",
  //     transformerImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308113/event_optimus_dr9xl5.png",
  //     cardClass: "card",
  //     buttonsClass: "card-buttons",
  //   },
  //   {
  //     id: 2,
  //     title: "Path of Primes",
  //     description: "Race your robots to victory.",
  //     eventImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308462/Roborace_nwwrci.jpg",
  //     transformerImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308122/event_bumblebee_rrb3ue.png",
  //     cardClass: "card-2",
  //     buttonsClass: "card-buttons-2",
  //   },
  //   {
  //     id: 3,
  //     title: "Aerotron",
  //     description: "Test your drone navigation skills.",
  //     eventImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308484/drone_alt6dy.jpg",
  //     transformerImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308105/event_drift_n57frh.png",
  //     cardClass: "card-2",
  //     buttonsClass: "card-buttons-2",
  //   },
  //   {
  //     id: 4,
  //     title: "Traceformer",
  //     description: "Program robots to follow a designated path.",
  //     eventImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308471/LineFollower_davy5p.webp",
  //     transformerImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308134/event_crosshair_lyvacu.png",
  //     cardClass: "card-2",
  //     buttonsClass: "card-buttons-2",
  //   },
  //   {
  //     id: 5,
  //     title: "Optimus Striker",
  //     description: "Score goals with your robotic teammates.",
  //     eventImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308522/soccer_hjsgpv.png",
  //     transformerImage: "https://res.cloudinary.com/dupeml4xm/image/upload/v1736308240/event_transformer_twn32n.png",
  //     cardClass: "card-2",
  //     buttonsClass: "card-buttons-2",
  //   },
  // ];

  // const EventPage = () => {
  //   useEffect(() => {
  //     AOS.init({ duration: 1000 });
  //   }, []);

    // return (
    //   <div>
    //     <NavBar className="eventPageNavBar" />
    //     <hr />
    //     <div className="event_page">
    //       <div className="page1">
    //         {/* First Event Card */}
    //       <h1 className="event_page_title" data-aos="fade-down">EVENTS</h1>
    //         <div className="roboWarCards" data-aos="fade-up">
    //           <div className="overlay-image">
    //             <img
    //               src={events[0].transformerImage}
    //               alt={`${events[0].title} Transformer`}
    //               className="overlay-image-transformer"
    //             />
    //             <img
    //               src={events[0].eventImage}
    //               alt={`${events[0].title} Event`}
    //               className="overlay-event-image"
    //             />
    //           </div>
    //           <div className={events[0].cardClass} >
    //             <div className="card-content">
    //               <h2>{events[0].title}</h2>
    //               <p>{events[0].description}</p>
    //               <div className={events[0].buttonsClass}>
    //                 <button className="btn">Register</button>
    //                 <button className="btn">Rule Book</button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Remaining Event Cards */}
    //       <div className="page2" >
    //         <div className="cards-container-2" >
    //           {events.slice(1).map((event) => (
    //             <div key={event.id} className="card-wrapper" data-aos="fade-up">
    //               <div className="overlay-image-2">
    //                 <img
    //                   src={event.transformerImage}
    //                   alt={`${event.title} Transformer`}
    //                   className="overlay-image-transformer"
    //                 />
    //                 <img
    //                   src={event.eventImage}
    //                   alt={`${event.title} Event`}
    //                   className="overlay-event-image-2"
    //                 />
    //               </div>
    //               <div className={event.cardClass}>
    //                 <div className={`card-content${event.cardClass === "card-2" ? "-2" : ""}`}>
    //                   <h2>{event.title}</h2>
    //                   <p>{event.description}</p>
    //                   <div className={event.buttonsClass}>
    //                     <button
    //                       className={`btn${event.buttonsClass === "card-buttons-2" ? "-2" : ""}`}
    //                     >
    //                       Register
    //                     </button>
    //                     <button
    //                       className={`btn${event.buttonsClass === "card-buttons-2" ? "-2" : ""}`}
    //                     >
    //                       Rule Book
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <Footer/>
    //   </div>
  //     <div className='Accommodation2'>
  //     <div className='AccomodationNavBar2'>
  //         <NavBar className="AccomodationNavBar2" />
  //     </div>
  //   <h1>Coming Soon....</h1>
  // </div>
  //   );
  // };

  // export default EventPage;
  import React, { useState, useEffect } from 'react';
  import "../css/Accomodation.css";
  import NavBar from './NavBar';
  import Footer from './Footer';
  import Loader from './Loader';
  
  const EventPage = () => {
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
  
  export default EventPage;