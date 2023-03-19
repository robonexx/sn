import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from './Layout.module.css'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  style: 'normal',
  weight: ['200', '400', '600', '800'],
})


export default function Layout({ children }) {
    return (
      <>
         <Header />
        <main className={`${styles.main} ${inter.className}`}>
          {children}
        </main>  
        <Footer />      
        </>
    )
  }