import ContactCard from "../contact-card/contact-card";
import styles from "./styles.module.css";
//Web developer with strong skills in creating dynamic and functional web applications.
function AboutMe() {
  return (
    <section className={`${styles.aboutMeWrapper} vieport-wrapper`}>
      <div className={styles.contactWrapper}>
        <div className={`${styles.getInTouch} kanit-regular`}>
          <p>GET IN TOUCH</p>
        </div>
        <ContactCard type="Email" />
        <ContactCard type="Linkedin" />
        <ContactCard type="GitHub" />
        <ContactCard type="CV" />
      </div>
      <div className={styles.gradientWrapper}>
        <div></div>
      </div>
      <div className={styles.aboutMeTextWrapper}>
        <h4 className="">
          Web developer with strong skills in creating dynamic and functional
          web applications.
        </h4>
      </div>
    </section>
  );
}

export default AboutMe;
