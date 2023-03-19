import { useEffect } from 'react'
import Image from 'next/image'
import styles from '../landing/Landing.module.css'
import backgroundImage from '../../../public/images/backgroundImage.jpg'
import logo from '../../../public/images/skelleftea_logo_vit.png'
import Link from 'next/link'
import Button from '../buttons/Button'
import { RiArrowRightLine } from 'react-icons/ri'


export default function Landing( { setHasVisited }) {

  const VISITED = true
  
  const handleClick = () => {
    localStorage.setItem('visitBefore', JSON.stringify(VISITED))
    setHasVisited(true)
  }

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={107} />
      </div>
      <div className={styles.overlay}></div>
      <Image 
        className={styles.image} 
        src={backgroundImage} 
        alt="background" 
        priority
      />
      <div className={styles.content}>
        <p>Här finns jobben</p>
        <h1>Välkommen hem!</h1>
        <p>Arbetsmarknaden i Skellefteå blomstrar och behöver dig och din kompetens.</p>
        <Link href='/' onClick={() => handleClick()}>
          <Button variant='default' icon={<RiArrowRightLine />}>
            Logga in för att leta jobb
        </Button>
        </Link>
        <p className={styles.no_log}>Hoppa över logga in</p>
      </div>
    </div>
  )
}