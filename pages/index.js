import Head from 'next/head';
import styles from '../styles/Home.module.css';
import RatingComponent from './components/forms/RatingComponent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Front-End Mentor Interactive Rating Component</title>
      </Head>

      <main className={styles.main}>
        <RatingComponent />
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
