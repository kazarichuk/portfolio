import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BottomFooter from "../components/bottom-footer";
import "./work.css";
const Work = () => {
  const navigate = useNavigate();

  const onABOUTMEClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onCONTACTSTextClick = useCallback(() => {
    navigate("/contacts");
  }, [navigate]);

  return (
    <div className="work3">
      <div className="header4">
        <div className="box-33">
          <div className="box-3-child3" />
          <div className="box-3-child3" />
        </div>
        <div className="box-23">
          <div className="box-2-child4" />
          <div className="box-3-child3" />
        </div>
        <div className="box-13">
          <b className="work4">WORK</b>
          <div className="about-me3" onClick={onABOUTMEClick}>
            ABOUT ME ❤️
          </div>
          <div className="contacts4" onClick={onCONTACTSTextClick}>
            CONTACTS
          </div>
        </div>
      </div>
      <div className="main-group">
        <img className="main-icon1" alt="" src="/main1@2x.png" />
        <div className="name-group">
          <div className="name2">
            <div className="name-child1" />
            <div className="name-child2" />
            <a
              className="check-projects1"
              href={`https://www.figma.com/proto/AFRgUvVtcrWOxuvRgeqngO/Portfolio-v2?node-id=0-1&viewport=1194%2C1051%2C0.14&scaling=min-zoom&starting-point-node-id=1%3A2809`}
              target="_blank"
              rel="noreferrer"
            >
              Check Projects
            </a>
          </div>
          <div className="name2">
            <div className="name-child3" />
            <div className="name-child2" />
            <a
              className="check-cv1"
              href="https://drive.google.com/file/d/1VdatcOYUnK2xEqK4h3MtMRAV3xgQZvkj/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Check CV
            </a>
          </div>
        </div>
        <div className="box1">
          <div className="text3">
            <p className="im-excited-to1">
              I'm excited to showcase my portfolio, a testament to my
              proficiency in modern web technologies and user experience design.
            </p>
            <p className="im-excited-to1">
              {" "}
              Enjoy exploring and feel free to reach out for any inquiries or
              collaboration opportunities.
            </p>
          </div>
          <div className="badge1">
            <b className="label5">
              Please view on web for an optimal experience
            </b>
          </div>
          <div className="text3">Looking forward to connecting with you!</div>
        </div>
        <div className="feedbackcontainer-web">
          <div className="feedbackbox1">
            <div className="feedbackbox-child" />
            <img className="feedback-06-icon1" alt="" src="/feedback-06@2x.png" />
            <img className="feedback-05-icon1" alt="" src="/feedback-05@2x.png" />
            <img className="feedback-04-icon1" alt="" src="/feedback-04@2x.png" />
            <img className="feedback-03-icon1" alt="" src="/feedback-03@2x.png" />
            <img className="feedback-02-icon1" alt="" src="/feedback-02@2x.png" />
            <img className="feedback-01-icon1" alt="" src="/feedback-01@2x.png" />
          </div>
    </div>
      </div>
      <BottomFooter
        productIds="/icons13.svg"
        productIds24x24="/icons14.svg"
        productIds24x24x="/icons15.svg"
        propZIndex="unset"
      />
    </div>
  );
};

export default Work;
