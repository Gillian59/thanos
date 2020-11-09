import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Layout } from "../components/layout"
import Link from "next/link"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

const Homepage: React.FC = () => {
  return (
    <Layout />
  )
}

export default function Home() {
  var background = {backgroundSize : 'cover'}; 
  return (
    <>
      <Layout />
      
      <div className={styles.container}>
      

        <Head>
          <title>20201109 React-Next</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Jumbotron> 
            <h1>Bonjour</h1>
            <h4>
              Bienvenue dans mon blog T H A N O S
            </h4>
            <img
              src="https://s1.best-wallpaper.net/wallpaper/m/1810/Thanos-Avengers-Infinity-War_m.jpg">
            </img>
          </Jumbotron>

          
        </main>

        <footer className={styles.footer}>
          <p>Mon 1er blog en react/next (ceci est un exercice)</p>
        </footer>

      </div>
    </>

  )
}
