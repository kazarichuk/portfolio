import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DesignContainer from "../components/design-container";
import ManagementContainer from "../components/management-container";
import BottomFooter from "../components/bottom-footer";
import "./about.css";
const About = () => {
  const navigate = useNavigate();

  const onWORKTextClick = useCallback(() => {
    navigate("/work");
  }, [navigate]);

  const onCONTACTSTextClick = useCallback(() => {
    navigate("/contacts");
  }, [navigate]);

  return (
    <div className="about">
      <div className="header5">
        <div className="box-34">
          <div className="box-3-child5" />
          <div className="box-3-child5" />
        </div>
        <div className="box-24">
          <div className="box-2-child6" />
          <div className="box-3-child5" />
        </div>
        <div className="box-14">
          <div className="work5" onClick={onWORKTextClick}>
            WORK
          </div>
          <b className="about-me4">ABOUT ME ❤️</b>
          <div className="contacts5" onClick={onCONTACTSTextClick}>
            CONTACTS
          </div>
        </div>
      </div>
      <div className="content">
        <div className="info">
          <div className="text5">
            <div className="so-it-is-me-group">
              <b className="so-it-is1">SO, IT IS ME</b>
              <b className="who-i-am1">Who I am</b>
            </div>
            <div className="hi-there-my-container1">
              <p className="hi-there-my1">
                Hi there! My name is Konstantin, and I'm a seasoned Senior UX
                Designer with a passion for creating innovative design solutions
                for web and mobile apps. Although I'm skilled in designing for
                various platforms, I particularly enjoy crafting designs for IOS
                applications. My area of specialization is interaction design,
                and I love exploring this aspect of the design process.
              </p>
              <p className="hi-there-my1">&nbsp;</p>
              <p className="hi-there-my1">
                I'm a lifelong learner, and I'm always seeking to improve my
                skills and knowledge. To this end, I have taken many courses in
                design, management, leadership, and development, among others.
                This allows me to stay up-to-date with the latest design trends
                and technologies, which I incorporate into my work.
              </p>
              <p className="hi-there-my1">
                As a project manager early in my career, I learned valuable
                skills in estimating, delegating, managing teams, and resolving
                conflicts. This experience, combined with my background as an
                entrepreneur, has helped me understand the importance of finding
                a balance between user needs and business goals.
              </p>
              <p className="hi-there-my1">&nbsp;</p>
              <p className="hi-there-my1">
                I'm also a mentor at heart, and I enjoy sharing my knowledge and
                experience with others. Helping others overcome design hurdles
                and reach their goals is a passion of mine.
              </p>
              <p className="hi-there-my1">
                I'm excited by the challenge of pushing boundaries and exploring
                the cutting edge of design. I enjoy tackling complex and
                paradoxical design problems and am always willing to take
                calculated risks to achieve great results. Overall, my passion
                for design and my commitment to continuous improvement make me
                an ideal candidate for any project.
              </p>
            </div>
          </div>
          <img className="me-icon1" alt="" src="/me1@2x.png" />
        </div>
        <div className="frame-group">
          <div className="projects-group">
            <div className="projects1">Projects</div>
            <div className="code1">
              <div className="badge-neutral4">
                <div className="projects1">Banking</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">EdTech</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">SaaS</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">Retail</div>
              </div>
            </div>
          </div>
          <div className="projects-group">
            <div className="projects1">Code</div>
            <div className="code1">
              <div className="badge-neutral4">
                <div className="projects1">VS Code</div>
              </div>
              <div className="badge-neutral9">
                <div className="projects1">Java Script</div>
              </div>
              <div className="badge-neutral9">
                <div className="projects1">Tailwind CSS</div>
              </div>
              <div className="badge-neutral9">
                <div className="projects1">React</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">Core-js</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">PWA</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">CSS</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">HTML</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">Google Cloud</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">AWS</div>
              </div>
              <div className="badge-neutral4">
                <div className="projects1">MySQL</div>
              </div>
            </div>
          </div>
          <DesignContainer />
          <ManagementContainer />
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

export default About;
