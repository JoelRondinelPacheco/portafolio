import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "../contact-card/contact-card";
import SkillsPill from "../skills-pill/SkillsPill";
import Docker from "../skills-pill/icons/Docker";
import SQL from "../skills-pill/icons/SQL";
import Java from "../skills-pill/icons/java";
import Spring from "../skills-pill/icons/spring";
import styles from "./styles.module.css";
//Web developer with strong skills in creating dynamic and functional web applications.
function AboutMe() {
  return (
    <section className={`${styles.aboutMeWrapper}`}>
      <div className={styles.contactWrapper}>
        <div className={`${styles.getInTouch} kanit-regular`}>
          <p>GET IN TOUCH &#128080;</p>
        </div>
        <ContactCard type="Email" link="copy"/>
        <ContactCard type="Linkedin" link="https://www.linkedin.com/in/joelrondinelpacheco/"/>
        <ContactCard type="GitHub" link="https://github.com/JoelRondinelPacheco"/>
      </div>
      <div className={styles.gradientWrapper}>
        <div></div>
      </div>
      <div className={styles.aboutMeTextWrapper}>
        <h4 className="">
        Hello! I'm a Java developer with expertise in Spring and SQL. I have a strong foundation in object-oriented programming, a deep understanding of UML, and proficiency in implementing hexagonal architecture.
        </h4>
      </div>
      <div className={`${styles.skillsWrapper} ${styles.topMargin}`}>
        <SkillsPill><p>Java</p><Java /></SkillsPill>
        <SkillsPill><p>Spring</p><Spring /></SkillsPill>
        <SkillsPill><p>SQL</p><SQL /></SkillsPill>
        <SkillsPill><p>Docker</p><Docker /></SkillsPill>
      </div>
      <div className={`${styles.subgradientWrapper} ${styles.topMargin}`}></div>
      <ToastContainer
      position="bottom-center"
      autoClose={1500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />

    </section>
  );
}

export default AboutMe;
