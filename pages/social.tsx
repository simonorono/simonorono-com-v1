import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import FixedSizeImage from '../components/fixed-size-image'
import NewTabLink from '../components/new-tab-link'
import { title } from '../utils'

import mii from '../assets/mii.png'

interface FriendCodeProps {
  title: string
  code: string
}

function FriendCode({ title, code }: FriendCodeProps) {
  return (
    <p>
      <b>{title}</b>:<br />
      <span className="whitespace-nowrap font-mono">{code}</span>
    </p>
  )
}

export default function Social() {
  const twitterLink = (
    <NewTabLink
      className="link"
      name="@simonorono"
      href="https://twitter.com/simonorono"
    >
      <span className="whitespace-nowrap">@simonorono</span>
    </NewTabLink>
  )

  const ggAppLink = (
    <NewTabLink
      className="link"
      name="GGApp"
      href="https://ggapp.io/simonorono"
    />
  )

  const photomodeLink = (
    <NewTabLink
      className="link"
      name="photomode.io"
      href="https://photomode.io/profile/t15k8gpUj5PKRQ1AiK4Aeh9hfOB3"
    />
  )

  const pokedexTrackerLink = (
    <NewTabLink
      className="link"
      name="Pokédex Tracker"
      href="https://pokedextracker.com/u/simonorono"
    />
  )

  return (
    <>
      <Head>
        <title>{title('Social')}</title>
        <meta
          name="description"
          content="Where to find me. Social and gaming profiles."
        />
      </Head>

      <Layout h1="Social" h2="Where to find me. Social and gaming profiles.">
        <div className="mt-14 space-y-6 text-lg sm:max-w-lg">
          <p>
            The only social network I'm active on is Twitter and my handle is{' '}
            {twitterLink}.
          </p>

          <p>
            I can also be found on {ggAppLink}, {photomodeLink} and{' '}
            {pokedexTrackerLink}.
          </p>

          <FriendCode title="Discord" code="simonorono#7279" />

          <FriendCode title="3DS Friend Code" code="0147-6024-1272" />

          <FriendCode title="Switch Friend Code" code="SW-6250-6376-2138" />

          <FixedSizeImage
            src={mii.src}
            alt="Simón Oroño's Mii"
            width={150}
            height={150}
            imageClassName="border border-gray-200 rounded-full"
            containerClassName="mx-auto sm:mx-0"
          />
        </div>
      </Layout>
    </>
  )
}
