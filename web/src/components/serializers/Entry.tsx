import React from 'react'
/* eslint-disable react/jsx-pascal-case */
import getYouTubeId from 'get-youtube-id'
import { Box, Embed, Flex } from '@chakra-ui/core'

import Figure from '@/components/Figure'
import InternalLink from '@/components/internal-link'
import OpenQuote from '@/images/open-quote.svg'
import External from '@/images/external.svg'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>
        case 'h2':
          return <h2>{props.children}</h2>
        case 'h3':
          return <h3>{props.children}</h3>
        case 'h4':
          return <h4>{props.children}</h4>
        case 'h5':
          return <h5>{props.children}</h5>
        case 'h6':
          return <h6>{props.children}</h6>
        case 'blockquote':
          return (
            <Flex
              sx={{
                mx: 0,
                pb: 2,
              }}
            >
              <Box sx={{ my: '1em', minWidth: '1rem' }}>
                <OpenQuote
                  sx={{ color: 'muted.lightgreen', height: '2.5rem' }}
                />
              </Box>
              <blockquote>{props.children}</blockquote>
            </Flex>
          )
        default:
          return <p>{props.children}</p>
      }
    },
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (
        <Embed
          src={`https://www.youtube.com/embed/${id}`}
          sx={{ mb: [4, 5] }}
        />
      )
    },
  },
  marks: {
    em: ({ children }) => <em>{children}</em>,
    internalLink: InternalLink,
    link: ({ children, mark }) => {
      const { blank, href } = mark
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
          <External sx={{ height: '1.0rem', pl: 1 }} />
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
    strong: ({ children }) => <strong>{children}</strong>,
  },
  list: ({ children }) => <ul>{children}</ul>,
  listItem: ({ children }) => <li>{children}</li>,
}

export default serializers
