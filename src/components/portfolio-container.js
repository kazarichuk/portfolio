import "./portfolio-container.css";
const PortfolioContainer = () => {
  return (
    <div className="main-parent">
      <img className="main-icon" alt="" src="/main@2x.png" />
      <div className="name-parent">
        <div className="name">
          <div className="name-child" />
          <div className="name-item" />
          <a href="https://www.figma.com/proto/AFRgUvVtcrWOxuvRgeqngO/Portfolio-v2?node-id=0-1&viewport=1194%2C1051%2C0.14&scaling=min-zoom&starting-point-node-id=1%3A2809" target="_blank" rel="noopener noreferrer">
          <b className="check-projects">Check Projects</b>
          </a>
        </div>
        <div className="name">
          <div className="name-inner" />
          <div className="name-item" />
          <a href="https://drive.google.com/file/d/1VdatcOYUnK2xEqK4h3MtMRAV3xgQZvkj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <b className="check-cv">Check CV</b>
          </a>
        </div>
      </div>
      <div className="box">
        <div className="text1">
          <p className="im-excited-to">
            I'm excited to showcase my portfolio, a testament to my proficiency
            in modern web technologies and user experience design.
          </p>
          <p className="im-excited-to">
            {" "}
            Enjoy exploring and feel free to reach out for any inquiries or
            collaboration opportunities.
          </p>
        </div>
        <div className="badge">
          <b className="label15">
            Please view on web for an optimal experience
          </b>
        </div>
        <div className="text1">Looking forward to connecting with you!</div>
      </div>
    </div>
  );
};

export default PortfolioContainer;
