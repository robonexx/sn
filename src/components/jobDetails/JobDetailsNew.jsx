import React from 'react'
import Image from 'next/image'

// styles
import styles from './JobDetails.module.css'

const JobDetailsNew = ({title, subtitle, desc, img, id}) => {
  return (
      <article className={styles.jobs_wrapper} key={id}>
          <div className={styles.img}>
            <Image
                src={img}
                alt={title}
                  priority
                  fill
            />                 
          </div>
          <div className={styles.info}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <p>{desc}</p>
            </div>
          </article>
  )
}

export default JobDetailsNew