import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/header'

import '@fontsource/inter/variable.css'
import '../styles/main.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const path = useRouter().pathname

  const canonicalPath = path === '/' ? '' : path

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL || ''}${canonicalPath}`}
        />
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
          <div className="px-4 py-8 sm:px-8">
            <Component {...pageProps} />
          </div>

          <div className="h-10" />
        </main>
      </>
    </>
  )
}
