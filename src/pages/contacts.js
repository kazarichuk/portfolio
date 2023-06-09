import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TelegramContainer from "../components/telegram-container";
import BottomFooter from "../components/bottom-footer";
import "./contacts.css";
const Contacts = () => {
  const navigate = useNavigate();

  const onWORKTextClick = useCallback(() => {
    navigate("/work");
  }, [navigate]);

  const onABOUTMEClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="contacts2">
      <div className="header3">
        <div className="box-32">
          <div className="box-3-child1" />
          <div className="box-3-child1" />
        </div>
        <div className="box-22">
          <div className="box-2-child2" />
          <div className="box-3-child1" />
        </div>
        <div className="box-12">
          <div className="work2" onClick={onWORKTextClick}>
            WORK
          </div>
          <div className="about-me2" onClick={onABOUTMEClick}>
            ABOUT ME ❤️
          </div>
          <b className="contacts3">CONTACTS</b>
        </div>
      </div>
      <TelegramContainer />
      <img className="contact-img-icon1" alt="" src="/contact-img1@2x.png" />
      <BottomFooter
        productIds="/icons5.svg"
        productIds24x24="/icons6.svg"
        productIds24x24x="/icons8.svg"
      />
    </div>
  );
};

export default Contacts;
