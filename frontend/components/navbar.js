import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Logo from './logo'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path == href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'teal' : 'undefined'}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  console.log(props)

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#cdcdef', '#25252380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'normal'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <Menu>
            <MenuButton
              background={useColorModeValue('#dddeff', '#2a2a2a')}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Digital Art
            </MenuButton>
            <MenuList>
              <MenuItem>Upcoming Collections</MenuItem>
              <MenuItem>All Collections</MenuItem>
              <MenuItem>Artists</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              background={useColorModeValue('#dddeff', '#2a2a2a')}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Locked
            </MenuButton>
            <MenuList>
              <MenuItem>Photography</MenuItem>
              <MenuItem>Music</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              background={useColorModeValue('#dddeff', '#2a2a2a')}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Community
            </MenuButton>
            <MenuList>
              <MenuItem>About us</MenuItem>
              <MenuItem>How it works</MenuItem>
            </MenuList>
          </Menu>
          {/* <LinkItem href="/" path={path}>
            Home
          </LinkItem> */}
          {/* <LinkItem href="/collections" path={path}>
            Collections
          </LinkItem>
          <LinkItem href="/artists" path={path}>
            Artists
          </LinkItem> */}
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/collections" passHref>
                  <MenuItem as={Link}>Collections</MenuItem>
                </NextLink>
                <NextLink href="/artists" passHref>
                  <MenuItem as={Link}>Artists</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
