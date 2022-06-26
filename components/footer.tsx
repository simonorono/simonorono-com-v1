import React from 'react'
import Bio from './bio'
import ProfileLinks from './profile-links'

export default function Footer() {
  return (
    <div className="flex flex-col space-y-6 bg-slate-100 p-14 lg:hidden">
      <div className="prose prose-slate">
        <Bio />
      </div>

      <div className="flex justify-center space-x-6">
        <ProfileLinks />
      </div>
    </div>
  )
}
