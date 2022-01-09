import React, { useEffect } from 'react'
import LazyLoad from 'vanilla-lazyload'

if (process.browser && !document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    callback_loaded: el => el.classList.remove('opacity-0'),
    elements_selector: '[data-src]',
    unobserve_completed: true,
    use_native: true,
    threshold: 100,
  })
}

interface FixedSizeImageProps {
  src: string,
  alt: string,
  width: number,
  height: number,
  containerClassName?: string
  imageClassName?: string
}

export default function FixedSizeImage(props: FixedSizeImageProps) {
  const {
    src,
    alt,
    width,
    height,
    containerClassName,
    imageClassName,
  } = props

  useEffect(() => {
    process.browser && document.lazyLoadInstance.update()
  }, [])

  const imageContainerStyle = {
    'maxWidth': `${width}px`,
    'maxHeight': `${height}px`,
  } as React.CSSProperties

  return (
    <div style={imageContainerStyle} className={containerClassName}>
      <img
        data-src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity opacity-0 ${imageClassName}`}
      />
    </div>
  )
}
