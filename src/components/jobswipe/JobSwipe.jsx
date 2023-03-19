import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

// styles
import styles from './JobSwipe.module.css'


const JobSwipe = ({data, options}) => {
  const [emblaRef] = useEmblaCarousel(options)

  return (
      <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
              <div className={styles.embla__container}>
          {data.map(({title, subtitle, id, img}, idx) => (
            <Link href={'/' + id} className={styles.embla__slide} key={id}>
                  <div className={styles.embla__slide__number}>
                <span>{idx + 1}</span>
              </div>
              <Image
                      className={styles.embla__slide__img}
                src={img}
                alt={title}
                priority
                  />
                  <div className={styles.info}>
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobSwipe
