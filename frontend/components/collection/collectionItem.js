import {
  Avatar,
  Box,
  Container,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'

const CollectionItem = props => {
  const imagePlaceholder = 'static/imagePlaceholder.jpg'

  return (
    <Container>
      <VStack>
        <HStack>
          <Avatar size={'2xl'} marginX={'-25'}></Avatar>
          <Box
            bg={useColorModeValue('white', 'black')}
            padding={3}
            minWidth={'500px'}
            borderRadius={'20px'}
          >
            <Text fontSize={'1.5rem'} align={'center'} fontWeight={'bold'}>
              Schatten im Licht - Tendai Matare
            </Text>
          </Box>
        </HStack>
        <HStack>
          <Box boxSize="sm">
            <Image src={imagePlaceholder} alt="Image Placeholder Image" />
          </Box>
        </HStack>
      </VStack>
    </Container>
  )
}

export default CollectionItem
