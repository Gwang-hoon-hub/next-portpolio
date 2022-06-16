import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>PangHoon Portpolio</title>
        <meta name="description" content="Go Funcking Coding!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>

    </Layout>
  )
}
