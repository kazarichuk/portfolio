import { useState, useCallback } from "react";
import styles from "./kos-web.module.css";
import projectsImage from "../assets/Path-Pojects.webp";
import codeImage from "../assets/Path-Code.webp";
import designImage from "../assets/Path-Design.webp";
import managementImage from "../assets/Path-Managment.webp";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LoadingSpinner from "../components/LoadingSpinner";



const KosWeb = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showProjects, setShowProjects] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showManagement, setShowManagement] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleButtonClick = useCallback((buttonName) => {
    setActiveButton(buttonName);
    setShowProjects(buttonName === "projects");
    setShowCode(buttonName === "code");
    setShowDesign(buttonName === "design");
    setShowManagement(buttonName === "managementSupport");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/.netlify/functions/submitEmail", {
        email,
      });

      setMessage("Email successfully sent!");
    } catch (error) {
      setMessage("Failed to send email");
    }
  };

  const handleProjectsButtonClick = () => {
    setShowProjects(!showProjects);
  };
  const onButtonHeaderCreationsContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='craftingInteractiveDesigns']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonHeaderExpertiseContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='windowContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonHeaderBehindContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='moonPictureContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonHeaderConnectContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='boxOfCantacts']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPrimaryButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='boxOfCantacts']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonFooter04ContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='craftingInteractiveDesigns']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='windowContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonFooter02ContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonFooter01ContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='boxOfCantacts']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.kosWeb}>
      <img className={styles.secondIcon} alt="" src="/second1@2x.webp" />
      <img className={styles.thirdIcon} alt="" src="/third1_2x.webp" />
      <div className={styles.text}>
        <div className={styles.whatIAm}>What I am looking for</div>
        <div className={styles.imInSearch}>
          I'm in search of an engaging company that nurtures growth and offers
          the opportunity to work with a high-performing team. I aspire to
          contribute to and celebrate remarkable achievements together while
          enjoying a variety of challenges to keep things stimulating.
        </div>
      </div>
      <div className={styles.moonpicture} data-scroll-to="moonPictureContainer">
        <div className={styles.moonshadow} />
        <div className={styles.moonframe}>
          <img className={styles.moonIcon} alt="Moon" src="/moon1.svg" />
        </div>
      </div>
      <div className={styles.kosWebChild} />
      <img className={styles.x30001Icon} alt="" src="/00113000x3000-1@2x.webp" />
      <img
        className={styles.x30003Icon}
        alt=""
        src="/00113000x3000-31@2x.png"
      />
      <img
        className={styles.x30002Icon}
        alt=""
        src="/00113000x3000-21@2x.webp"
      />
      <div className={styles.kosWebItem} />
      <div className={styles.kosWebInner} />
      <div className={styles.mainParent}>
      <LazyLoadImage
          className={styles.mainIcon}
          alt="Kazarichuk Design"
          src="/Main-Kos-Portfolio.webp"
          effect="opacity" // Optional: add a transition effect when the image is loaded
        />
        <div className={styles.h1TitleParent}>
          <div className={styles.h1Title}>Kazarichuk Design</div>
          <div
            className={styles.h2Subtitle}
          >{`Crafting Digital Experiences with Precision & Passion`}</div>
        </div>
      </div>
      <img
        className={styles.animationHomeIcon}
        alt=""
        src="/animationhome.svg"
      />
      <header className={styles.header}>
        <div
          className={styles.buttonHeaderCreations}
          onClick={onButtonHeaderCreationsContainerClick}
        >
          <div className={styles.creations}>Creations</div>
        </div>
        <div
          className={styles.buttonHeaderExpertise}
          onClick={onButtonHeaderExpertiseContainerClick}
        >
          <div className={styles.creations}>Expertise</div>
        </div>
        <div
          className={styles.buttonHeaderBehind}
          onClick={onButtonHeaderBehindContainerClick}
        >
          <div className={styles.creations}>Behind the Scenes</div>
        </div>
        <div
          className={styles.buttonHeaderConnect}
          onClick={onButtonHeaderConnectContainerClick}
        >
          <div className={styles.creations}>Connect</div>
        </div>
      </header>
      <div className={styles.textH6}>
        <span>{`Delve deeper into my professional journey. Explore my comprehensive `}</span>
        <span className={styles.figmaPortfolio}>Figma portfolio</span>
        <span>{` and access my detailed `}</span>
        <span className={styles.figmaPortfolio}>PDF Resume below</span>
        <span>. Let's embark on a design adventure together.</span>
      </div>
      <button className={styles.primaryButton} onClick={onPrimaryButtonClick}>
        <b className={styles.label}>Let's Collaborate</b>
      </button>
      <div className={styles.boxOfCantacts} data-scroll-to="boxOfCantacts">
        <a
          className={styles.email}
          href="mailto:kazarichuk@gmail.com"
          target="_blank"
        >
          kazarichuk@gmail.com
        </a>
        <b className={styles.phone}>+381 62 849 63 44</b>
        <div className={styles.text1}>
          Get in Touch and Let's Create Something Amazing Together
        </div>
      </div>
      <div className={styles.about}>
        <div
          className={styles.craftingInteractiveDesigns}
          data-scroll-to="craftingInteractiveDesigns"
        >{`Crafting Interactive Designs for Web & Mobile`}</div>
        <div className={styles.frameParent}>
          <div className={styles.aSeniorUxDesignerWithASpWrapper}>
            <div className={styles.aSeniorUx}>
              A Senior UX Designer with a specialization in interactive design
              for iOS applications. Bridging the gap between the latest trends,
              user needs, and business objectives is my forte.
            </div>
          </div>
          <div className={styles.withAnEntrepreneurialBackgrWrapper}>
            <div className={styles.aSeniorUx}>
              With an entrepreneurial background and a heart for mentorship, I
              navigate the complex world of design, taking calculated risks to
              deliver innovative solutions and foster growth.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.startups}>
        <img className={styles.specklesIcon} alt="" src="/speckles@2x.webp" />
        <div className={styles.iveEstablishedVarious}>
          I've established various startups throughout my career, both
          successful and some less so. My extensive experience includes
          collaboration with seed-stage companies and spearheading product
          development within large corporations. I'm well-versed in managing the
          entire product life cycle.
        </div>
        <div className={styles.startups1}>Startups</div>
      </div>
      
      <div className={styles.buttons}>
      <button
          className={styles.primaryButton1}
          onClick={() =>
            window.open(
              "https://www.figma.com/proto/AFRgUvVtcrWOxuvRgeqngO/Portfolio-v2?node-id=0-1&viewport=1194%2C1051%2C0.14&scaling=min-zoom&starting-point-node-id=1%3A2809",
              "_blank"
            )
          }
        >
          <b className={styles.label}>All Projects in Figma</b>
        </button>
        <button
          className={styles.outlinedButton}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1VdatcOYUnK2xEqK4h3MtMRAV3xgQZvkj/view?usp=sharing",
              "_blank"
            )
          }
        >
          <b className={styles.label2}>PDF Resume</b>
        </button>

      </div>
      <img className={styles.blob2Icon} alt="" src="/blob21@2x.webp" />
      <img className={styles.blob1Icon} alt="" src="/blob11@2x.webp" />
      <div className={styles.boxesLooking}>
        <div className={styles.ellipseParent} data-scroll-to="frameContainer">
          <img className={styles.frameChild} alt="" src="/ellipse-6@2x.webp" />
          <div className={styles.frameItem} />
          <div className={styles.socioDemographicsAnalystPs}>
            Socio-demographics analyst, psychology enthusiast, digital marketing
            expert.
          </div>
          <div className={styles.growth}>Growth</div>
        </div>
        <div className={styles.ellipseGroup}>
          <img className={styles.frameChild} alt="" src="/ellipse-61@2x.webp" />
          <div className={styles.frameItem} />
          <div className={styles.socioDemographicsAnalystPs}>
            Socio-demographics analyst, psychology enthusiast, digital marketing
            expert.
          </div>
          <div className={styles.growth}>Team Success</div>
        </div>
        <div className={styles.ellipseContainer}>
          <img className={styles.frameChild} alt="" src="/ellipse-62@2x.webp" />
          <div className={styles.frameItem} />
          <div className={styles.socioDemographicsAnalystPs}>
            Analysts, designers, psychologists involved in creating Life
            Experience Model platform.
          </div>
          <div className={styles.growth}>Challenges</div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.rectangle} />
        <div className={styles.copyright}>
          Design with love © Kazarichuk 2023. All right reserved
        </div>
        <img className={styles.lineIcon} alt="" src="/line1.svg" />

        <div className={styles.newsletter}>
      <form onSubmit={handleSubmit}>
        <div className={styles.buttons1}>
          <input
            className={styles.inputField}
            type="email"
            placeholder="Your email address…"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className={styles.buttonsmallstandart} type="submit">
            <div className={styles.rectangle8px}>
              <div className={styles.rectangle1} />
            </div>
            <div className={styles.button}>Get in Touch</div>
          </button>
        </div>
      </form>
      <div className={styles.description}>
        {message && <p>{message}</p>}
      </div>
    </div>



        <div className={styles.box}>
          <div className={styles.menu}>
            <div
              className={styles.buttonFooter04}
              onClick={onButtonFooter04ContainerClick}
            >
              <div className={styles.list}>Creations</div>
            </div>
            <div className={styles.buttonFooter03}>
              <div className={styles.list1} onClick={onListText1Click}>
                Expertise
              </div>
            </div>
            <div
              className={styles.buttonFooter04}
              onClick={onButtonFooter02ContainerClick}
            >
              <div className={styles.list}>Behind the Scenes</div>
            </div>
            <div
              className={styles.buttonFooter04}
              onClick={onButtonFooter01ContainerClick}
            >
              <div className={styles.list}>Connect</div>
            </div>
          </div>
          <img className={styles.logoIcon} alt="" src="/logo1.svg" />
        </div>
        <div className={styles.icons}>
          <a href="https://www.instagram.com/konstantin_kazarichuk/" className={styles.icons1} target="_blank">
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
          </a>
          <a href="https://github.com/kazarichuk" target="_blank">
            <img className={styles.icons2} alt="" src="/icons3.svg" />
          </a>
          <a href="https://www.linkedin.com/in/konstantin-k-1124791a0/" target="_blank">
            <img className={styles.icons2} alt="" src="/icons1.svg" />
          </a>
          <a href="https://medium.com/@kazarichuk" target="_blank">
            <img className={styles.icons2} alt="" src="/icons4.svg" />
          </a>
        </div>
      </footer>
      <div className={styles.box2}>
        <div className={styles.edtech}>
          <img
            className={styles.specklesIcon1}
            alt=""
            src="/speckles2@2x.webp"
          />
          <div className={styles.edtech1}>EdTech</div>
          <div className={styles.afterHundredsOf}>
            After hundreds of interviews and work on AI-based educational
            products, my passion and expertise in EdTech is profound.
          </div>
          <img className={styles.ellipses1Icon} alt="" src="/ellipses1.svg" />
        </div>
        <div className={styles.saas}>
          <img className={styles.ellipses1Icon} alt="" src="/ellipses1.svg" />
          <img
            className={styles.specklesIcon1}
            alt=""
            src="/speckles1@2x.webp"
          />
          <div className={styles.edtech1}>SaaS</div>
          <div className={styles.creatingIntricateSaas}>
            Creating intricate SaaS products that demand deep industry knowledge
            is where I thrive.
          </div>
        </div>
      </div>


      <div className={styles.windowdefoult}>
      <div className={styles.window} data-scroll-to="windowContainer">
        <div className={styles.text2}>
          {showProjects && activeButton !== "projects" && (
            <>
              <div className={styles.versatileSkillSet}>
                Versatile Skill Set for Comprehensive Solutions
              </div>
              <div className={styles.blendingDesignCoding}>
                Blending design, coding, project management, and support to deliver exceptional results across the digital landscape
              </div>
            </>
          )}
          {showProjects && activeButton === "projects" && (
              <LazyLoadImage
              className={styles.projectsImage}
              src={projectsImage}
              alt="Projects"
              effect="blur"
              threshold={500} // Увеличьте значение порога по необходимости

            />
          )}
          {!showProjects && showCode && (
              <LazyLoadImage
              className={styles.codeImage}
              src={codeImage}
              alt="Code"
              effect="blur"
              threshold={500} // Увеличьте значение порога по необходимости

            />
          )}
          {!showProjects && showDesign && (
              <LazyLoadImage
              className={styles.designImage}
              src={designImage}
              alt="Design"
              effect="blur"
              threshold={500} // Увеличьте значение порога по необходимости
            />
          )}
          {!showProjects && showManagement && (
              <LazyLoadImage
              className={styles.managementImage}
              src={managementImage}
              alt="Management & Support"
              effect="blur"
              threshold={500} // Увеличьте значение порога по необходимости
            />
          )}
        </div>
      </div>
      <div className={styles.controls}>
        <img
          className={styles.windowResizeLeading}
          alt=""
          src="/window-resize--leading.svg"
        />
        <img
          className={styles.windowResizeTrailing}
          alt=""
          src="/window-resize--trailing.svg"
        />
        <div className={styles.windowButtons}>
          <button
            className={`${styles.buttons2} ${
              activeButton === "projects" ? styles.activeButton : ""
            }`}
            onClick={() => handleButtonClick("projects")}
          >
            <div className={styles.projects}>Projects</div>
          </button>

          <button
            className={`${styles.buttons2} ${
              activeButton === "code" ? styles.activeButton : ""
            }`}
            onClick={() => handleButtonClick("code")}
          >
            <div className={styles.code}>Code</div>
          </button>

          <button
            className={`${styles.buttons2} ${
              activeButton === "design" ? styles.activeButton : ""
            }`}
            onClick={() => handleButtonClick("design")}
          >
            <div className={styles.design}>Design</div>
          </button>

          <button
            className={`${styles.buttons2} ${
              activeButton === "managementSupport" ? styles.activeButton : ""
            }`}
            onClick={() => handleButtonClick("managementSupport")}
          >
            <div className={styles.managementSupportContainer}>
              <p className={styles.management}>Management &</p>
              <p className={styles.management}>Support</p>
            </div>
          </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default KosWeb;
