import React from 'react'
import projectData from '../data/projects.json'
import ProjectCard from './project-card'

function sortProjectsCompareFn(a: Project, b: Project) {
  return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0
}

function getChunkedProjects(input: Project[], chunkSize: number): Project[][] {
  let chunks: Project[][] = []

  for (let i = 0; i < input.length; i += chunkSize) {
    chunks.push(input.slice(i, i + chunkSize))
  }

  return chunks
}

export default function Projects() {
  const projects = (projectData as Project[]).sort(sortProjectsCompareFn)

  return (
    <div className="container">
      <div className="grid grid-cols-1 divide-y md:hidden">
        {projects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="hidden divide-y md:block">
        {getChunkedProjects(projects, 2).map((chunk: Project[], index) => (
          <div key={index} className="flex flex-row justify-evenly divide-x">
            {chunk.map((project: Project) => (
              <ProjectCard
                key={project.name}
                project={project}
                className="flex-1"
              />
            ))}

            {chunk.length === 1 && <div className="flex-1 p-4" />}
          </div>
        ))}
      </div>
    </div>
  )
}
