import React, { useState } from "react";
import Java from "../../assets/img/icons/java.svg";
import JavaScript from "../../assets/img/icons/js.svg";
import Spring from "../../assets/img/icons/spring.svg";
import Bootstrap from "../../assets/img/icons/bootstrap.svg";
import CSS from "../../assets/img/icons/css.svg";
import HTML from "../../assets/img/icons/html.svg";
import MySQL from "../../assets/img/icons/mysql.svg";
import ReactIcon from "../../assets/img/icons/react.svg";
import Git from "../../assets/img/social/git.svg";
import styles from "./styles.module.css";
import ContactCard from "../contact-card/contact-card";
//'--radius': 1 / Math.sin(inner_angle / (180 / Math.PI))
/*
          <div className={styles.iconContainer}>
            <Java/>
          </div>
*/
function Skills() {
  const skillsTitle = "SKILLS".split("");
  const skills = [
    "Java".split(""),
    "JavaScript".split(""),
    "React".split(""),
    "Spring".split(""),
    "MySQL".split(""),
  ];

  /*style={{'rotate': `${idx*30}deg`} */
  return (
    <div className={styles.container}>

      <div className={styles.wrapper}>
        <div className={styles.mainCircle}></div>
        {skills.map((skill, idx) => (
          
          <div className={`${styles.translateSkill}`} style={{'rotate': `${idx*40}deg`}} >
            <div
              key={idx}
              className={styles.skillContainer}
              style={{
                "--total": skill.length,
                "--radius": 4.2,
                "--font-size": 2,
              }}
            >
              <div>
                <Java />
              </div>
              {skill.map((letter, i) => (
                <span
                  key={i}
                  style={{
                    "--index": `${i}deg`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        ))}
        <h2>SKILLS</h2>
      </div>
      
      
    </div>
  );
}

export default Skills;

/*
        <div className={`${styles.textRingBC} ${styles.translateSkill}`}>
          <div
            className={styles.skillContainer}
            style={{
              "--total": java.length,
              "--radius": 4.2,
              "--font-size": 2,
            }}
          >
            <div>
              <Java />
            </div>
            <div className={styles.textContainerB}>
              {java.map((l, idx) => {
                return (
                  <span style={{ "--index": `${idx}deg` }} key={idx}>
                    {l}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`${styles.textRingBA} ${styles.translateSkill}`}>
          <div
            className={`${styles.skillContainer} ${styles.javaScript}`}
            style={{
              "--total": javaScript.length,
              "--radius": 4.2,
              "--font-size": 2,
            }}
          >
            <div>
              <JavaScript />
            </div>
            <div className={styles.textContainerB}>
              {javaScript.map((l, idx) => {
                return (
                  <span style={{ "--index": `${idx}deg` }} key={idx}>
                    {l}
                  </span>
                );
              })}
            </div>
          </div>
        </div>*/
