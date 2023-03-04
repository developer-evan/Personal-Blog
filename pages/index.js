import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Nav from '../components/Nav'
import Hero from '@/components/Hero'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <div>
     <Nav />
     <Hero />
     </div>
  )
}
