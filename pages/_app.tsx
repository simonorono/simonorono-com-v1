import type { AppProps } from 'next/app'

import '@fontsource/inter/variable.css'
import '../styles/main.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
