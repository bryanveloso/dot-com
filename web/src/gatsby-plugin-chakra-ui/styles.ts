import { mode } from '@chakra-ui/theme-tools'

export default {
  global: {
    body: {
      bg: 'black',
      color: 'white',
    },
  },
  textStyles: {
    heading: {
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2.75rem', md: '3.5rem' },
    },
    'heading-2': {
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2.5rem', md: '2.75rem' },
    },
    caps: {
      textTransform: 'uppercase',
      fontSize: 'sm',
      letterSpacing: 'widest',
      fontWeight: 'bold',
    },
  },
}
