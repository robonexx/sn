import '@/styles/globals.css';
import styles from '@/styles/Loading.module.css';
import Layout from '@/components/layout/Layout';
import { useEffect, useState } from 'react';
/* import Landing from '@/components/landing/Landing' */
import Landing2 from '@/components/landing/Landing2';

const Loading = () => (
  <div className={styles.loading}>
    <p>Loading...</p>
  </div>
);

export default function App({ Component, pageProps }) {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem('visitBefore'));
    console.log(visited);

    if (!visited) {
    } else {
      setHasVisited(true);
    }
  }, [hasVisited]);

  return (
    <Layout>
      {hasVisited ? (
        <Component {...pageProps} />
      ) : (
        <Landing2 setHasVisited={setHasVisited} />
      )}
    </Layout>
  );
}
