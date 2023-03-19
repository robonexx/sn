import React from 'react'
import Link from 'next/link'

import styles from './Testpage.module.scss'

const Testpage = () => {
  return (
      <div className={styles.test}>
          <h1>Test page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat deleniti magnam autem quis assumenda cum aperiam similique doloremque? Omnis quos at nemo enim. Cupiditate blanditiis ipsam officia ipsum accusamus labore saepe vero sapiente. Cumque nisi saepe ullam consequatur. Voluptatibus, tempora.</p>
      
      <Link href='/' className={styles.goback}>go back</Link>
    </div>
  )
}

export default Testpage