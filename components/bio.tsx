import React from 'react'
import Link from 'next/link'

export default function Bio() {
  const gamingProfile = (
    <Link href="/gaming" className="link">
      video games
    </Link>
  )

  return (
    <>
      <p>
        I'm a computer scientist and software developer from Maracaibo,
        Venezuela. I work as a full-stack web developer.
      </p>

      <p>
        My interests are programming languages, graph theory, discrete
        mathematics and {gamingProfile}.
      </p>
    </>
  )
}
