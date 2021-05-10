import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
        "700": "#47585B",
        "400": "#999999",
        "100": "#FFFFFF40",
        "50": "#DADADA"
    },
    yellow: {
        "900": "#FFBA08",
        "850": "#FFBA0880"
    }
},
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Barlow'
  },
  styles: {
    global: {
      body: {
        gb: 'gray.50',
        color: 'gray.700'
      }
    }
  }
})