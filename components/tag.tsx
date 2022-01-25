import React from 'react'

interface Props {
  text: string
  className?: string
}

export default function Tag({ text, className }: Props) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium',
        'bg-gray-300 text-black',
        className,
      ].join(' ')}
    >
      {text}
    </span>
  )
}
