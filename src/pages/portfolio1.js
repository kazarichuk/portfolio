import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PortfolioContainer from "../components/portfolio-container";
import BottomFooter from "../components/bottom-footer";
import "./portfolio1.css";
const Portfolio1 = () => {
  const navigate = useNavigate();

  const onABOUTMEClick = useCallback(() => {
    navigate("/portfolio-2");
  }, [navigate]);

  const onCONTACTSTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="portfolio-1">
      <div className="header1">
        <div className="box-31">
          <div className="box-3-inner" />
          <div className="box-3-inner" />
        </div>
        <div className="box-21">
          <div className="box-2-inner" />
          <div className="box-3-inner" />
        </div>
        <div className="box-11">
          <b className="work1">WORK</b>
          <div className="about-me1" onClick={onABOUTMEClick}>
            ABOUT ME ❤️
          </div>
          <div className="contacts1" onClick={onCONTACTSTextClick}>
            CONTACTS
          </div>
        </div>
      </div>
      <PortfolioContainer />
      <BottomFooter />
    </div>
  );
};

export default Portfolio1;
