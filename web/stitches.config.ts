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
  }
})

export type CSS = Stitches.CSS

export const globalStyles = globalCss()
