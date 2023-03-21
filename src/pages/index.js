import Head from 'next/head';
// import Job from '../components/savedJobs/savedJobs'
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/topbar/TopBar';
import JobSwipe from '@/components/jobswipe/JobSwipe';
import { jobData } from '@/data/jobs';
import { RiBookmarkLine, RiCloseLine } from 'react-icons/ri';
import NewSwipe from '@/components/jobswipe/NewSwipe';

const OPTIONS = { axis: 'y' };

export default function Home() {
  const doSomething = () => {
    console.log('function to remove job from array goes here');
  };

  function handleSave() {
    console.log('Function for saving job to db or localstorage, cookie etc');
  }
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
        <section className={styles.swipe_wrapper}>
          {/* <JobSwipe options={OPTIONS} data={jobData} /> */}
           <NewSwipe />

          <div className={styles.icons_wrapper}>
              <div className={styles.iconWrapper}>
                <RiCloseLine onClick={() => doSomething()} />
              </div>
              <div className={styles.iconWrapper}>
                <RiBookmarkLine onClick={() => handleSave()} />
              </div>
          </div>
        </section>
      </>
    </>
  );
}
