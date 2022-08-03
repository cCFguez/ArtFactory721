import { Box, Center } from '@chakra-ui/react'

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
    <Center py={12}>
      <Box role={'group'}></Box>
    </Center>
  )
}

export default Collection
