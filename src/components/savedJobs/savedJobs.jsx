import Image from 'next/image';
import styles from "../savedJobs/savedJobs.module.css"
import HittaFlerJobb from '../hittaFlerJobb/HittaFlerJobb';



function Job(obj) {

    const jobs = [
    {
      title: 'Skellefteå taxi',
      desc: 'Taxichaufför',
      id: 1,
    img: `/images/image1.png`
    },
    {
      title: 'Northvold',
      desc: 'Gruppchef',
      id: 2,
    img: `/images/image2.png`
    },
    {
      title: 'Skellefteå Lasarett',
      desc: 'Sjuksköterska',
      id: 3,
      img: `/images/image3.png`
    },
    {
      title: 'Skellefteå Kommun',
      desc: 'Förskolepedagog',
      id: 4,
      img: `/images/image4.png`
    },
  ];

    return (
      <>
      <div className={styles.wrapper}>
        <h2 className={styles.info}>sparade Jobb</h2>
        {jobs.map((job) => (
      
            <div key={job.id} className={styles.container}>
                <div className={styles.imgContainer}>
                <Image src={job.img} alt={job.title} width={120} height={120} className={styles.img} />
                </div>
            <div className={styles.jobContainer}>    
              <h1 className={styles.up}>{job.title}</h1>
              <p className={styles.down}>{job.desc}</p>
            </div>
            <div className={styles.clearBoth}></div>
            </div>
        ))}
      </div>
      <HittaFlerJobb />
      </>
    )
}

export default Job;

