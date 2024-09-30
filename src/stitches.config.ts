import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      black: 'var(--color-black)',
      offWhite: 'var(--color-off-white)',
      orange: 'var(--color-orange)',
      green: 'var(--color-green)',
      grayBlue: 'var(--color-gray-blue)',
      mediumGray: 'var(--color-medium-gray)',
      lightGray: 'var(--color-light-gray)',
      white: 'var(--color-white)',
    },
    fontSizes: {
      h1: 'var(--font-size-h1)',
      h2: 'var(--font-size-h2)',
      h3: 'var(--font-size-h3)',
      h4: 'var(--font-size-h4)',
      body: 'var(--font-size-body)',
      infoLabels: 'var(--font-size-info-labels)',
      tags: 'var(--font-size-tags)',
    },
    fonts: {
      rubik: 'Rubik, sans-serif',
      overpass: 'Overpass, sans-serif',
    },
    fontWeights: {
      light: 'var(--font-weight-light)',
      regular: 'var(--font-weight-regular)',
      medium: 'var(--font-weight-medium)',
      bold: 'var(--font-weight-bold)',
    },
    lineHeights: {
      default: 'var(--line-height-default)',
    },
  },
});

// We'll remove the globalStyles export as we'll use the existing index.css