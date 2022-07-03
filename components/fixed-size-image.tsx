import React, { useState } from 'react'

interface FixedSizeImageProps {
  src: string
  alt: string
  width: number
  height: number
  containerClassName?: string
  imageClassName?: string
}

export default function FixedSizeImage(props: FixedSizeImageProps) {
  const { src, alt, width, height, containerClassName, imageClassName } = props

  const [loaded, setIfLoaded] = useState(false)

  const imageContainerStyle = {
    maxWidth: `${width}px`,
    maxHeight: `${height}px`,
  } as React.CSSProperties

  return (
    <div style={imageContainerStyle} className={containerClassName}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imageClassName}`}
        onLoad={() => setIfLoaded(true)}
      />
    </div>
  )
}
