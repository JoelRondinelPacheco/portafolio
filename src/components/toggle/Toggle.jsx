import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Toggle() {
  /*const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    console.log("cabio: " + theme)
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };*/

  return (
    {/*<div className="rounded-3xl cursor-pointer hover:bg-neutral-900 hover:text-white text-[25px] duration-200 group" onClick={handleChangeTheme}>
      <span className="inline-block dark:hidden group-hover:-rotate-[20deg] duration-200" >
        <FontAwesomeIcon icon={faMoon} />
      </span>

      <span className="hidden dark:inline-block group-hover:-rotate-[20deg] duration-200">
        <FontAwesomeIcon icon={faSun} />
      </span>
  </div>*/}
  );
}

export default Toggle;
