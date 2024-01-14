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


  const greeting = `Hello! What is your name?`;
  const response = "Hello, my name is";
  const nameOk = `Hello again`;

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
      return <div className="h-full flex items-center justify-center relative p-3 bg-stone-900 rounded-xl">
          <h2 className="text-slate-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl">{nameOk} <span className="text-yellow-200">{name.name}</span>! </h2> <div className="absolute end-0 bottom-0 bg-zinc-950 p-1 px-2 rounded-[10px] text-md text-green-200 m-1 cursor-pointer" onClick={handleResetName}><FontAwesomeIcon icon={faArrowRotateLeft} /></div>
          </div>
      break
    case "false":
return   <div className="h-full relative p-7 bg-stone-900 rounded-xl">
          <h2 className="text-slate-50 text-xl md:text-2xl lg:text-3xl">{greeting}</h2>
          <div className="lg:flex gap-3">
            <h2 className="text-yellow-300 text-xl md:text-2xl lg:text-3xl pb-2 sm:pb-2">{response}</h2>

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
              return <div className="h-full flex items-center justify-center relative p-7 bg-stone-900 rounded-xl">
              <h2 className="text-slate-50 text-xl md:text-2xl">Nice to meet you <span className="text-yellow-200">{name.name}</span>! I hope you like my portfolio!</h2> <div className="absolute end-0 bottom-0 bg-zinc-950 p-1 px-2 rounded-[10px] text-md text-green-200 m-1 cursor-pointer" onClick={handleResetName}><FontAwesomeIcon icon={faArrowRotateLeft} /></div>
              </div>

      }

}

export default Greetings;
