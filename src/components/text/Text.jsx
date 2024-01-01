import React from 'react'

function Text({text}) {
const letras = text.toUpperCase().split("")

console.log(letras); // ["H", "o", "l", "a", ",", " ", "m", "u", "n", "d", "o"]

  return (
    <section className='cursor-default select-none p-4'>
        <div className="text-slate-50 text-4xl flex justify-between font-['Yeseva_One'] sm:text-6xl md:text-7xl lg:text-8xl">
          {letras.map((letra, i) => {
            return <span key={i}>{letra}</span>
          })}
        </div>
    </section>
  )
}

export default Text