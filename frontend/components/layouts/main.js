import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

// main page which renders the children
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ArtFactory721 - Homepage</title>
      </Head>

      <Container maxW="container.md" pb={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
