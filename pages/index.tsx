import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { title } from '../utils'

export default function Index() {
  return (
    <>
      <Head>
        <title>{title()}</title>
        <meta
          name="description"
          content="Simón Oroño. Computer scientist and software developer."
        />
      </Head>

      <Layout h1="Simón Oroño" h2="@simonorono">
        <div className="mt-14 space-y-8 text-xl sm:max-w-lg">
          <p>
            I'm a computer scientist and software developer from Maracaibo,
            Venezuela. I work as a full-stack web developer.
          </p>

          <p>
            My interests are programming languages, graph theory, discrete
            mathematics and video games.
          </p>
        </div>
      </Layout>
    </>
  )
}
