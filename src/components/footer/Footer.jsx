import React from "react";
import GitHub from "../../assets/img/social/github.svg";
import Email from "../../assets/img/social/email.svg";
import Linkedin from "../../assets/img/social/linkedin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="py-8 text-center mx-4">
      <div className="mx-auto inline-flex flex-col">
        <h3 className="border-b-2 hover:border-yellow-200 text-slate-50 text-2xl sm:text-3xl lg:text-4xl font-['Yeseva_One'] hover:cursor-default hover:text-yellow-200">
          Joel Rondinel Pacheco
        </h3>
        <div className="flex justify-between md:justify-around pt-3 align-center">
          <a href="https://github.com/JoelRondinelPacheco" target="_blank">
            <GitHub />
          </a>
          <a href="mailto:joel.rondinel.pacheco@gmail.com" target="_blank">
            <Email />
          </a>
          <a href="https://linkedin.com/in/joelrondinelpacheco" target="_blank">
            <Linkedin />
          </a>
          <a
        href="https://drive.google.com/file/d/1ZuRFhoKxLOZFHjAe0SuvtYklzl_jByXc/view?usp=sharing" target="_blank"
          className="text-slate-50 text-2xl flex align-center"
        >
          <FontAwesomeIcon icon={faFileArrowDown} /> 
        <span className="ps-1 m-0 text-lg">CV</span>
          
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
