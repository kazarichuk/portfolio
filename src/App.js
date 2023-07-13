// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import KosMobile from "./pages/kos-mobile";
import KosWeb from "./pages/kos-web";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/kosweb":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LazyLoadComponent
            placeholder={<LoadingSpinner />}
            threshold={100}
            effect="blur"
          >
            {isMobile ? <KosMobile /> : <KosWeb />}
          </LazyLoadComponent>
        }
      />
    </Routes>
  );
}

export default App;
