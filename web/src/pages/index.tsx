import React from 'react'
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-pascal-case */

import { useStaticQuery, graphql, Link } from 'gatsby'
import { Box, Container, Grid, Stack } from '@chakra-ui/core'

import { SEO } from '@/components'
import { EntryList, QuoteList, Company } from '@/components/partials/home'

const QUERY = graphql`
  query {
    sanityRoute(slug: { current: { eq: "/" } }) {
      title
    }
  }
`

export const IndexPageTemplate = () => {
  const {
    sanityRoute: { title },
  } = useStaticQuery(QUERY)

  return (
    <Box as="section">
      <SEO title={title} />
      <Box
        sx={{
          maxWidth: [480, 720, 960, 1440],
          mx: 'auto',
        }}
      >
        <EntryList />
        <Company />
        <Stack
          as="section"
          direction={['column', 'row']}
          spacing={4}
          sx={{ mt: 4 }}
        >
          <Box sx={{ fontSize: 'sm', mb: 4 }}>
            <p>
              Hello, my name is Bryan Veloso and I&apos;ve been around the web
              for a bit. Since I bought this domain in 2000, Avalonstar has been
              one of the longest-running constants in my life. It has managed to
              change in both form and function as much as I have, going from
              personal site, to blog, to online moniker, to company namesake,
              and back again.
            </p>
            <p>
              Avalonstar is an extension of me: the designer, the developer, the
              gamer, the content creator, the entrepreneur, and whatever else
              the next 20 or so years have to offer.
            </p>
            <Link
              to="/history/"
              sx={{
                variant: 'links.button',
                backgroundColor: 'main.avablue',
                color: 'main.dark',
              }}
            >
              Take a look back
            </Link>
          </Box>
          <QuoteList />
        </Stack>
      </Box>
    </Box>
  )
}

const IndexPage = () => <IndexPageTemplate />

export default IndexPage
