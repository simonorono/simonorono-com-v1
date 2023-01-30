import React from 'react'
import LinkedinIcon from './icons/linkedin-icon'
import GithubIcon from './icons/github-icon'
import MastodonIcon from './icons/mastodon-icon'
import StackOverflowIcon from './icons/stack-overflow-icon'
import TwitterIcon from './icons/twitter-icon'
import Link from './link'

export default function ProfileLinks() {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/simonorono"
        className="inline-block h-10 w-10"
        newTab={true}
        rel="me"
      >
        <span className="sr-only">linkedin profile (opens in new window)</span>
        <LinkedinIcon className="h-10 w-10" />
      </Link>

      <Link
        href="https://github.com/simonorono"
        className="inline-block h-10 w-10"
        newTab={true}
        rel="me"
      >
        <span className="sr-only">github profile (opens in new window)</span>
        <GithubIcon className="h-10 w-10" />
      </Link>

      <Link
        href="https://mastodon.social/@simonorono"
        className="inline-block h-10 w-10"
        newTab={true}
        rel="me"
      >
        <span className="sr-only">mastodon profile (opens in new window)</span>
        <MastodonIcon className="h-10 w-10" />
      </Link>

      <Link
        href="https://stackoverflow.com/users/3001663/sim%c3%b3n-oro%c3%b1o"
        className="inline-block h-10 w-10"
        newTab={true}
        rel="me"
      >
        <span className="sr-only">
          stack overflow profile (opens in new window)
        </span>
        <StackOverflowIcon className="h-10 w-10" />
      </Link>

      <Link
        href="https://twitter.com/simonorono"
        className="inline-block h-10 w-10"
        newTab={true}
        rel="me"
      >
        <span className="sr-only">twitter profile (opens in new window)</span>
        <TwitterIcon className="h-10 w-10" />
      </Link>
    </>
  )
}
