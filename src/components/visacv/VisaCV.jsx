import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import styles from './VisaCV.module.scss'
import arrowUp from '../../../public/images/arrow-up-white.svg'

export default function VisaCV() {
  return (
    <div className={styles.footer2}>
      <motion.div className={styles.swipeArrow}
        animate={{y: [0, 0, -5, 0, 0, 0, -5, 0], scale: 0.75}}
        transition={{ repeat: Infinity, repeatDelay: 4 }}>
        <Image src={arrowUp} alt="up arrow" />
      </motion.div>
      <div className={styles.vissa}>
        <h2>VISA CV</h2>
      </div>
    </div>
  )
}
