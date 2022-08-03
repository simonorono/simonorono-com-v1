import React from 'react'
import Head from 'next/head'
import { title } from '../utils'
import Link from '../components/link'

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

export default function Gaming() {
  const ggAppLink = (
    <Link className="link" href="https://ggapp.io/simonorono">
      GGApp
      <span className="sr-only">&nbsp;(opens in new window)</span>
    </Link>
  )

  const photomodeLink = (
    <Link
      className="link"
      href="https://photomode.io/profile/t15k8gpUj5PKRQ1AiK4Aeh9hfOB3"
    >
      photomode.io
      <span className="sr-only">&nbsp;(opens in new window)</span>
    </Link>
  )

  const pokedexTrackerLink = (
    <Link className="link" href="https://pokedextracker.com/u/simonorono">
      Pokédex Tracker
      <span className="sr-only">&nbsp;(opens in new window)</span>
    </Link>
  )

  return (
    <>
      <Head>
        <title>{title('Gaming Profile')}</title>
        <meta name="description" content="Simón Oroño's gaming profiles." />
      </Head>

      <>
        <div className="prose space-y-6 text-lg sm:max-w-lg">
          <Link href="/">{'<- back to index'}</Link>

          <h1 className="text-3xl font-medium">Gaming profile</h1>

          <p>
            I can be found on {ggAppLink}, {photomodeLink} and{' '}
            {pokedexTrackerLink}. Here are some gaming related friend codes:
          </p>

          <FriendCode title="Discord" code="simonorono#7279" />

          <FriendCode
            title="Nintendo Switch Friend Code"
            code="SW-6250-6376-2138"
          />
        </div>
      </>
    </>
  )
}
