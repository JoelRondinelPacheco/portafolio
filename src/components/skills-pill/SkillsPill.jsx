import React from 'react'
import styles from './styles.module.css'
const SkillsPill = ({children}) => {
  return (
    <div className={`${styles.skillWrapper} text-2xl`}>{children}</div>
  )
}

export default SkillsPill