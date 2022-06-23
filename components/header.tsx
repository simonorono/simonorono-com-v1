import React from 'react'
import Links from './links'

export default function Header() {
  return (
    <>
      <div className="flex flex-col mt-2">
        <h1>
          <a href="/">simonorono.com</a>
        </h1>
      </div>

      <hr className="mt-2 mb-1" />

      <Links />
    </>
  )
}
