import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'

function Carousel({images}) {
    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent(current => current === 0 ? images.length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(current => current === images.length - 1 ? 0 : current + 1)
    }
  return (
    <section>
        <div className="overflow-hidden relative">
        <div className='flex transition-ease esea-out duration-500' style={{transform: `translateX(-${current*100}%)`}}>
        {images.map((s, i) => <img src={s} key={i} className='rounded-lg'/>)}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className="p-1">
            <FontAwesomeIcon icon={faChevronCircleLeft} size='xl'/>
            </button>
            <button onClick={next}>
                <FontAwesomeIcon icon={faChevronCircleRight} size='xl'/>
            </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {images.map((indicator, i) => {
                return <div key={i} className={`transition-all w-3 h-3 bg-stone-900 rounded-full border border-slate-50 ${current === i ? "p-2" : "bg-opacity-80"}`}></div>
})}
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Carousel