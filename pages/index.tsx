import type { NextPage } from "next";
import Head from "next/head";
import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Inicio | Blog</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
            <span>
              👍 Hey, welcome
            </span>

            <h1>blog <span>news</span></h1>

            <p>access to all the publications</p>
        </section>

        <img src="/images/avatar.png" alt="avatar" />
      </main>
    </>
  );
};

export default Home;
