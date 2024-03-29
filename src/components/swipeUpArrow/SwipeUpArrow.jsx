import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MdOutlineSwipeVertical } from 'react-icons/md'
import SWIPE from '/public/images/swipe.png'

// styles
import styles from './SwipeUpRight.module.css'

const SwipeUpArrow = () => {
  return (
      <motion.div
        className={styles.arrowIcon}                 
                  animate={{y: [0, 0, -5, 0, 0, 0, -5, 0], scale: 0.75}}
                  transition={{ repeat: Infinity, repeatDelay: 4 }}
    >
      <Image
        src={SWIPE}
        alt='swipe image'
        priority
      />
                   {/*  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="black"/>
<path d="M17 36.0435L30.0435 23L43.087 36.0435" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg> */}
                  </motion.div>
    
  )
}

export default SwipeUpArrow