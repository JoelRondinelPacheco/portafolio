import React from 'react'
import profilePicture from '../../assets/img/profile-pic.png'
import sytles from './styles.module.css'

function PersonalCard() {
  return (
    <section className='bg-stone-900 rounded-xl flex flex-col justify-center h-full p-5'>
      <div className='pb-4'>
        <img src={profilePicture} alt="" className={sytles.profileCard}/>
        </div>
        <div className='ps-4'><h3 className="text-slate-50 text-3xl lg:text-4xl font-['Yeseva_One']">Joel Rondinel Pacheco</h3>
        <h3 className='text-yellow-200 text-2xl lg:text-3xl'>Backend Developer</h3>
        </div>
        
    </section>
  )
}

export default PersonalCard