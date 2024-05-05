import React, { useState } from 'react'
import Java from '../../assets/img/icons/java.svg'
import JavaScript from '../../assets/img/icons/js.svg'
import Spring from '../../assets/img/icons/spring.svg'
import Bootstrap from '../../assets/img/icons/bootstrap.svg'
import CSS from '../../assets/img/icons/css.svg'
import HTML from '../../assets/img/icons/html.svg'
import MySQL from '../../assets/img/icons/mysql.svg'
import ReactIcon from '../../assets/img/icons/react.svg'
import Git from '../../assets/img/social/git.svg'
import styles from './styles.module.css'
import ContactCard from '../contact-card/contact-card'

function Skills() {

  return (
    <section className={styles.skillsContainer}>
            <div className={styles.grandientContainer}></div>

      <div className={styles.iconsWrapper}>
        <ContactCard type="Java" />
        <ContactCard type="Java" />
        <ContactCard type="Java" />
        <ContactCard type="Java" />
        <ContactCard type="Java" />
        <ContactCard type="Java" />
      </div>
        
        {/* <Java/>
        <Spring/>
        <MySQL/>
        <JavaScript/>
        <CSS/>
        <HTML/>
        <Bootstrap/>
        <ReactIcon/>
        <Git/>
*/}
       </section>
  )
}

export default Skills