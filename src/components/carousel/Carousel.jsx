import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import styles from "./styles.module.css";

import React, { useRef, useState } from 'react'

function Carousel({images}) {
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState(1)
    const img01 = useRef(null)
    const img02 = useRef(null)
    const img03 = useRef(null)

    

    const prev = () => {
        setCurrent(current => current === 0 ? images.length - 1 : current - 1)
    }

    const next = () => {
        setCurrent(current => current === images.length - 1 ? 0 : current + 1)
    }

    const handleSelect = (id) => {
        setSelected(id)
    }

  return (
    <section>
        <div className="">
        {/*<div className='flex transition-ease esea-out duration-500' style={{transform: `translateX(-${current*100}%)`}}>
        {images.map((s, i) => <img src={s} key={i} className='rounded-lg'/>)}
        ${selected !== 1 ? 'object-cover' : 'object-fill'} 
        </div>
        */}
        <div className='flex gap-4 h-[250px]'>
            <div className={`${selected !== 1 ? styles.widthMin : styles.widthMax} ${styles.container}`} onClick={() => handleSelect(1)}>
            <img src={images[0]} className={`rounded-lg object-cover w-full bg-center h-full`} ref={img01}/>
            </div>
            <div className={`${selected !== 2 ? styles.widthMin : styles.widthMax} ${styles.container}`} onClick={() => handleSelect(2)}>
            <img src={images[1]} className={`rounded-lg object-cover w-full bg-center h-full`} ref={img02}/>
            </div>
            <div className={`${selected !== 3 ? styles.widthMin : styles.widthMax} ${styles.container}`} onClick={() => handleSelect(3)}>
            <img src={images[2]} className={`rounded-lg object-cover w-full bg-center h-full`} ref={img03}/>
            </div>

        </div>
{/*        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className="p-1">
            <FontAwesomeIcon icon={faChevronCircleLeft} size='xl'/>
            </button>
            <button onClick={next}>
                <FontAwesomeIcon icon={faChevronCircleRight} size='xl'/>
            </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">

            </div>
        </div>
        */}

{/* 
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {images.map((indicator, i) => {
                return <div key={i} className={`transition-all w-3 h-3 bg-stone-900 rounded-full border border-slate-50 ${current === i ? "p-2" : "bg-opacity-80"}`}></div>
                })}
            </div>
        </div>
        */}
        </div>
        
    </section>
  )
}

export default Carousel