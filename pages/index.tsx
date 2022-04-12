import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import FixedSizeImage from '../components/fixed-size-image'
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
        <div className="mt-14 space-y-10 text-xl sm:max-w-lg">
          <p>
            I'm a computer scientist and software developer from Maracaibo,
            Venezuela. I work as a full-stack web developer.
          </p>

          <p className="rounded-full">
            My interests are programming languages, graph theory, discrete
            mathematics and video games.
          </p>

          {process.env.NEXT_PUBLIC_GRAVATAR_HASH && (
            <FixedSizeImage
              src={`https://www.gravatar.com/avatar/${process.env.NEXT_PUBLIC_GRAVATAR_HASH}.jpg?s=155`}
              alt="Simón Oroño's picture"
              width={155}
              height={155}
              imageClassName="border border-gray-900 rounded-full"
              containerClassName="mx-auto sm:mx-0"
            />
          )}
        </div>
      </Layout>
    </>
  )
}
