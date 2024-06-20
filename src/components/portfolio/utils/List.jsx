import React from "react";
import CheckIcon from "./CheckIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function check () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 16.2l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"/></svg>
  )
}

function List({ features }) {
  //    <div className="bg-zinc-950 rounded-full  text-normal p-2 w-[25px] h-[25px] inline-flex items-center justify-center">
  return (
    <section>
      <ul className="text-slate-50">
        {features.map((feature, i) => {

          return (
            <li key={i} className="flex gap-2 content-center items-center pb-1">
              {/*<div className="bg-zinc-950 rounded-full  text-normal p-2 w-[25px] h-[25px] inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faCheck} size="sm"/>
                
              </div>*/}
              {check()}
              <span className=" text-xl">{feature}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default List;
