import { useCallback } from "react";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import "./work-mobile.css";
const WorkMobile = () => {
  const navigate = useNavigate();

  const onABOUTMEClick = useCallback(() => {
    navigate("/about-mobile");
  }, [navigate]);

  const onCONTACTSTextClick = useCallback(() => {
    navigate("/contacts-mobile");
  }, [navigate]);
  const videoSrc = "https://www.youtube.com/embed/S2pewRajXwE";

  return (
    <div className="work-mobile">
      <Footer
        icons="/icons.svg"
        icons1="/icons1.svg"
        icons2="/icons2.svg"
        icons3="/icons3.svg"
        icons4="/icons4.svg"
      />
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
          <b className="work">WORK</b>
          <div className="about-me" onClick={onABOUTMEClick}>
            ABOUT ME ❤️
          </div>
          <div className="contacts" onClick={onCONTACTSTextClick}>
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
            rel="noopener noreferrer"
          >
            Check Projects
          </a>
          </div>
          <div className="name">
            <div className="name-inner" />
            <div className="rectangle-div" />
            <a
            className="check-cv"
            href="https://drive.google.com/file/d/1wOfAMXpQVxlOTg7TyRz5g0QaCmoiaxBy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check CV
          </a>
          </div>
        </div>
        <div className="box">
          <div className="text">
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>Looking forward to connecting with you!</div>
          <div className="video-container">
          <div
            dangerouslySetInnerHTML={{
              __html: `<iframe width="380" height="215" src=${videoSrc} 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
              encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            }}
          />
        </div>
        </div>
        <div className="feedbackcontainer-mobile">
              <div className="feedbackbox">
                <img className="feedback-06-icon" alt="" src="/feedback-06@2x.png" />
                <img className="feedback-05-icon" alt="" src="/feedback-05@2x.png" />
                <img className="feedback-04-icon" alt="" src="/feedback-04@2x.png" />
                <img className="feedback-03-icon" alt="" src="/feedback-03@2x.png" />
                <img className="feedback-02-icon" alt="" src="/feedback-02@2x.png" />
                <img className="feedback-01-icon" alt="" src="/feedback-01@2x.png" />
              </div>
            </div>
      </div>
    </div>
  );
};

export default WorkMobile;
