import React from 'react'
import Head from 'next/head'
import Bio from '../components/bio'
import Layout from '../components/layout'
import ProjectCard from '../components/project-card'
import projectData from '../data/projects.json'
import { title } from '../utils'

export default function Index() {
  const projects = projectData as Project[]

  return (
    <>
      <Head>
        <title>{title()}</title>
        <meta
          name="description"
          content="Computer Scientist & Software Developer."
        />
      </Head>

      <Layout>
        <div className="space-y-8">
          <div className="prose">
            <div className="lg:hidden">
              <Bio />
            </div>

            <h2 className="text-2xl font-medium">Projects</h2>

            <p>
              Besides writing code for a living, I also like writing code for
              recreational purposes. Here's a list of projects I've written in
              my free time.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {projects.map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
