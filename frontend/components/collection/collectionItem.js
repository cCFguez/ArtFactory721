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
  const exampleNftObject = {
    priceInEth: 1,
    maxAmount: 50,
    availableAmount: 20,
    type: 'Dutch Auction',
    license: 'Example License',
    startDate: 'starting 11. July 2022 20:00 MEZ'
  }

  return (
    <Container>
      <VStack>
        <HStack mb={5}>
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
        <HStack width={1200} justify="center">
          <Box mr={4} boxSize="sm" height="100%">
            <Image src={imagePlaceholder} alt="Image Placeholder Image" />
          </Box>
          <VStack alignSelf="center" alignItems="start">
            <Text>{exampleNftObject.priceInEth} ETH</Text>
            <Text>
              {exampleNftObject.availableAmount} / {exampleNftObject.maxAmount}{' '}
              pieces
            </Text>
            <Text>{exampleNftObject.type}</Text>
            <Text>license: {exampleNftObject.license}</Text>
            <Text>Starting: {exampleNftObject.startDate}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  )
}

export default CollectionItem
