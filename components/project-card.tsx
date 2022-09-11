import React from 'react'
import { CodeBracketSquareIcon, LinkIcon } from '@heroicons/react/24/outline'
import Link from './link'
import Tag from './tag'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const { name, description, tags, url, vcs } = project

  return (
    <div className="flex flex-col space-y-4 border-b p-4 sm:border-0">
      <h3 className="text-xl font-medium">{name}</h3>

      <p className="prose pt-2">{description}</p>

      <div className="relative bottom-0 space-y-2">
        {tags.map(tag => (
          <Tag className="mr-2" key={tag} text={tag} />
        ))}
      </div>

      <div className="flex items-baseline space-x-4">
        {url && (
          <Link className="link inline-flex items-center space-x-1" href={url}>
            <LinkIcon className="h-5 w-5 text-black" aria-hidden="true" />
            <span className="sr-only">{name}</span>
            <span> Website</span>
            <span className="sr-only">&nbsp;(opens in new window)</span>
          </Link>
        )}

        <Link className="link inline-flex items-center space-x-1" href={vcs}>
          <CodeBracketSquareIcon className="h-5 w-5 text-black" aria-hidden="true" />
          <span className="sr-only">{name}</span>
          <span> Repository</span>
          <span className="sr-only">&nbsp;(opens in new window)</span>
        </Link>
      </div>
    </div>
  )
}
