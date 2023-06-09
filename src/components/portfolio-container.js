import "./portfolio-container.css";
const PortfolioContainer = () => {
  return (
    <div className="main-parent">
      <img className="main-icon" alt="" src="/main@2x.png" />
      <div className="name-parent">
        <div className="name">
          <div className="name-child" />
          <div className="name-item" />
          <b className="check-projects">Check Projects</b>
        </div>
        <div className="name">
          <div className="name-inner" />
          <div className="name-item" />
          <b className="check-cv">Check CV</b>
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
