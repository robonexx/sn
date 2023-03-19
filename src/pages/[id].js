import React, { useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { jobData } from '@/data/jobs';
import JobDetails from '@/components/jobDetails/JobDetails';

export default function DetailsPage() {
  const pathname = usePathname();
  const router = useRouter();
  const { id } = router.query;
  /* 
  useEffect(() => {
    console.log(id);
    
  }, [id]); */

  return (
    <div>
      {jobData.map((job) => {
        if (id == job.id) {
          /* const { id, title, subtitle, desc, img } = job; */
          return (
            <div key={id}>
              {/* <Image src={img} alt={title}
                width={'100%'}
                height={480}
              ></Image>
              <h2>{title}</h2>
              <h4>{subtitle}</h4>
              <p>{desc}</p> */}
              <JobDetails
                {...job}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
