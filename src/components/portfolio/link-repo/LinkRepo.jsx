import React from 'react'
import GitHub from '../../icons/GitHub';

const LinkRepo = (props) => {
    const {repo, live, type} = props;
   
  return (
    <div className='flex gap-4 text-md'>
      <a href={repo}
      target="_blank"
      className={`${live === "" && "grow w-full"} p-1 px-4 text-white border-2 border-stone-300 rounded-lg text-normal flex flex-row items-center justify-center hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 gap-2`}
      >
        <GitHub />
        {
          live === "" ? type + " Repository" : type
        }
        
      </a>
        <a href={live}
        target="_blank"
        className={`${live === "" && "hidden"} grow text-white bg-stone-900 border-2 border-stone-100 rounded-lg text-normal flex flex-row items-center justify-center hover:bg-stone-700 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50`}
        >
          Live site
          </a>
  </div>
  )
}

export default LinkRepo