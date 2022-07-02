import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#ffffff',
        _dark: '#f1f1f1',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#ffffff',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#4b4bfe',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
});

export default theme;
