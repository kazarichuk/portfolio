import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Portfolio3 from "./pages/portfolio3";
import Portfolio1 from "./pages/portfolio1";
import Portfolio2 from "./pages/portfolio2";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

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
      case "/portfolio-1":
        title = "";
        metaDescription = "";
        break;
      case "/portfolio-2":
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
      <Route path="/" element={<Portfolio3 />} />
      <Route path="/portfolio-1" element={<Portfolio1 />} />
      <Route path="/portfolio-2" element={<Portfolio2 />} />
    </Routes>
  );
}
export default App;
