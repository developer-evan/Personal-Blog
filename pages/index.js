import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Nav from '../components/Nav'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
      {/* <div className="text-sky-500 text-center">Hello world</div> */}
      <Nav/>
    </div>

  )
}
