import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  name: string
  href: string
  className?: string
  children?: ReactNode
}

export default function NewTabLink(props: Props) {
  const { name, href, className, children } = props

  return (
    <Link key={name} href={href} passHref>
      <a
        className={`link ${className}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`${name} (opens in new window)`}
      >
        {children || name}
      </a>
    </Link>
  )
}
