import React from 'react'
import Links from './links'

interface Props {
  h1: String
  h2?: String
}

export default function Header(props: Props) {
  const { h1, h2 } = props

  return (
    <div className="mt-10 mb-4 sm:mt-20">
      <div className="flex flex-col">
        <h1 className="text-4xl">{h1}</h1>
        <h2 className="text-xl">{h2}</h2>
      </div>

      <hr className="mt-2 mb-1" />

      <Links />
    </div>
  )
}
