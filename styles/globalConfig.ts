import { extendTheme } from '@chakra-ui/react'
import 'animate.css';
import "@fontsource/poppins"
import { colors } from './fundations/colors'

const theme = extendTheme({
  colors,
  fonts: {
    heading: `"Poppins", sans- serif`,
    body: `"Poppins", sans- serif`,
    fontSize: '16px'
  },
  styles: {
    global: () => ({
      html: {
        bg: 'black.900',
        minH: '100vh',

      },
      body: {
        bg: 'black.900',
        h: '100%',
        color: 'white',

        WebkitTapHighlightColor: 'transparent',
      },
    })
  }

})

export default theme