import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TelegramContainer from "../components/telegram-container";
import Footer from "../components/footer";
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
    <div className="contacts3">
      <div className="header3">
        <div className="box-33">
          <div className="box-3-child3" />
          <div className="box-3-child3" />
        </div>
        <div className="box-23">
          <div className="box-2-child4" />
          <div className="box-3-child3" />
        </div>
        <div className="box-13">
          <div className="work3" onClick={onWORKTextClick}>
            WORK
          </div>
          <div className="about-me3" onClick={onABOUTMEClick}>
            ABOUT ME ❤️
          </div>
          <b className="contacts4">CONTACTS</b>
        </div>
      </div>
      <TelegramContainer />
      <img className="contact-img-icon1" alt="" src="/contact-img1@2x.png" />
      <Footer
        productIds="/icons.svg"
        productIdsArray="/icons1.svg"
        productIdsString="/icons2.svg"
        productIds24x24="/icons3.svg"
        productIds24x24Array="/icons4.svg"
      />
    </div>
  );
};

export default Contacts;
