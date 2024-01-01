import React from "react";
import CheckIcon from "./CheckIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function List({ features }) {
  //    <div className="bg-zinc-950 rounded-full  text-normal p-2 w-[25px] h-[25px] inline-flex items-center justify-center">
  return (
    <section>
      <ul className="text-slate-50">
        {features.map((feature, i) => {
          {
            console.log(feature);
            console.log(feature.name);
            console.log(i);
          }
          return (
            <li key={i} className="flex gap-1 content-center items-center">
              <div className="bg-zinc-950 rounded-full  text-normal p-2 w-[25px] h-[25px] inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} size="sm"/>
              </div>
              <span className=" text-xl">{feature}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default List;
