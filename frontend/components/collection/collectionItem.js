import { Box, Container, Text } from '@chakra-ui/react'

const CollectionItem = props => {
  return (
    <Container>
      <Box bg="black" padding={3} width={'600px'} borderRadius={'20px'}>
        <Text fontSize={'1.5rem'} align={'center'} fontWeight={'bold'}>
          Schatten im Licht - Tendai Matare
        </Text>
      </Box>
    </Container>
  )
}

export default CollectionItem
