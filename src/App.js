import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AboutMobile from "./pages/about-mobile";
import WorkMobile from "./pages/work-mobile";
import ContactsMobile from "./pages/contacts-mobile";
import Contacts from "./pages/contacts";
import Work from "./pages/work";
import About from "./pages/about";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    const handleMediaQueryChange = (event) => {
      setIsDesktop(event.matches);
    };

    const mediaQuery = window.matchMedia("(min-width: 1100px)"); // Change 1200px to 1100px
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery); // Call the function initially to set up the correct version

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the homepage";
        break;
      case "/work-mobile":
        title = "Mobile Work";
        metaDescription = "View our work on mobile";
        break;
      case "/contacts-mobile":
        title = "Mobile Contacts";
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
    <Routes>
      {/* Render mobile or desktop versions of the pages based on screen width */}
      {isDesktop ? (
        <>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </>
      ) : (
        <>
          <Route path="/" element={<AboutMobile />} />
          <Route path="/work-mobile" element={<WorkMobile />} />
          <Route path="/contacts-mobile" element={<ContactsMobile />} />
        </>
      )}
    </Routes>
  );
}

export default App;
