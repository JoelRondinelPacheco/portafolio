import React, { useEffect, useRef, useState } from "react";
import introKey from "../../assets/img/enterkey.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

function Greetings() {
  const [name, setName] = useState({name: null, exists: "false"});
  const inputRef = useRef(null);

  useEffect(() => {
    const localName = localStorage.getItem("name");
    if (localName) {
      setName({name: localName, exists: "true"})
    }
  }, []);
/*
  useEffect(() => {
    localStorage.setItem("name", nameTest);
  }, [name]);

*/

  const greeting = `Hi, I'm Joel! What is your name?`;
  const response = "Hello, my name is";
  const nameOk = `Hola de nuevo`;

  const handleClickEnter = (e) => {
    selectName();
  };
  const handleKeyEnter = (e) => {
    if (e.key === 'Enter') {
      selectName()
    }
  };

  const handleResetName = () => {
    localStorage.removeItem("name")
    setName({name: null, exists: "false"})
  }

  const selectName = () => {
    let nameTest = inputRef.current.value.trim().toLowerCase();;

    if (nameTest != null && nameTest.length != 0) {
      let firstLetter = nameTest.charAt(0).toUpperCase()
      nameTest = firstLetter + nameTest.slice(1)
      setName({name: nameTest, exists: "new"});
      localStorage.setItem("name", nameTest);
    }
  };

  switch(name.exists) {
    case "true":
      return <div className="h-full flex items-center justify-center relative p-7">
          <h2 className="text-slate-50 text-3xl md:text-4xl lg:text-5xl">{nameOk} <span className="text-yellow-200">{name.name}</span>! </h2> <div className="absolute end-0 bottom-0 bg-zinc-950 p-1 px-2 rounded-[10px] text-md text-green-200 m-1 cursor-pointer" onClick={handleResetName}><FontAwesomeIcon icon={faArrowRotateLeft} /></div>
          </div>
      break
    case "false":
return   <div className="p-4">
          <h2 className="text-slate-50 text-2xl lg:text-3xl pb-1">{greeting}</h2>
          <div className="">
            <h2 className="text-yellow-300 text-2xl lg:text-3xl pb-1 sm:pb-2">{response}</h2>

            <div className="relative grow">
              <div
                className="absolute inset-y-0 end-0 flex items-center pe-1 cursor-pointer"
                onClick={handleClickEnter}
              >
                <img src={introKey} alt="" width={25} />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-stone-200 border border-gray-300 p-1 ps-3 text-lg sm:ps-3 text-gray-900  sm:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                onKeyUp={handleKeyEnter}
                ref={inputRef}
              ></input>
            </div>
          </div>
        </div>
            break
            case "new":
              return <div className="h-full flex items-center justify-center relative p-7">
              <h2 className="text-slate-50 text-3xl">Gusto en conocerte <span className="text-yellow-200">{name.name}</span>, Espero que te guste mi portafolio!</h2> <div className="absolute end-0 bottom-0 bg-zinc-950 p-1 px-2 rounded-[10px] text-md text-green-200 m-1 cursor-pointer" onClick={handleResetName}><FontAwesomeIcon icon={faArrowRotateLeft} /></div>
              </div>

      }

}

export default Greetings;
