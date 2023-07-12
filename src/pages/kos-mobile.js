import { useCallback } from "react";
import styles from "./kos-mobile.module.css";
const KosMobile = () => {
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
  }, []);

  return (
    <div className={styles.kosMobile}>
      <img className={styles.secondIcon} alt="" src="/second@2x.png" />
      <img
        className={styles.thirdIcon}
        alt=""
        src="/third@2x.png"
        data-scroll-to="thirdImage"
      />
      <div className={styles.text} />
      <div className={styles.kosMobileChild} />
      <img className={styles.x30001Icon} alt="" src="/00113000x3000-1@2x.png" />
      <img className={styles.x30003Icon} alt="" src="/00113000x3000-3@2x.png" />
      <img className={styles.x30002Icon} alt="" src="/00113000x3000-2@2x.png" />
      <div className={styles.kosMobileItem} />
      <div className={styles.kosMobileInner} />
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
      </div>
      <img className={styles.blob2Icon} alt="" src="/blob2@2x.png" />
      <img className={styles.blob1Icon} alt="" src="/blob1@2x.png" />
      <div className={styles.frame02}>
        <div className={styles.about}>
          <div
            className={styles.craftingInteractiveDesigns}
            data-scroll-to="craftingInteractiveDesigns"
          >{`Crafting Interactive Designs for Web & Mobile`}</div>
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
          <img className={styles.specklesIcon} alt="" src="/speckles@2x.png" />
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
            src="/speckles1@2x.png"
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
            src="/speckles2@2x.png"
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
          <div className={styles.text1}>
            <div className={styles.versatileSkillSet}>
              Versatile Skill Set for Comprehensive Solutions
            </div>
            <div className={styles.blendingDesignCoding}>
              Blending design, coding, project management, and support to
              deliver exceptional results across the digital landscape
            </div>
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
            <div className={styles.box1}>
              <button className={styles.buttons}>
                <div className={styles.projects}>Projects</div>
              </button>
              <button className={styles.buttons}>
                <div className={styles.code}>Code</div>
              </button>
            </div>
            <div className={styles.box1}>
              <button className={styles.buttons}>
                <div className={styles.design}>Design</div>
              </button>
              <button className={styles.buttons}>
                <div className={styles.managementSupportContainer}>
                  <p className={styles.management}>{`Management & `}</p>
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
        <div
          className={styles.moonpicture}
          data-scroll-to="moonPictureContainer"
        >
          <div className={styles.moonshadow} />
          <div className={styles.moonframe}>
            <img className={styles.moonIcon} alt="Moon" src="/moon.svg" />
          </div>
        </div>
        <div className={styles.boxesLooking}>
          <div className={styles.scroll}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/ellipse-6@2x.png"
              />
              <div className={styles.frameInner} />
              <div className={styles.socioDemographicsAnalystPs}>
                Socio-demographics analyst, psychology enthusiast, digital
                marketing expert.
              </div>
              <div className={styles.growth}>Growth</div>
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/ellipse-61@2x.png"
              />
              <div className={styles.frameInner} />
              <div className={styles.socioDemographicsAnalystPs}>
                Socio-demographics analyst, psychology enthusiast, digital
                marketing expert.
              </div>
              <div className={styles.growth}>Team Success</div>
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameItem}
                alt=""
                src="/ellipse-62@2x.png"
              />
              <div className={styles.frameInner} />
              <div className={styles.analystsDesignersPsycholog}>
                Analysts, designers, psychologists involved in creating Life
                Experience Model platform.
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
              <a className={styles.icons1}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              </a>
              <img className={styles.icons2} alt="" src="/icons.svg" />
              <img className={styles.icons2} alt="" src="/icons1.svg" />
              <img className={styles.icons2} alt="" src="/icons2.svg" />
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.frame01}>
        <img
          className={styles.mainIcon}
          alt="Kazarichuk Design"
          loading="lazy"
          src="/main@3x.png"
        />
        <b className={styles.h1Title}>Kazarichuk Design</b>
        <div
          className={styles.h2Subtitle}
        >{`Crafting Digital Experiences with Precision & Passion`}</div>
        <img className={styles.ellipsesIcon} alt="" src="/frame-625959.svg" />
        <nav className={styles.bottomNavigation}>
          <div
            className={styles.bottomNavItems}
            onClick={onBottomNavItemsClick}
          >
            <img className={styles.sportIcon} alt="" src="/sport.svg" />
            <div className={styles.name}>Creations</div>
          </div>
          <div
            className={styles.bottomNavItems}
            onClick={onBottomNavItems1Click}
          >
            <img className={styles.travelIcon} alt="" src="/travel.svg" />
            <div className={styles.name}>Expertise</div>
          </div>
          <div
            className={styles.bottomNavItems}
            onClick={onBottomNavItems2Click}
          >
            <img className={styles.travelIcon} alt="" src="/maps.svg" />
            <div className={styles.name}>Behind</div>
          </div>
          <div
            className={styles.bottomNavItems}
            onClick={onBottomNavItems3Click}
          >
            <img className={styles.travelIcon} alt="" src="/mail.svg" />
            <div className={styles.name}>Connect</div>
          </div>
        </nav>
      </div>
      <div className={styles.textH6Parent}>
        <div className={styles.textH6}>
          <span>{`Delve deeper into my professional journey. Explore my comprehensive `}</span>
          <span className={styles.figmaPortfolio}>Figma portfolio</span>
          <span>{` and access my detailed `}</span>
          <span className={styles.figmaPortfolio}>PDF Resume below</span>
          <span>. Let's embark on a design adventure together.</span>
        </div>
        <div className={styles.buttons4}>
          <button className={styles.primaryButton}>
            <b className={styles.label}>All Projects in Figma</b>
          </button>
          <button className={styles.outlinedButton}>
            <b className={styles.label1}>PDF Resume</b>
          </button>
        </div>
        <div className={styles.boxOfContacts}>
          <img
            className={styles.contactImgIcon}
            alt="Kazarichuk Design"
            loading="lazy"
            src="/main1@3x.png"
            data-scroll-to="contactImgImage"
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
