
import {useState, useEffect } from 'react'
import Image from 'next/image';
import styles from "../savedJobs/savedJobs.module.css"
import { MdWidthNormal } from 'react-icons/md';



function SavedJobs() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const myjobs = JSON.parse(localStorage.getItem('myjobs'));
    if (myjobs) {
      setJobs(myjobs);
    } else {
        setJobs([])
    }
}, [])
   
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.info}>sparade Jobb</h2>
        {jobs.map((job, idx) => (
      
            <div key={idx} className={styles.container}>
                <div className={styles.imgContainer}>
              <Image
                src={job.img}
                alt={job.employer}
                fill
                priority
                className={styles.img} />
                </div>
            <div className={styles.jobContainer}> 
            <p>Företag</p>  
              <h2 className={styles.up}>{job.employer}</h2>
              <p>Tjänst</p>
              <p className={styles.down}>{job.role}</p>
            </div>
            <div className={styles.clearBoth}></div>
            </div>
        ))}
      </div>
    )
}

export default SavedJobs;

