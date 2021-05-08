import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    highlight: {
      "900": "#FFBA08",
    },
    blue: {
      "700": "#47585B",
      "100": "#DADADA",
      "50": "#F5F8FA"
    },
    gray: {
      "300": "#999999"
    }
  },
  fonts: {
    body: 'Poppins',
    description: 'Barlow'
  },
  styles: {
    global: {
      body: {
        gb: 'blue.50',
        color: 'blue.700'
      }
    }
  }
})