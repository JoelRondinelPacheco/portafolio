import React from 'react'
import styles from './styles.module.css'
const SkillsPill = ({children}) => {
  return (
    <div className={`${styles.skillWrapper}`}>{children}</div>
  )
}

export default SkillsPill