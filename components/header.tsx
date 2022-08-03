import React from 'react'
import { useRouter } from 'next/router'
import Bio from './bio'
import Link from './link'
import ProfilePicture from './profile-picture'
import ProfileLinks from './profile-links'

function name(h1: boolean) {
  const Title = (h1 ? 'h1' : 'h2') as keyof JSX.IntrinsicElements

  return <Title className="p-name text-xl font-medium">Simón Oroño</Title>
}

export default function Header() {
  const { pathname } = useRouter()

  return (
    <div className="h-card flex flex-col items-center justify-center space-y-8 border-b border-slate-300 bg-slate-100 p-10 shadow-lg lg:fixed lg:inset-y-0 lg:w-96 lg:justify-start lg:border-b-0 lg:border-r">
      <Link className="u-url u-uid block" href="/" rel="me">
        <ProfilePicture />
      </Link>

      <Link className="text-center lg:w-full lg:text-left" href="/">
        {name(pathname === '/')}
      </Link>

      <div className="flex justify-center space-x-6 lg:hidden">
        <ProfileLinks />
      </div>

      <article className="p-note prose prose-slate hidden grow lg:block">
        <Bio />
      </article>

      <div className="flex hidden space-x-6 lg:block">
        <ProfileLinks />
      </div>
    </div>
  )
}
