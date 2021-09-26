import type { AppProps } from 'next/app'
import Head from 'next/head'

import { globalStyles } from 'stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  // Set our global styles.
  globalStyles()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
