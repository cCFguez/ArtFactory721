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

const CustomMenuItem = ({ href, linkName }) => {
  return (
    <NextLink href={href} passHref>
      <MenuItem as={Link}>{linkName}</MenuItem>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

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
        alignItems="center"
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
          verticalAlign="center"
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
              <CustomMenuItem
                href="/upcomingCollections"
                linkName="Upcoming Collections"
              />
              <CustomMenuItem
                href="/allCollections"
                linkName="All Collections"
              />
              <CustomMenuItem href="/artists" linkName="Artists" />
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
              <CustomMenuItem href="/photography" linkName="Photography" />
              <CustomMenuItem href="/music" linkName="Music" />
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
              <CustomMenuItem href="about" linkName="About us" />
              <CustomMenuItem href="howitworks" linkName="How it works" />
            </MenuList>
          </Menu>
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
                <CustomMenuItem href="/artists" linkName="Artists" />
                <CustomMenuItem
                  href="/upcomingCollections"
                  linkName="Upcoming Collections"
                />
                <CustomMenuItem
                  href="/allCollections"
                  linkName="All Collections"
                />
                <CustomMenuItem href="/photography" linkName="Photography" />
                <CustomMenuItem href="howitworks" linkName="How it works" />
                <CustomMenuItem href="/music" linkName="Music" />
                <CustomMenuItem href="about" linkName="About us" />
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
