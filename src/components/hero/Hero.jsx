import React from "react";
import PersonalCard from "../personal-card/PersonalCard";
import Greetings from "../greetings/Greetings";
import AboutMe from "../about/AboutMe";

function Hero() {
  //<div className="grid grid-cols-[2fr_3fr] grid-rows-2 gap-8 pt-8">
  //<div className="row-span-2">
  return (
    <>
      <div className="grid sm:grid-cols-2 p-4 gap-4
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
    </>
  );
}

export default Hero;
