import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Italia</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <h1>Pizza Italia</h1>
    </div>
  )
}
