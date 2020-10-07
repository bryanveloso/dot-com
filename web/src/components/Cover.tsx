import React, { Fragment } from 'react'
import Img from 'gatsby-image'

import { AspectRatio, Text, Box } from '@chakra-ui/core'

const Cover = ({ ratio, asset, alt, caption }) => (
  <Fragment>
    <Box sx={{ position: 'relative', boxShadow: 'card.xl', zIndex: '100' }}>
      <AspectRatio ratio={ratio}>
        {asset && (
          <Img
            fluid={asset}
            alt={alt}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        )}
      </AspectRatio>
    </Box>
    <Box>
      <Text>{caption}</Text>
    </Box>
  </Fragment>
)

export default Cover
