import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";  // Import the Helmet component
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import WorkMobile from "./pages/work-mobile";
import AboutMobile from "./pages/about-mobile";
import ContactsMobile from "./pages/contacts-mobile";
import Contacts from "./pages/contacts";
import Work from "./pages/work";
import About from "./pages/about";
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(false);
  const previousIsDesktop = useRef(isDesktop);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000ms delay = 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  

  useEffect(() => {
    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
    };

    const mediaQuery = window.matchMedia("(min-width: 1100px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const wasDesktop = previousIsDesktop.current;
    previousIsDesktop.current = isDesktop;

    if (wasDesktop !== isDesktop) {
      navigate("/");
    }
  }, [isDesktop, navigate]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the homepage";
        break;
      case "/about-mobile":
        title = "About Mobile";
        metaDescription = "About us on mobile";
        break;
      case "/contacts-mobile":
        title = "Contacts Mobile";
        metaDescription = "Contact us on mobile";
        break;
      case "/contacts":
        title = "Contacts";
        metaDescription = "Contact us";
        break;
      case "/work":
        title = "Work";
        metaDescription = "View our work";
        break;
      case "/about":
        title = "About";
        metaDescription = "Learn about us";
        break;
      default:
        title = "Page Not Found";
        metaDescription = "Sorry, the page you requested does not exist";
        break;
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <>
      <Helmet> 
        <title>{document.title}</title> 
        <meta name="description" content={document.querySelector('head > meta[name="description"]').content} /> 
      </Helmet>

      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          {isDesktop ? (
            <>
              <Route path="/" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/work" element={<Work />} />
            </>
          ) : (
            <>
              <Route path="/" element={<WorkMobile />} />
              <Route path="/about-mobile" element={<AboutMobile />} />
              <Route path="/contacts-mobile" element={<ContactsMobile />} />
              <Route path="/work-mobile" element={<WorkMobile />} />
            </>
          )}
        </Routes>
      )}
    </>
  );
}

export default App;
