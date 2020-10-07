import React, { Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Flex } from '@chakra-ui/core'

import { Footer, Header } from '@/components'

import './layout.css'

const duration = 0.3
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration },
  },
}

const Layout = ({ children, location }) => (
  <Fragment>
    <Box
      sx={{
        borderTop: '0.25rem solid',
        borderTopColor: 'gradient.darkest',
        boxShadow: 'inset 0 1px 0 #23292f',
        width: '100vw',
      }}
    >
      <Header />
      <Flex
        sx={{
          maxWidth: [480, 720, 960, 1440],
          mx: 'auto',
          px: [4, null, 8, 9],
          minHeight: '100vh',
          flexDirection: 'column',
        }}
      >
        <AnimatePresence initial={false}>
          <Box
            as={motion.main}
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            sx={{ flexGrow: 1 }}
          >
            {children}
          </Box>
        </AnimatePresence>
        <Footer />
      </Flex>
    </Box>
  </Fragment>
)

export default Layout
