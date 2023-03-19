import React from 'react'
import profilepic from 'public/images/profilepic.png'
import Image from 'next/image'
import styles from './Profile.module.scss'
import VisaCV from '../visacv/VisaCV'

export default function Profile() {
  return (
      <>
      <div className={styles.main}>
        <div className={styles.profileCard}>
          <div className={styles.image}>
            <Image className={styles.profilePic} src={profilepic} alt="profile picture" height={314} width={314} />
          </div>
          <div>
            <div className={styles.name}>
               <p><span>Elise,</span> 27 år
               <br/>
               Taxichaufför</p>
            </div>
            <hr/>
            <p className={styles.discription}>Jag är en serviceinriktad person som trivs med att möta och samarbeta med nya människor. 
              Jag sätter en stor heder i punktlighet och är stolt över att vara en duktig förare. 
            </p>
          </div>
        </div>
      </div>
      <VisaCV />
    </>
  )
}
