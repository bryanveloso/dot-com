import type { AppProps } from 'next/app'

import { globalStyles } from '../stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  // Set our global styles.
  globalStyles()

  return <Component {...pageProps} />
}
export default MyApp
