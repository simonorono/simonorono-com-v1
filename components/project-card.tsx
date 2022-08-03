import React from 'react'
import { CodeIcon, GlobeIcon } from '@heroicons/react/outline'
import Link from './link'
import Tag from './tag'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const { name, description, tags, url, vcs } = project

  return (
    <div className="flex flex-col space-y-4 rounded-xl border border-slate-300 p-4">
      <h3 className="text-2xl font-medium">{name}</h3>

      <div className="flex flex-col items-baseline space-y-4 sm:space-y-2">
        <Link className="link inline-flex items-center space-x-1" href={url}>
          <GlobeIcon className="h-6 w-6 text-black" aria-hidden="true" />
          <span className="sr-only">{name}</span>
          <span> Website</span>
          <span className="sr-only">&nbsp;(opens in new window)</span>
        </Link>

        <Link className="link inline-flex items-center space-x-1" href={vcs}>
          <CodeIcon className="h-6 w-6 text-black" aria-hidden="true" />
          <span className="sr-only">{name}</span>
          <span> Repository</span>
          <span className="sr-only">&nbsp;(opens in new window)</span>
        </Link>
      </div>

      <p className="prose flex-grow pt-2">{description}</p>

      <div className="relative bottom-0 space-y-2">
        {tags.map(tag => (
          <Tag className="mr-2" key={tag} text={tag} />
        ))}
      </div>
    </div>
  )
}
