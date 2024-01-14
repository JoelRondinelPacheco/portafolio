import React from "react";
import CheckIcon from "./utils/CheckIcon";
import List from "./utils/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../carousel/Carousel";

function Portfolio({ params }) {
  const { list, title, subtitle, images, tools, link, live } = params;
  return (
    <div className="pb-4">
    <section className="rounded-xl bg-stone-900 p-4 mx-4 md:grid md:grid-cols-2 lg:grid-cols-[2fr_3fr]">
      <div className="md:col-start-1 md:col-span-1 lg:row-start-1 relative pe-2">
          <div>
            <h3 className="font-['Yeseva_One'] text-slate-50 text-3xl">
              {title}
            </h3>
            <h3 className="font-['Yeseva_One'] text-slate-50 text-2xl ps-2 pb-1">
              {subtitle}
            </h3>
          </div>
          <div className="ps-3">
            <List features={list} />
          </div>
          <div className="pe-4 m-3 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mb-0">
          {live != "" &&   <a href={live} target="_blank"
            
            className="w-full mb-3 text-white bg-stone-900 border-2 border-stone-100 rounded-lg text-normal flex flex-row items-center justify-center hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50"
          >
            <span className="text-lg md:text-normal py-1 font-['Yeseva_One']">
            
              Live
  
            </span>
          </a>}
          <a href={link} target="_blank"

            className="w-full text-white bg-stone-900 border-2 border-stone-100 rounded-lg text-normal flex flex-row items-center justify-center hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50"
          >
            <svg
              className="w-5 h-5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-lg md:text-normal py-1 font-['Yeseva_One']">
              Repository
             
            </span>
          </a>
          </div>
      </div>
      <div className="container md:col-start-1 md:col-span-2 lg:col-start-2 lg:row-start-1">
        <Carousel images={images} />
      </div>
      <div className="md:md:col-start-2 md:col-span-1 md:row-start-1 lg:col-start-1 lg:col-span-2 lg:row-start-2">
        <ul className="flex flex-wrap gap-1 mt-4 lg:justify-center">
          {tools.map((tool, i) => {
            return (
              <li
                className="cursor-default py-1.5 px-3 bg-stone-700 rounded-xl text-slate-50 text-sm
                 md:py-1.sm
                "
                key={i}
              >
                {tool}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
    </div>
  );
}

export default Portfolio;
