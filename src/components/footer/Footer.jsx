import Image from 'next/image'
import styles from '../footer/Footer.module.css'
import refreshIcon from '../../../public/images/refreshicon.svg'
import likeIcon from '../../../public/images/likeicon.svg'
import xIcon from '../../../public/images/xicon.svg'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.row}>
        <span className={styles.footerIcon1}>
          <Image src={refreshIcon} alt="project" width={60} />
        </span>
      </div>
      <div className={styles.row}>
        <span className={styles.footerIcon2}>
        <Image src={likeIcon} alt="project" width={80} />
        </span>
      </div>
      <div className={styles.row}>
        <span className={styles.footerIcon3}>
        <Image src={xIcon} alt="project" width={60} />
        </span>
      </div>
    </div>
  )
}