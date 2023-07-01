import React from 'react'
import Head from 'next/head'
import BackHome from '../components/back-home'
import Link from '../components/link'
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

export default function Gaming() {
  const ggAppLink = (
    <Link className="link" href="https://ggapp.io/simonorono" newTab>
      GGApp
      <span className="sr-only">&nbsp;(opens in new window)</span>
    </Link>
  )

  const photomodeLink = (
    <Link
      className="link"
      href="https://photomode.io/profile/t15k8gpUj5PKRQ1AiK4Aeh9hfOB3"
      newTab
    >
      photomode.io
      <span className="sr-only">&nbsp;(opens in new window)</span>
    </Link>
  )

  const superEffectiveLink = (
    <Link
      className="link"
      href="https://supereffective.gg/apps/livingdex/fOHUWMujCcNduz4leWjM"
      newTab
    >
      supereffective.gg
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
        <div className="prose mt-6 space-y-6 text-lg sm:max-w-lg">
          <h1 className="text-3xl font-medium">Gaming profile</h1>

          <p>
            I can be found on {ggAppLink}, {superEffectiveLink} and{' '}
            {photomodeLink}. Here are some gaming related friend codes:
          </p>

          <FriendCode title="Discord" code="simonorono" />

          <FriendCode
            title="Nintendo Switch Friend Code"
            code="SW-6250-6376-2138"
          />
        </div>

        <BackHome className="mt-6" />
      </>
    </>
  )
}
