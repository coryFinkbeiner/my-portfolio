import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import type { NextPage } from 'next';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <h1>Lets build an awesome portfolio</h1>
    </div>
  );
};

export default Home;
