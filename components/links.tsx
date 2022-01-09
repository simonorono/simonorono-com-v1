import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const links = [
  {
    name: 'github',
    url: 'https://github.com/simonorono',
    newTab: true,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/simonorono',
    newTab: true,
  },
  {
    name: 'projects',
    url: '/projects',
  },
  {
    name: 'social',
    url: '/social',
  }
]

export default function Links() {
  const router = useRouter()

  const path = router.pathname.substring(1)

  return (
    <div className="space-x-6 sm:spac-x-4 sm:text-right">
      {path !== '' && (
        <Link
          href="/"
          passHref
        >
          <a className="link">home</a>
        </Link>
      )}

      {links.filter(_ => !_.newTab && _.name !== path).map(link => (
        <Link
          key={link.name}
          href={link.url}
          passHref
        >
          <a className="link">
            {link.name}
          </a>
        </Link>
      ))}

      {links.filter(_ => _.newTab).map(link => (
        <Link
          key={link.name}
          href={link.url}
          passHref
        >
          <a
            className="link"
            target="_blank"
            rel='noreferrer'
            aria-label={`${link.name} (opens in new window)`}
          >
            {link.name}
          </a>
        </Link>
      ))}
    </div>
  )
}
