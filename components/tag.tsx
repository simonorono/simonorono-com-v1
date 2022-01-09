import React from 'react'

interface Props {
  text: string,
  className?: string
}

export default function Tag({ text, className }: Props) {
  return (
    <span
      className={[
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium',
        'bg-gray-300 text-black', className
      ].join(' ')}
    >{text}</span>
  )
}
