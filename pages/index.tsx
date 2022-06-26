import React from 'react'
import Layout from '../components/layout'
import ProjectCard from '../components/project-card'
import projectData from '../data/projects.json'

export default function Index() {
  const projects = projectData as Project[]

  return (
    <Layout>
      <div className="space-y-8">
        <h2 className="text-2xl font-medium">Projects</h2>

        <p className="prose prose-neutral">
          Besides writing code for a living, I also like writing code for
          recreational purposes. Here's a list of projects I've written in my
          free time.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
