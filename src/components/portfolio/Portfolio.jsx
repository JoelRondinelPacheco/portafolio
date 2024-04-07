import React from "react";
import CheckIcon from "./utils/CheckIcon";
import List from "./utils/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../carousel/Carousel";
import LinkRepo from "./utils/LinkRepo";

function Portfolio({ params }) {
  const { list, title, subtitle, images, tools, repository, backend, frontend, live } = params;
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
          <div className="pe-4 m-3 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mb-0 space-y-4">
            {live != "" && (
             <LinkRepo link={live} text="Live" />
            )}
            {
              repository != "" && (
                <LinkRepo link={repository} text="Repository" />
              )
            }

{
              frontend != "" && (
                <LinkRepo link={frontend} text="FrontEnd" />
              )
            }
            {
              backend != "" && (
                <LinkRepo link={backend} text="BackEnd" />
              )
            }

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
