import React from 'react'
import { Box, Link, Text } from '@chakra-ui/core'

import { useQuoteData } from '@/hooks'

const QuoteList = () => {
  const data = useQuoteData()
  return (
    <Box>
      {data.map(({ node }) => {
        const { body, handle, name } = node
        return (
          <Box key={handle} sx={{ mb: 3 }}>
            <Text
              sx={{
                color: 'muted.lightbluegrey',
                fontFamily: 'freight',
                fontSize: ['md', null, 'lg'],
                pb: 1,
              }}
            >
              &ldquo;{body}&rdquo;
            </Text>
            <cite sx={{ display: 'block', fontSize: 'sm' }}>
              &mdash;{name},{' '}
              <Link href={`https://twitter.com/${handle}`}>{handle}</Link>
            </cite>
          </Box>
        )
      })}
    </Box>
  )
}

export default QuoteList
