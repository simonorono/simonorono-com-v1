import React from 'react'
import Link from './link'

export default function Bio() {
  const gamingProfile = (
    <Link className="link" href="/gaming">
      video games
    </Link>
  )

  return (
    <>
      <p>
        I'm a computer scientist and software developer from{' '}
        <span className="p-country-name">Venezuela</span>. I work as a
        full-stack web developer.
      </p>

      <p>
        My interests are programming languages, graph theory, discrete
        mathematics and {gamingProfile}.
      </p>
    </>
  )
}
