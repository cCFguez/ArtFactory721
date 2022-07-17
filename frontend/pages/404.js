import NextLink from 'next/link'
import { useColorModeValue } from '@chakra-ui/react'
import {
  Box,
  Container,
  Button,
  Heading,
  Divider,
  Text
} from '@chakra-ui/react'

const PageNotFound = () => {
  return (
    <Container>
      <Heading as="h2">Not Found!</Heading>
      <Text>The page you are looking for was not found.</Text>
      <Divider
        my={5}
        bgColor={useColorModeValue('blue', 'red')}
        opacity="100%"
        h={useColorModeValue(0.4, 0.2)}
      />
      <Box>
        <NextLink href="/">
          <Button>Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default PageNotFound
