import Head from 'next/head'
import Navbar from '../navbar.js'
import {
  background,
  Box,
  Container,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

// main page which renders the children
const Layout = ({ children, router }) => {
  console.log(children)
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ArtFactory721 - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pb={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
