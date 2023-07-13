// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import KosMobile from "./pages/kos-mobile";
import KosWeb from "./pages/kos-web";
import { CSSTransition } from "react-transition-group";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CSSTransition
              in={isLoading}
              timeout={300}
              classNames="loader"
              unmountOnExit
            >
              <LoadingSpinner />
            </CSSTransition>
            <CSSTransition
              in={!isLoading}
              timeout={300}
              classNames="content"
              unmountOnExit
            >
              <div className="content">
                {isMobile ? <KosMobile /> : <KosWeb />}
              </div>
            </CSSTransition>
          </>
        }
      />
    </Routes>
  );
}

export default App;
