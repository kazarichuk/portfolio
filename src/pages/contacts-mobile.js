import { useCallback } from "react";
import BottomFooter from "../components/bottom-footer";
import { useNavigate } from "react-router-dom";
import ContactContainer from "../components/contact-container";
import "./contacts-mobile.css";
const ContactsMobile = () => {
  const navigate = useNavigate();

  const onWORKTextClick = useCallback(() => {
    navigate("/work-mobile");
  }, [navigate]);

  const onABOUTMEClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="contacts-mobile">
      <BottomFooter
        productIds="/icons10.svg"
        productIdsArray="/icons11.svg"
        productIdsToDisplay="/icons7.svg"
        productIdsToDisplay2="/icons12.svg"
        productIdsToDisplay3="/icons9.svg"
      />
      <div className="header2">
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
          <b className="contacts2">CONTACTS</b>
        </div>
      </div>
      <ContactContainer />
      <img className="contact-img-icon" alt="" src="/contact-img@2x.png" />
    </div>
  );
};

export default ContactsMobile;
