import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'

import { sanityStaticProps, useSanityQuery, PortableText } from '../lib/sanity'

const QUERY = groq`
  *[_type == "page" && title == "Home"][0]
`

const Home: NextPage<SanityProps> = props => {
  const { data, loading, error } = useSanityQuery(QUERY, props)
  return (
    <section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async context => ({
  props: await sanityStaticProps({ context, query: QUERY }),
  revalidate: 3600
})
