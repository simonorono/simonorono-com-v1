import React from 'react'
import Link from './link'

interface Props {
  href: string
  name: string
  src: string
}

export default function Logo(props: Props) {
  const { href, name, src } = props

  return (
    <Link className="inline-block" href={href} newTab={true}>
      <img alt={`${name} logo`} className="h-10 w-10" src={src} />
      <span className="sr-only">{`${name} profile (opens in new tab)`}</span>
    </Link>
  )
}
