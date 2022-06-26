import React from 'react'
import Link from 'next/link'
import Bio from './bio'
import FixedSizeImage from './fixed-size-image'
import ProfileLinks from './profile-links'

export default function Header() {
  return (
    <div className="h-card flex flex-col items-center justify-center space-y-8 border-b border-slate-300 bg-slate-100 p-10 shadow-lg lg:fixed lg:inset-y-0 lg:w-96 lg:justify-start lg:border-b-0 lg:border-r">
      <Link passHref href="/">
        <a className="block">
          {process.env.NEXT_PUBLIC_GRAVATAR_HASH && (
            <FixedSizeImage
              src={`https://www.gravatar.com/avatar/${process.env.NEXT_PUBLIC_GRAVATAR_HASH}.jpg?s=250`}
              alt="Simón Oroño's picture"
              width={250}
              height={250}
              imageClassName="u-photo rounded-2xl border border-slate-300 bg-slate-200"
              containerClassName="mx-auto hidden sm:mx-0 lg:block"
            />
          )}

          {process.env.NEXT_PUBLIC_GRAVATAR_HASH && (
            <FixedSizeImage
              src={`https://www.gravatar.com/avatar/${process.env.NEXT_PUBLIC_GRAVATAR_HASH}.jpg?s=200`}
              alt="Simón Oroño's picture"
              width={200}
              height={200}
              imageClassName="rounded-2xl border border-slate-300 bg-slate-200"
              containerClassName="mx-auto sm:mx-0 lg:hidden"
            />
          )}
        </a>
      </Link>

      <a href="/" className="text-center lg:w-full lg:text-left">
        <h1 className="p-name text-xl font-medium">Simón Oroño</h1>
      </a>

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
