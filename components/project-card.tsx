import React from 'react'
import { CodeBracketSquareIcon, LinkIcon } from '@heroicons/react/24/outline'
import Link from './link'

interface Props {
  project: Project
  className?: string
}

export default function ProjectCard(props: Props) {
  const { project, className } = props
  const { name, description, url, vcs } = project

  return (
    <div
      className={`flex flex-col space-y-4 p-4 transition-all duration-300 fine-pointer:hover:shadow-project ${className}`}
    >
      <h3 className="text-xl font-medium">{name}</h3>

      <p className="prose pt-2">{description}</p>

      <div className="flex items-baseline space-x-4">
        {url && (
          <Link
            className="link inline-flex items-center space-x-1"
            href={url}
            newTab
          >
            <LinkIcon className="h-5 w-5 text-black" aria-hidden="true" />
            <span className="sr-only">{name}</span>
            <span> Website</span>
            <span className="sr-only">&nbsp;(opens in new window)</span>
          </Link>
        )}

        <Link
          className="link inline-flex items-center space-x-1"
          href={vcs}
          newTab
        >
          <CodeBracketSquareIcon
            className="h-5 w-5 text-black"
            aria-hidden="true"
          />
          <span className="sr-only">{name}</span>
          <span> Repository</span>
          <span className="sr-only">&nbsp;(opens in new window)</span>
        </Link>
      </div>
    </div>
  )
}
