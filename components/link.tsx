import React, { ReactNode } from 'react'
import NextLink from 'next/link'

interface Props {
  href: string
  children?: ReactNode
  className?: string
  newTab?: boolean
  rel?: string
}

export default function Link(props: Props) {
  const { href, children, className, newTab = false, rel } = props

  let anchorAttributes = {
    className,
    href,
    rel,
    target: newTab ? '_blank' : '_self',
  }

  return <NextLink {...anchorAttributes}>{children}</NextLink>
}
