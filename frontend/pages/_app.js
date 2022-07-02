import { ChakraProvider } from '@chakra-ui/react'
import Main from '../components/layouts/main'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Main router={router}></Main>
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  )
}

export default Website
