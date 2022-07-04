import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import Main from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}></Main>
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default Website
