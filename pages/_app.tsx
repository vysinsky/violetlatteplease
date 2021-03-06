import { ReactNode } from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />
}

export default MyApp
