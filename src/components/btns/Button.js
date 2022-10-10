import React from 'react'

import styles from "./btns.module.css"

const Button = (props) => {
  const {onClick, label, type} =props;

  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{label}</button>
  )
}

export default Button