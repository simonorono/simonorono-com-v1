import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  href: string
  className?: string
  children?: ReactNode
}

export default function NewTabLink(props: Props) {
  const { href, className, children } = props

  return (
    <Link href={href} passHref>
      <a
        className={`link ${className}`}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </Link>
  )
}
