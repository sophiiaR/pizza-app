import Head from 'next/head'
import Image from 'next/image'
import PizzaList from '../components/PizzaList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Italia</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Slider />
      <PizzaList />
    </div>
  )
}
