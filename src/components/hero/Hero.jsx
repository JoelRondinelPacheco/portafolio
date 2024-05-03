import React from "react";
import PersonalCard from "../personal-card/PersonalCard";
import Greetings from "../greetings/Greetings";
import AboutMe from "../about/AboutMe";
import profile from "../../assets/img/profile-pic.png"
import useGetName from "../../hooks/useGetName";
import Canvas from "../canvas/canvas";


function Hero() {
  const { name } = useGetName();
  return (
    <div className="flex">
      <div>
        <div>
          {
            name 
              ? <p>{name}</p>
              : <div>
                  <p className="text-slate-500">Hello! What's your name</p>
                  <input type="text" />
                </div>
          }
        </div>
        <div>
            <img className="max-w-[150px]" src={profile} />
        </div>
        <div>
          <p className="text-slate-500">Joel Rondinel Pacheco</p>
          <h2 className="text-slate-500">WEB DEVELOPER</h2>
        </div>
      </div>

      <div>
            <Canvas />
      </div>
      {/*<div className="grid sm:grid-cols-2 p-4 gap-4
                      sm:grid-cols-[2fr_3fr] md:grid-cols-[2fr_3fr]">
        <div className="sm:row-span-2 md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-2">
          <PersonalCard />
        </div>
        <div className="md:col-start-2 md:col-end-3">
          <Greetings />
        </div>
        <div className="md:col-start-2 md:row-start-2 md:row-end-3">
          <AboutMe />
        </div>
      </div>
      */}
    </div>
  );
}

export default Hero;
