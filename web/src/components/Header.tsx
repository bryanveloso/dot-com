import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Flex, Image, Link } from '@chakra-ui/core'

import Avalonstar from '@/images/avalonstar.png'
import Logotype from '@/images/logotype.svg'

import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'
import TwitchStatus from './TwitchStatus'

const Header = () => {
  return (
    <header>
      <TwitchStatus />
      <Box
        sx={{
          maxWidth: [480, 720, 960, 1440],
          mx: 'auto',
          px: [4, null, 8, 9],
          pt: [4, 6],
          pb: 4,
        }}
      >
        <Flex
          sx={{
            alignItems: [null, 'center'],
            flexDirection: ['column', 'row'],
          }}
        >
          <Flex sx={{ flex: '1 1 auto' }}>
            <Link
              as={GatsbyLink}
              to="/"
              sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto' }}
            >
              <Image
                src={Avalonstar}
                alt="logo"
                sx={{ height: '2rem', mr: 2 }}
              />
              <Logotype style={{ height: '1.75rem' }} />
            </Link>
          </Flex>
          <Box>
            <MainNavigation />
            <MobileNavigation />
          </Box>
        </Flex>
      </Box>
    </header>
  )
}

export default Header
