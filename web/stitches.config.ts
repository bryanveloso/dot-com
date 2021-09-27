import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  theme,
  getCssText,
  globalCss,
  keyframes,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      text: '#efefef',
      background: '#05070d',
      primary: '#1cdaf4',
      highlight: 'rgba(255, 255, 255, 0.1)',

      avagreen: '#5be058',
      avapurple: '#6644e8',
      avablue: '#1cdaf4',
      avayellow: '#ffdd33',
      dark: '#241f33',
      light: '#efefef',

      purple: '#928add',
      bluegrey: '#6d8591',
      yellow: '#fff683',
      lightgreen: '#e7f7e7',
      midgrey: '#939393',
      mutedDark: '#0d0a11',
      green: '#bbf4b0',
      lightbluegrey: '#b4cbd6',

      lighter: '#23292f',
      darker: '#1a1f23',
      darkest: '#05070d'
    }
  },

  media: {
    bp1: '(min-width: 40rem)',
    bp2: '(min-width: 48rem)',
    bp3: '(min-width: 64rem)',
    bp4: '(min-width: 80rem)',
    bp5: '(min-width: 96rem)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)'
  },
  utils: {
    // Box Model Utilities
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    size: (value: Stitches.ScaleValue<'space'>) => ({
      width: value,
      height: value
    }),

    // Flexbox/Grid Utilities
    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({
      flexWrap: value
    }),
    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
      alignSelf: value
    }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
      flexBasis: value
    }),

    // Background Utilities
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),

    // Border Radius Utilities
    br: (value: Stitches.ScaleValue<'radii'>) => ({
      borderRadius: value
    }),
    btrr: (value: Stitches.ScaleValue<'radii'>) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value: Stitches.ScaleValue<'radii'>) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value: Stitches.ScaleValue<'radii'>) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value: Stitches.ScaleValue<'radii'>) => ({
      borderTopLeftRadius: value
    }),

    // Miscelleanous Utilities
    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value
    }),
    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`
    })
  }
})

export type CSS = Stitches.CSS
