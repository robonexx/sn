import Image from 'next/image'
import styles from '../footer/Footer.module.css'
/* import refreshIcon from '../../../public/images/refreshicon.svg'
import likeIcon from '../../../public/images/likeicon.svg'
import xIcon from '../../../public/images/xicon.svg' */
import { RiUser3Fill, RiBookmarkFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.row}>
        <span className={styles.footerIcon1}>
        <div className={styles.cardIcon}></div>
          <div className={styles.cardIcon}></div>
         {/*  <Image src={refreshIcon} alt="project" width={60} /> */}
        </span>
      
        <span className={styles.footerIcon2}>
          {/* <Image src={likeIcon} alt="project" width={80} /> */}
          <RiUser3Fill />
        </span>
     
        <span className={styles.footerIcon3}>
          <RiBookmarkFill />
          <span></span>
        {/* <Image src={xIcon} alt="project" width={60} /> */}
        </span>
      </div>
    </div>
  )
}