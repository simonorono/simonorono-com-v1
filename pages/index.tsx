import React from 'react'
import Head from 'next/head'
import Bio from '../components/bio'
import Projects from '../components/projects'
import { title } from '../utils'

export default function Index() {
  return (
    <>
      <Head>
        <title>{title()}</title>
        <meta
          name="description"
          content="Computer Scientist & Software Developer."
        />
      </Head>

      <>
        <div className="space-y-8">
          <div className="prose">
            <div className="lg:hidden">
              <Bio />
            </div>

            <h2 className="text-3xl font-medium">Projects</h2>

            <p>
              Besides writing code for a living, I also like writing code for
              recreational purposes. Here's a list of projects I've written in
              my free time.
            </p>
          </div>

          <Projects />
        </div>
      </>
    </>
  )
}
