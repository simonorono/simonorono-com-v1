import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'

import '@fontsource/inter/variable.css'
import '../styles/main.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <>
        <header>
          <Header />
        </header>

        <main className="lg:ml-96 lg:min-h-screen">
          <div className="py-8 px-4">
            <Component {...pageProps} />
          </div>

          <div className="h-20" />
        </main>
      </>
    </>
  )
}
