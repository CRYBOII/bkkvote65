import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import { useEffect, useState } from 'react'
import { json } from 'stream/consumers'
import { ElectionVote } from '../typings'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" h-screen overflow-y-scroll bg-white">
      <Header />

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
