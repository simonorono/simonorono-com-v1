import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import NewTabLink from '../components/new-tab-link'
import { title } from '../utils'

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
    <NewTabLink className="link" href="https://twitter.com/simonorono">
      <span className="whitespace-nowrap">@simonorono</span>
      <span className="sr-only"> (opens in new window)</span>
    </NewTabLink>
  )

  const ggAppLink = (
    <NewTabLink className="link" href="https://ggapp.io/simonorono">
      GGApp
      <span className="sr-only">&nbsp;(opens in new window)</span>
    </NewTabLink>
  )

  const photomodeLink = (
    <NewTabLink
      className="link"
      href="https://photomode.io/profile/t15k8gpUj5PKRQ1AiK4Aeh9hfOB3"
    >
      photomode.io
      <span className="sr-only">&nbsp;(opens in new window)</span>
    </NewTabLink>
  )

  const pokedexTrackerLink = (
    <NewTabLink className="link" href="https://pokedextracker.com/u/simonorono">
      Pokédex Tracker
      <span className="sr-only">&nbsp;(opens in new window)</span>
    </NewTabLink>
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

      <Layout>
        <div className="prose space-y-6 text-lg sm:max-w-lg">
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
        </div>
      </Layout>
    </>
  )
}
