import SavedJobs from '@/components/savedJobs/savedJobs.jsx';


import styles from '@/styles/Home.module.css'
export default function SavedJobsPage() {
  return (
    <>
      <main className={styles.savedjobs}>
        <SavedJobs />
      </main>
    </>
  );
}
