import Head from 'next/head';
// import Job from '../components/savedJobs/savedJobs'
import styles from '@/styles/Home.module.css';
import TopBar from '@/components/topbar/TopBar';
import JobSwipe from '@/components/jobswipe/JobSwipe';
import { jobData } from '@/data/jobs';
/* 
import IMG1 from '/public/images/image1.jpg';
import IMG2 from '/public/images/image2.jpg';
import IMG3 from '/public/images/image3.jpg';
import IMG4 from '/public/images/image4.jpg';
 */

/* export const ImageData = [
  {
    title: 'Skellefteå taxi',
    subtitle: 'Taxichaufför',
    desc: 'Du är en serviceinriktad person som trivs med att möta och samarbeta med nya människor. Du sätter en stor heder i punktlighet och är stolt över att vara en duktig förare. Säkerheten för dina passagerare och dina medtrafikanter är självklart i första rummet när du planerar och genomför dina körningar. Både dina kollegor och de du möter i yrket skulle beskriva dig som en utåtriktad och lösningsorienterad person som inte tvekar att hjälpa till.',
    id: 1,
    img: IMG1,
  },
  {
    title: 'Northvold',
    subtitle: 'Gruppchef',
    desc: '',
    id: 2,
    img: IMG2,
  },
  {
    title: 'Skellefteå Lasarett',
    subtitle: 'Sjuksköterska',
    desc: '',
    id: 3,
    img: IMG3,
  },
  {
    title: 'Skellefteå Kommun',
    subtitle: 'Förskolepedagog',
    desc: '',
    id: 4,
    img: IMG4,
  },
]; */

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
        <section className={styles.swipe_wrapper}>
          <JobSwipe options={OPTIONS} data={jobData} />
        </section>
      </>
    </>
  );
}
