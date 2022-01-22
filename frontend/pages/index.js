import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RigShowAR</title>
        <meta name="description" content="Virtually preview your event designs and gig setups in real-time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
