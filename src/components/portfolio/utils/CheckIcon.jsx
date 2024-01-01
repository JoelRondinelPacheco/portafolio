import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function CheckIcon({text}) {

  return (
    <p>{text}
    {/*<li className="flex gap-3"><div className="bg-zinc-950 rounded-full p-3 w-[50px] h-[50px] text-3xl inline-flex items-center justify-center"><FontAwesomeIcon icon={faCheck} /></div>{text}</li>*/}
    </p>
  )
}

export default CheckIcon