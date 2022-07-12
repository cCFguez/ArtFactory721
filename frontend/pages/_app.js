import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import Layout from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}></Layout>
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default Website
