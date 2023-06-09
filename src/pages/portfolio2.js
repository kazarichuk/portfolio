import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DesignContainer from "../components/design-container";
import ManagementContainer from "../components/management-container";
import BottomFooter from "../components/bottom-footer";
import "./portfolio2.css";
const Portfolio2 = () => {
  const navigate = useNavigate();

  const onWORKTextClick = useCallback(() => {
    navigate("/portfolio-1");
  }, [navigate]);

  const onCONTACTSTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="portfolio-2">
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
          <b className="about-me2">ABOUT ME ❤️</b>
          <div className="contacts2" onClick={onCONTACTSTextClick}>
            CONTACTS
          </div>
        </div>
      </div>
      <div className="content">
        <div className="info">
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
                applications. My area of specialization is interaction design,
                and I love exploring this aspect of the design process.
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
                As a project manager early in my career, I learned valuable
                skills in estimating, delegating, managing teams, and resolving
                conflicts. This experience, combined with my background as an
                entrepreneur, has helped me understand the importance of finding
                a balance between user needs and business goals.
              </p>
              <p className="hi-there-my">&nbsp;</p>
              <p className="hi-there-my">
                I'm also a mentor at heart, and I enjoy sharing my knowledge and
                experience with others. Helping others overcome design hurdles
                and reach their goals is a passion of mine.
              </p>
              <p className="hi-there-my">
                I'm excited by the challenge of pushing boundaries and exploring
                the cutting edge of design. I enjoy tackling complex and
                paradoxical design problems and am always willing to take
                calculated risks to achieve great results. Overall, my passion
                for design and my commitment to continuous improvement make me
                an ideal candidate for any project.
              </p>
            </div>
          </div>
          <img className="me-icon" alt="" src="/me@2x.png" />
        </div>
        <div className="frame-parent">
          <div className="projects-parent">
            <div className="projects">Projects</div>
            <div className="code">
              <div className="badge-neutral">
                <div className="projects">Banking</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">EdTech</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">SaaS</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">Retail</div>
              </div>
            </div>
          </div>
          <div className="projects-parent">
            <div className="projects">Code</div>
            <div className="code">
              <div className="badge-neutral">
                <div className="projects">VS Code</div>
              </div>
              <div className="badge-neutral5">
                <div className="projects">Java Script</div>
              </div>
              <div className="badge-neutral5">
                <div className="projects">Tailwind CSS</div>
              </div>
              <div className="badge-neutral5">
                <div className="projects">React</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">Core-js</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">PWA</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">CSS</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">HTML</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">Google Cloud</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">AWS</div>
              </div>
              <div className="badge-neutral">
                <div className="projects">MySQL</div>
              </div>
            </div>
          </div>
          <DesignContainer />
          <ManagementContainer />
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default Portfolio2;
