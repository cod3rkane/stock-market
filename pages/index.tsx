import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Wolf of Wall Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
