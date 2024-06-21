import React, { useEffect, useRef, useState } from "react";
import PersonalCard from "../personal-card/PersonalCard";
import Greetings from "../greetings/Greetings";
import AboutMe from "../about/AboutMe";
import profile from "../../assets/img/profile-pic.png"
import useHandleName from "../../hooks/useHandleName";
import Canvas from "../canvas/canvas";
import styles from './styles.module.css';

function enterBtn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><defs><mask id="IconifyId190370ccf525fbcd31"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" stroke="#fff" d="M23 23V5h20v38H5V23z"/><path stroke="#000" d="M33 13v20H13"/><path stroke="#000" d="m17 29l-4 4l4 4"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId190370ccf525fbcd31)"/></svg>
  )
}

function reset() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.207 2.543a1 1 0 0 1 0 1.414L5.414 5.75h7.836a8 8 0 1 1-8 8a1 1 0 1 1 2 0a6 6 0 1 0 6-6H5.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0"/></svg>
  )
}


function Hero() {
  const { name, saveName, message, handleResetName} = useHandleName();
  const [inputName, setInputName] = useState("");
  const [canvasSize, setCanvasSize] = useState({x: 0, y: 0})
  const containerRef = useRef(null);

  useEffect(() => {
    setCanvasSize({
      x: containerRef.current.offsetWidth,
      y: containerRef.current.offsetHeight
    })

  }, [])




  const confirmName = () => {
    if (inputName) {
      saveName(inputName)
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      confirmName(inputName)
    }
  }

  const handleFullResetName = () => {
    handleResetName();
    setInputName("");
  }

  return (
    <div ref={containerRef} className={`${styles.heroWrapper}`}>
      <div className={styles.infoWrapper}>
        
        <div className={styles.imageContainer}>
            <img src={profile} />
        </div>
        <div className={styles.aboutMeContainer}>
          <p>Joel Rondinel Pacheco </p>
          <h2 className={`kanit-regular`}>BACKEND DEVELOPER</h2>
        </div>
        <div>
          {
            name 
              ? <div className="flex items-center gap-4 text-2xl"><p className="ps-2 text-white">{message}</p><div className={`${inputName ? "text-slate-300" : "text-slate-500"} hover:text-slate-300 hover:cursor-pointer`} onClick={handleFullResetName}>{reset()}</div></div>
              : <div className={styles.inputNameContainer}>
                  <p>Hey there! What's your name?</p>
                  <div className="relative">
                  <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)}  onKeyDown={(e) => handleKeyUp(e)}/>
                  <div className="absolute -translate-y-1/2  right-0 top-1/2 pr-2 text-2xl text-slate-600 hover:text-slate-900 hover:cursor-pointer" onClick={confirmName}>
                  {
                    enterBtn()
                  }</div>
                  </div>
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
