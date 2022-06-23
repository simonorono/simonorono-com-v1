import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './header'

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
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

      <div className="bg-green-900">
        <div className="mx-auto max-w-screen-xl bg-white px-10">
          <div className="mx-2 flex h-screen flex-col lg:mx-0">
            <header>
              <Header />
            </header>

            <main className="grow">
              {children}

              <div className="h-20" />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
