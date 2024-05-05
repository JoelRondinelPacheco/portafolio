import React, { useEffect, useRef, useState } from "react";
import PersonalCard from "../personal-card/PersonalCard";
import Greetings from "../greetings/Greetings";
import AboutMe from "../about/AboutMe";
import profile from "../../assets/img/profile-pic.png"
import useGetName from "../../hooks/useGetName";
import Canvas from "../canvas/canvas";
import styles from './styles.module.css';


function Hero() {
  const { name } = useGetName();
  const [canvasSize, setCanvasSize] = useState({x: 0, y: 0})
  const containerRef = useRef(null);

  useEffect(() => {
    setCanvasSize({
      x: containerRef.current.offsetWidth,
      y: containerRef.current.offsetHeight
    })

  }, [])
console.log(canvasSize)


  return (
    <div ref={containerRef} className={`${styles.heroWrapper}`}>
      <div className={styles.infoWrapper}>
        
        <div className={styles.imageContainer}>
            <img src={profile} />
        </div>
        <div className={styles.aboutMeContainer}>
          <p>Joel Rondinel Pacheco </p>
          <h2 className={`kanit-regular`}>FULLSTACK DEVELOPER</h2>
        </div>
        <div>
          {
            name 
              ? <p>{name}</p>
              : <div className={styles.inputNameContainer}>
                  <p>Hey there! What's your name?</p>
                  <input type="text" />
                </div>
          }
        </div>
      </div>

      <div className={`${styles.canvasWrapper}`}>
        { canvasSize.x > 0 &&
            <Canvas width={canvasSize.x} height={canvasSize.y} />
        }
      </div>
    </div>
  );
}

export default Hero;
