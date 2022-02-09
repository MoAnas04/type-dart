import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../src/Components/Navbar'
import Hero from '../src/Components/Hero'
import Footer from '../src/Components/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Typing Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

       <main className={styles.main}>
         <Hero/>
      </main>

     <Footer/>
    </div>
  )
}
