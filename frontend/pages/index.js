import { ColorModeScript } from '@chakra-ui/react'

const Page = props => {
  return (
    <div>
      <ColorModeScript initialColorMode="dark" />
      <div>Hello World!</div>
    </div>
  )
}

export default Page
