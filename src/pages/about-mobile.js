import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CodeSection from "../components/code-section";
import DesignSection from "../components/design-section";
import ManagementSection from "../components/management-section";
import Footer from "../components/footer";
import "./about-mobile.css";
const AboutMobile = () => {
  const navigate = useNavigate();

  const onWORKTextClick = useCallback(() => {
    navigate("/work-mobile");
  }, [navigate]);

  const onCONTACTSTextClick = useCallback(() => {
    navigate("/contacts-mobile");
  }, [navigate]);

  return (
    <div className="about-mobile">
      <header className="header">
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
          <b className="about-me">ABOUT ME ❤️</b>
          <div className="contacts" onClick={onCONTACTSTextClick}>
            CONTACTS
          </div>
        </div>
      </header>
      <div className="me-parent">
        <img className="me-icon" alt="" src="/me@2x.png" />
        <div className="text">
          <div className="so-it-is-me-parent">
            <b className="so-it-is">SO, IT IS ME</b>
            <b className="who-i-am">Who I am</b>
          </div>
          <div className="hi-there-my-container">
            <p className="hi-there-my">
              Hi there! My name is Konstantin, and I'm a seasoned Senior UX
              Designer with a passion for creating innovative design solutions
              for web and mobile apps. Although I'm skilled in designing for
              various platforms, I particularly enjoy crafting designs for IOS
              applications. My area of specialization is interaction design, and
              I love exploring this aspect of the design process.
            </p>
            <p className="hi-there-my">&nbsp;</p>
            <p className="hi-there-my">
              I'm a lifelong learner, and I'm always seeking to improve my
              skills and knowledge. To this end, I have taken many courses in
              design, management, leadership, and development, among others.
              This allows me to stay up-to-date with the latest design trends
              and technologies, which I incorporate into my work.
            </p>
            <p className="hi-there-my">
              As a project manager early in my career, I learned valuable skills
              in estimating, delegating, managing teams, and resolving
              conflicts. This experience, combined with my background as an
              entrepreneur, has helped me understand the importance of finding a
              balance between user needs and business goals.
            </p>
            <p className="hi-there-my">&nbsp;</p>
            <p className="hi-there-my">
              I'm also a mentor at heart, and I enjoy sharing my knowledge and
              experience with others. Helping others overcome design hurdles and
              reach their goals is a passion of mine.
            </p>
            <p className="hi-there-my">
              I'm excited by the challenge of pushing boundaries and exploring
              the cutting edge of design. I enjoy tackling complex and
              paradoxical design problems and am always willing to take
              calculated risks to achieve great results. Overall, my passion for
              design and my commitment to continuous improvement make me an
              ideal candidate for any project.
            </p>
          </div>
        </div>
        <div className="frame-parent">
          <div className="projects-parent">
            <div className="projects">Projects</div>
            <div className="code">
              <div className="badge-neutral">
                <div className="label">Banking</div>
              </div>
              <div className="badge-neutral1">
                <div className="label">EdTech</div>
              </div>
              <div className="badge-neutral2">
                <div className="label">SaaS</div>
              </div>
              <div className="badge-neutral3">
                <div className="label">Retail</div>
              </div>
            </div>
          </div>
          <CodeSection />
          <DesignSection />
          <ManagementSection />
        </div>
      </div>
      <Footer
        icons="/icons5.svg"
        icons1="/icons6.svg"
        icons2="/icons7.svg"
        icons3="/icons8.svg"
        icons4="/icons9.svg"
      />
    </div>
  );
};

export default AboutMobile;
