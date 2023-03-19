import Image from 'next/image'
import styles from '../header/Header.module.css'
import logoVit from '/public/images/skelleftea_logo_svart.png'
import iconEllipse from '/public/images/profilePic.png'
import Link from 'next/link'
import { RiNotification4Fill } from 'react-icons/ri'


export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.row}>
        <Link href="/">
        <span className={styles.headerLogo}>
          <Image src={logoVit} alt="logo" width={107} />
        </span>
        </Link>
      </div>

      <div className={styles.row}>
        <Link href="/savedjobspage">
        <span className={styles.headerIcon1}>
          <RiNotification4Fill />
        </span>
        </Link>
        <Link href="/profilepage">
        <span className={styles.headerIcon2}>
          <Image src={iconEllipse} alt="logo" width={22} />
        </span>
        </Link>
      </div>

      {/* <div className={styles.row}>
        <Link href="/profilepage">
        <span className={styles.headerIcon2}>
          <Image src={iconEllipse} alt="logo" width={25} />
        </span>
        </Link>
      </div> */}
      
    </div>
  )
}