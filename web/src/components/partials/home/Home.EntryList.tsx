import React from 'react'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import numeral from 'numeral'
import { AspectRatio, Box, Flex, Heading, Link, Text } from '@chakra-ui/core'
import { useBreakpointValue } from '@chakra-ui/media-query'

import { useEntryData } from '@/hooks'
import { getBlogUrl } from '@/lib/helpers'

const EntryList = () => {
  const data = useEntryData()
  const ratio = useBreakpointValue([36 / 9, 52 / 9])
  return (
    <>
      <Box mb={4}>
        <Heading as="h2" variant="styles.h2">
          The things I&lsquo;ve{' '}
          <Text as="span" color="main.avagreen">
            written.
          </Text>
        </Heading>
        <Text variant="subheader">
          Words on pages. Thoughts noted in stages.
        </Text>
      </Box>
      <Box as="section">
        {data.map(({ node }, index: number) => {
          const { coverImage, id, number, publishedAt, slug, title } = node
          return (
            <Box key={id}>
              <Flex
                py={3}
                sx={{
                  alignItems: 'baseline',
                  borderBottom: '1px solid',
                  borderColor: 'gradient.darker',
                }}
              >
                <Box>
                  <Text variant="counter">
                    {number > 0 ? numeral(number).format('000') : '000'}
                  </Text>
                </Box>
                <Box sx={{ flex: '1', px: 4 }}>
                  <Heading size="md">
                    <Link
                      as={GatsbyLink}
                      to={getBlogUrl(publishedAt, slug.current)}
                    >
                      {title}
                    </Link>
                    <Text as="span" color="main.avagreen">
                      .
                    </Text>
                  </Heading>
                </Box>
                <Text as="time" variant="date">
                  {format(parseISO(publishedAt), 'MMMM d, yyyy')}
                </Text>
              </Flex>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default EntryList
