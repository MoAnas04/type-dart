import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider, theme ,CSSReset} from '@chakra-ui/react';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
<ThemeProvider theme={theme}>
{/* <CSSReset/> */}
      <Component {...pageProps} />
</ThemeProvider>
    </ChakraProvider>
  )

}

export default MyApp
