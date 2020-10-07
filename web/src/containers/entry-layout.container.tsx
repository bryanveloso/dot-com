import React from 'react'
import { Container, Flex } from '@chakra-ui/core'

import { Footer, Header } from '@/components'

const EntryLayout = ({ children }) => (
  <Flex sx={{ minHeight: '100vh', flexDirection: 'column' }}>
    <Header />
    <Container as="main" sx={{ flexGrow: 1 }}>
      {children}
    </Container>
    <Footer />
  </Flex>
)

export default EntryLayout
