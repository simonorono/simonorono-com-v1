import React from 'react'
import Link from 'next/link'

interface Props {
  className?: string
}

export default function BackHome(props: Props) {
  const classes = props.className?.split(/s+/).filter(Boolean) || []

  const className = [...new Set(['block', ...classes])].join(' ')

  return (
    <Link href="/" className={className}>
      {'<-'}
      <span className="cursor-pointer underline sm:no-underline sm:hover:underline">
        back to index
      </span>
    </Link>
  )
}
