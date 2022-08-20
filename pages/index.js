import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HimuDev- Folio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero />
      <About />
    </div>
  )
}
