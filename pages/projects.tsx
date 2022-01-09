import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import BackToIndex from '../components/back-to-index'
import ProjectCard from '../components/project-card'
import projectData from '../data/projects.json'
import { title } from '../utils'

export default function Projects() {
  const projects = projectData as Project[]

  return (
    <>
      <Head>
        <title>{title('Projects')}</title>
        <meta name="description" content="Projects built by Simón Oroño" />
      </Head>

      <Layout
        h1="Projects"
        h2="by Simón Oroño"
      >
        <div className="mt-14 text-lg space-y-8">
          <p className="sm:max-w-lg">
            Besides writing code for a living, I also like writing code for
            recreational purposes. Here's a list of projects I've written
            in my free time.
          </p>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map(project => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
