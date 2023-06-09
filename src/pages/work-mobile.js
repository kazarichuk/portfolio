import { useCallback } from "react";
import BottomFooter from "../components/bottom-footer";
import { useNavigate } from "react-router-dom";
import "./work-mobile.css";
const WorkMobile = () => {
  const navigate = useNavigate();

  const onABOUTMEClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCONTACTSTextClick = useCallback(() => {
    navigate("/contacts-mobile");
  }, [navigate]);

  return (
    <div className="work-mobile">
      <BottomFooter
        productIds="/icons5.svg"
        productIdsArray="/icons6.svg"
        productIdsToDisplay="/icons7.svg"
        productIdsToDisplay2="/icons8.svg"
        productIdsToDisplay3="/icons9.svg"
      />
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
      <div className="main-parent">
        <img className="main-icon" alt="" src="/main@2x.png" />
        <div className="name-parent">
          <div className="name">
            <div className="name-child" />
            <div className="name-item" />
            <a
              className="check-projects"
              href={`https://www.figma.com/proto/AFRgUvVtcrWOxuvRgeqngO/Portfolio-v2?node-id=0-1&viewport=1194%2C1051%2C0.14&scaling=min-zoom&starting-point-node-id=1%3A2809`}
              target="_blank"
            >
              Check Projects
            </a>
          </div>
          <div className="name">
            <div className="name-inner" />
            <div className="rectangle-div" />
            <a
              className="check-cv"
              href="https://drive.google.com/file/d/1VdatcOYUnK2xEqK4h3MtMRAV3xgQZvkj/view?usp=sharing"
              target="_blank"
            >
              Check CV
            </a>
          </div>
        </div>
        <div className="box">
          <div className="text1">
            <p className="im-excited-to">
              I'm excited to showcase my portfolio, a testament to my
              proficiency in modern web technologies and user experience design.
            </p>
            <p className="im-excited-to">
              {" "}
              Enjoy exploring and feel free to reach out for any inquiries or
              collaboration opportunities.
            </p>
          </div>
          <div className="badge">
            <b className="label">
              Please view on web for an optimal experience
            </b>
          </div>
          <div className="text1">Looking forward to connecting with you!</div>
        </div>
      </div>
    </div>
  );
};

export default WorkMobile;
