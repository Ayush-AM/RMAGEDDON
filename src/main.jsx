import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FirstPage from './jsx/HomePage';
import 'remixicon/fonts/remixicon.css';
import EventPage from './jsx/EventPage';
import Contact from './jsx/Contact';
import Loader from './jsx/Loader';
import Accommodation from './jsx/Accommodation';
import { useState, useEffect, useRef } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/event",
    element: <EventPage />,
  },
  {
    path: "/accomodation",
    element: <Accommodation />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

function App() {
  const [loading, setLoading] = useState(true);
  const hasLoadedOnce = useRef(false); 

  useEffect(() => {
    if (!hasLoadedOnce.current) {
      setTimeout(() => {
        setLoading(false);
        hasLoadedOnce.current = true; 
      }, 4000); 
    } else {
      setLoading(false); 
    }
  }, []);

  return (
    <StrictMode><RouterProvider router={router} />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
