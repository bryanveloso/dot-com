import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import { SanityProps } from 'next-sanity-extra'

import { sanityStaticProps, useSanityQuery } from '../lib/sanity'

// @TODO: Add list of MDX entries to props.
const QUERY = groq`{
  "page": *[_type == "page" && title == "Blog"][0],
  "entries": *[_type == "entry"] | order(publishedAt desc)
}`

const Blog: NextPage<SanityProps> = props => {
  const { data, loading, error } = useSanityQuery(QUERY, props)
  return (
    <section>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async context => ({
  props: await sanityStaticProps({ context, query: QUERY }),
  revalidate: 3600
})
