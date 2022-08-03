import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const Collection = ({
  title,
  artist,
  price,
  startingDate,
  amountOfPieces,
  amountOfLikes
}) => {
  title = undefined
  artist = undefined
  price = undefined
  startingDate = undefined
  amountOfPieces = undefined
  amountOfLikes = undefined
  return (
    <Center py={6}>
      <Box
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Heading fontSize={'2xl'} fontFamily={'body'} mb={'45px'}>
          Collection Example 1
        </Heading>
        <Avatar
          size={'xl'}
          src={'../../public/images/nft_placeholder.png'}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Text
          textAlign={'left'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          1 ETH <br />
          50 of 50 pieces <br />
          Dutch Auction <br />
          License: <br />
          Starting 11. Juli 2022, 20:00 MEZ <br />
        </Text>
        <br />
        <Stack mt={4} direction={'column'} spacing={4} align={'center'}>
          <Button
            padding={'8px'}
            flex={1}
            width={'180px'}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200'
            }}
          >
            REMIND ME
          </Button>
          <Button
            padding={'8px'}
            flex={1}
            width={'180px'}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200'
            }}
          >
            DISCOVER COLLECTION
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default Collection
