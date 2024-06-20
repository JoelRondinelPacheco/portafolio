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
    <section className={`${styles.aboutMeWrapper} vieport-wrapper`}>
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
        Aqui texto de mini presentacion Aqui texto de mini Flexhita que siga al mouse alrededor de mi avatar, al hacer hover cambia a clickable, y al hacer click cambia color de fondo, con animacion incluida
        </h4>
      </div>
      <div className={`${styles.skillsWrapper} ${styles.topMargin}`}>
        <SkillsPill><p>Java</p><Java /></SkillsPill>
        <SkillsPill><p>Spring</p><Spring /></SkillsPill>
        <SkillsPill><p>SQL</p><SQL /></SkillsPill>
        <SkillsPill><p>Docker</p><Docker /></SkillsPill>
      </div>
      <div className={`${styles.subgradientWrapper} ${styles.topMargin}`}></div>
    </section>
  );
}

export default AboutMe;
