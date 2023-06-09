import { useCallback } from "react";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import ContactContainer from "../components/contact-container";
import "./contacts-mobile.css";
const ContactsMobile = () => {
  const navigate = useNavigate();

  const onWORKTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onABOUTMEClick = useCallback(() => {
    navigate("/about-mobile");
  }, [navigate]);

  return (
    <div className="contacts-mobile">
      <Footer
        icons="/icons10.svg"
        icons1="/icons11.svg"
        icons2="/icons2.svg"
        icons3="/icons12.svg"
        icons4="/icons4.svg"
      />
      <div className="header2">
        <div className="box-31">
          <div className="box-3-inner" />
          <div className="box-3-inner" />
        </div>
        <div className="box-21">
          <div className="box-2-inner" />
          <div className="box-3-inner" />
        </div>
        <div className="box-11">
          <div className="work1" onClick={onWORKTextClick}>
            WORK
          </div>
          <div className="about-me1" onClick={onABOUTMEClick}>
            ABOUT ME ❤️
          </div>
          <b className="contacts1">CONTACTS</b>
        </div>
      </div>
      <ContactContainer />
      <img className="contact-img-icon" alt="" src="/contact-img@2x.png" />
    </div>
  );
};

export default ContactsMobile;
