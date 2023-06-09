import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TelegramContainer from "../components/telegram-container";
import Footer from "../components/footer";
import "./portfolio3.css";
const Portfolio3 = () => {
  const navigate = useNavigate();

  const onWORKTextClick = useCallback(() => {
    navigate("/portfolio-1");
  }, [navigate]);

  const onABOUTMEClick = useCallback(() => {
    navigate("/portfolio-2");
  }, [navigate]);

  return (
    <div className="portfolio-3">
      <div className="header">
        <div className="box-3">
          <div className="box-3-child" />
          <div className="box-3-child" />
        </div>
        <div className="box-2">
          <div className="box-2-child" />
          <div className="box-3-child" />
        </div>
        <div className="box-1">
          <div className="work" onClick={onWORKTextClick}>
            WORK
          </div>
          <div className="about-me" onClick={onABOUTMEClick}>
            ABOUT ME ❤️
          </div>
          <b className="contacts">CONTACTS</b>
        </div>
      </div>
      <TelegramContainer />
      <Footer />
      <img className="contact-img-icon" alt="" src="/contact-img@2x.png" />
    </div>
  );
};

export default Portfolio3;
