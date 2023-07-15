import React, { useState, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { gsap } from "gsap";
import styles from "./kos-mobile.module.css";
import projectsImage from "../assets-mob/Mobile-Projects.webp";
import codeImage from "../assets-mob/Mobile-Code.webp";
import designImage from "../assets-mob/Mobile-Design.webp";
import managementImage from "../assets-mob/Mobile-Managment.webp";

const KosMobile = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showProjects, setShowProjects] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showManagementSupport, setShowManagement] = useState(false);
  
  const handleButtonClick = useCallback((buttonName) => {
    setActiveButton(buttonName);
    setShowProjects(buttonName === "projects");
    setShowCode(buttonName === "code");
    setShowDesign(buttonName === "design");
    setShowManagement(buttonName === "managementSupport");
  }, []);


  const onBottomNavItemsClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='craftingInteractiveDesigns']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBottomNavItems1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='thirdImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBottomNavItems2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='moonPictureContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBottomNavItems3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactImgImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPrimaryButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contactImgImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    
    // GSAP animation timeline
    const tl = gsap.timeline();

    // Button pulse animation
    tl.to(".primaryButton1", {
      scale: 1.2,
      duration: 0.3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    });
  }, []);

  

  return (
    <div className={styles.kosMobile}>
      <img className={styles.secondIcon} alt="" src="/second@2x.webp" />
      <img
        className={styles.thirdIcon}
        alt=""
        src="/third1_2x.webp"
        data-scroll-to="thirdImage"
      />
      <div className={styles.text} />
      <div className={styles.kosMobileChild} />
      <img className={styles.x30001Icon} alt="" src="/00113000x3000-1@2x.webp" />
      <img className={styles.x30003Icon} alt="" src="/00113000x3000-3@2x.webp" />
      <img className={styles.x30002Icon} alt="" src="/00113000x3000-2@2x.webp" />
      <div className={styles.kosMobileItem} />
      <div className={styles.kosMobileInner} />
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
      </div>
      <img className={styles.blob2Icon} alt="" src="/blob2@2x.webp" />
      <img className={styles.blob1Icon} alt="" src="/blob1@2x.webp" />
      <div className={styles.frame02}>
        <div className={styles.about}>
          <div
            className={styles.craftingInteractiveDesigns}
            data-scroll-to="craftingInteractiveDesigns"
          >
            Crafting Interactive Designs for Web & Mobile
          </div>
          <div className={styles.frameParent}>
            <div className={styles.aSeniorUxDesignerWithASpWrapper}>
              <div className={styles.aSeniorUx}>
                A Senior UX Designer with a specialization in interactive design
                for iOS applications. Bridging the gap between the latest
                trends, user needs, and business objectives is my forte.
              </div>
            </div>
            <div className={styles.aSeniorUxDesignerWithASpWrapper}>
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
            development within large corporations. I'm well-versed in managing
            the entire product life cycle.
          </div>
          <div className={styles.startups1}>Startups</div>
        </div>
        <div className={styles.saas}>
          <img
            className={styles.specklesIcon1}
            alt=""
            src="/speckles1@2x.webp"
          />
          <div className={styles.saas1}>SaaS</div>
          <div className={styles.creatingIntricateSaas}>
            Creating intricate SaaS products that demand deep industry knowledge
            is where I thrive.
          </div>
        </div>
        <div className={styles.edtech}>
          <img
            className={styles.specklesIcon2}
            alt=""
            src="/speckles2@2x.webp"
          />
          <div className={styles.saas1}>EdTech</div>
          <div className={styles.afterHundredsOf}>
            After hundreds of interviews and work on AI-based educational
            products, my passion and expertise in EdTech is profound.
          </div>
        </div>
      </div>
      <div className={styles.windowdefoult}>
      <div className={styles.window}>


        {showProjects && (
          <div className={`${styles.images} ${styles.imageContainer}`}>
            <LazyLoadImage
              className={`${styles.image} ${styles.projectsImage}`}
              src={projectsImage}
              alt="Projects"
              effect="blur"
            />
          </div>
        )}

        {showCode && (
          <div className={`${styles.images} ${styles.imageContainer}`}>
            <LazyLoadImage
              className={`${styles.image} ${styles.codeImage}`}
              src={codeImage}
              alt="Code"
              effect="blur"
            />
          </div>
        )}

        {showDesign && (
          <div className={`${styles.images} ${styles.imageContainer}`}>
            <LazyLoadImage
              className={`${styles.image} ${styles.designImage}`}
              src={designImage}
              alt="Design"
              effect="blur"
            />
          </div>
        )}

        {showManagementSupport && (
          <div className={`${styles.images} ${styles.imageContainer}`}>
            <LazyLoadImage
              className={`${styles.image} ${styles.managementImage}`}
              src={managementImage}
              alt="Management & Support"
              effect="blur"
            />
          </div>
        )}
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
          <div className={styles.box1}>
            <button
              className={`${styles.buttons} ${
                activeButton === "projects" ? styles.activeButton : ""
              }`}
              onClick={() => handleButtonClick("projects")}
            >
              <div className={styles.projects}>Projects</div>
            </button>
            <button
              className={`${styles.buttons} ${
                activeButton === "code" ? styles.activeButton : ""
              }`}
              onClick={() => handleButtonClick("code")}
            >
              <div className={styles.code}>Code</div>
            </button>
          </div>
          <div className={styles.box1}>
            <button
              className={`${styles.buttons} ${
                activeButton === "design" ? styles.activeButton : ""
              }`}
              onClick={() => handleButtonClick("design")}
            >
              <div className={styles.design}>Design</div>
            </button>
            <button
              className={`${styles.buttons} ${
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



      <div className={styles.whatIAmLookingForParent}>
        <div className={styles.whatIAm}>What I am looking for</div>
        <div className={styles.imInSearch}>
          I'm in search of an engaging company that nurtures growth and offers
          the opportunity to work with a high-performing team. I aspire to
          contribute to and celebrate remarkable achievements together while
          enjoying a variety of challenges to keep things stimulating.
        </div>
        <div className={styles.moonpicture} data-scroll-to="moonPictureContainer">
          <div className={styles.moonshadow} />
          <div className={styles.moonframe}>
            <img className={styles.moonIcon} alt="Moon" src="/moon.svg" />
          </div>
        </div>
        <div className={styles.boxesLooking}>
          <div className={styles.scroll}>
            <div className={styles.ellipseParent}>
              <img className={styles.frameItem} alt="" src="/ellipse-6@2x.webp" />
              <div className={styles.frameInner} />
              <div className={styles.socioDemographicsAnalystPs}>
              An environment that encourages personal and professional development is key. I thrive in settings that promote learning, push boundaries, and facilitate the evolution of my design expertise.
              </div>
              <div className={styles.growth}>Growth</div>
            </div>
            <div className={styles.ellipseParent}>
              <img className={styles.frameItem} alt="" src="/ellipse-61@2x.webp" />
              <div className={styles.frameInner} />
              <div className={styles.socioDemographicsAnalystPs}>
              Collaboration is at the heart of impactful creations. I'm eager to be part of a dynamic, high-performing team where we can leverage each other's strengths to achieve exceptional results.
              </div>
              <div className={styles.growth}>Team Success</div>
            </div>
            <div className={styles.ellipseParent}>
              <img className={styles.frameItem} alt="" src="/ellipse-62@2x.webp" />
              <div className={styles.frameInner} />
              <div className={styles.analystsDesignersPsycholog}>
              Stagnation isn't in my vocabulary. I'm excited by diverse, complex tasks that keep me on my toes, ensuring every day brings a new opportunity to create and innovate.
              </div>
              <div className={styles.growth}>Challenges</div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.rectangle} />
        <div className={styles.copyrightParent}>
          <div className={styles.copyright}>
            Design with love © Kazarichuk 2023. All right reserved
          </div>
          <img className={styles.lineIcon} alt="" src="/line.svg" />

          <div className={styles.box}>
            <img className={styles.logoIcon} alt="" src="/logo.svg" />
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
          </div>
        </div>
      </footer>

      
      <div className={styles.frame01}>
        <img
          className={styles.mainIcon}
          alt="Kazarichuk Design"
          loading="lazy"
          src="/main@3x.webp"
        />
        <b className={styles.h1Title}>Kazarichuk Design</b>
        <div className={styles.h2Subtitle}>
          Crafting Digital Experiences with Precision & Passion
        </div>
        <img className={styles.ellipsesIcon} alt="" src="/frame-625959.svg" />
        <nav className={styles.bottomNavigation}>
          <div className={styles.bottomNavItems} onClick={onBottomNavItemsClick}>
            <img className={styles.sportIcon} alt="" src="/sport.svg" />
            <div className={styles.name}>Creations</div>
          </div>
          <div className={styles.bottomNavItems} onClick={onBottomNavItems1Click}>
            <img className={styles.travelIcon} alt="" src="/travel.svg" />
            <div className={styles.name}>Expertise</div>
          </div>
          <div className={styles.bottomNavItems} onClick={onBottomNavItems2Click}>
            <img className={styles.travelIcon} alt="" src="/maps.svg" />
            <div className={styles.name}>Behind</div>
          </div>
          <div className={styles.bottomNavItems} onClick={onBottomNavItems3Click}>
            <img className={styles.travelIcon} alt="" src="/mail.svg" />
            <div className={styles.name}>Connect</div>
          </div>
        </nav>
      </div>
      <div className={styles.textH6Parent}>
        <div className={styles.textH6}>
          <span>Delve deeper into my professional journey. Explore my comprehensive </span>
          <span className={styles.figmaPortfolio}>Figma portfolio</span>
          <span> and access my detailed </span>
          <span className={styles.figmaPortfolio}>PDF Resume below</span>
          <span>. Let's embark on a design adventure together.</span>
        </div>
        <div className={styles.buttons4}>
        <button className={styles.primaryButton} onClick={() => window.open("https://www.figma.com/proto/AFRgUvVtcrWOxuvRgeqngO/Portfolio-v2?node-id=0-1&viewport=1194%2C1051%2C0.14&scaling=min-zoom&starting-point-node-id=1%3A2809", "_blank")} >
        <b className={styles.label}>All Projects in Figma</b>
      </button>
          <button className={styles.outlinedButton}onClick={() => window.open("https://drive.google.com/file/d/1VdatcOYUnK2xEqK4h3MtMRAV3xgQZvkj/view?usp=sharing ", "_blank")} >
            <b className={styles.label1}>PDF Resume</b>
          </button>
        </div>
        <div className={styles.boxOfContacts}>
        <LazyLoadImage
          className={styles.mainIcon}
          alt="Kazarichuk Design"
          src="/main1@3x.webp"
          effect="opacity" // Optional: add a transition effect when the image is loaded
        />

          <div className={styles.text2}>
            Get in Touch and Let's Create Something Amazing Together
          </div>
          <div className={styles.phoneParent}>
            <b className={styles.phone}>+381 62 849 63 44</b>
            <a
              className={styles.email}
              href="mailto:kazarichuk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              kazarichuk@gmail.com
            </a>
          </div>
        </div>
      </div>
      <button className={styles.primaryButton1} onClick={onPrimaryButton1Click}>
        <b className={styles.label2}>Let's Collaborate</b>
      </button>
    </div>
  );
};

export default KosMobile;
