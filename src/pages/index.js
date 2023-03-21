import Head from 'next/head';
// import Job from '../components/savedJobs/savedJobs'
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/topbar/TopBar';
import JobSwipe from '@/components/jobswipe/JobSwipe';
import { Jobs } from '@/data/jobsArray';
import NewSwipe from '@/components/jobswipe/NewSwipe';

const OPTIONS = { axis: 'y' };

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Swipe North application for jobs in Skellefteå community'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <TopBar />
        {/* <Landing /> */}
        <section className={styles.swipeWrapper}>
          {/* <JobSwipe options={OPTIONS} data={jobData} /> */}
          <NewSwipe data={Jobs} />
        </section>
      </>
    </>
  );
}
