import React from 'react'

const DESKTOP_SQUARE_SIDE = 250
const MOBILE_SQUARE_SIDE = 200

export default function ProfilePicture() {
  const imageUrl = process.env.NEXT_PUBLIC_GRAVATAR_HASH

  return (
    <>
      {imageUrl && (
        <div className="h-[200px] w-[200px] overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 lg:h-[250px] lg:w-[250px]">
          <picture>
            <source
              media="(max-width: 1023px)"
              srcSet={`https://www.gravatar.com/avatar/${imageUrl}.jpg?s=${MOBILE_SQUARE_SIDE}`}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={`https://www.gravatar.com/avatar/${imageUrl}.jpg?s=${DESKTOP_SQUARE_SIDE}`}
            />
            <img
              src={`https://www.gravatar.com/avatar/${imageUrl}.jpg?s=${DESKTOP_SQUARE_SIDE}`}
              alt="Simón Oroño's profile picture"
              className="u-photo"
            />
          </picture>
        </div>
      )}
    </>
  )
}
