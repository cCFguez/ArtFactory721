import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
  width: 15;
  overflow: hidden;
  height: 40px;
  border-radius: 15px;
  img {
    transition: 200ms ease;
  }
  img:hover {
    transform: scale(1.75);
  }
`

const Logo = () => {
  const footPrintImg = '/images/logo_placeholder.png'

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <img src={footPrintImg} width={40}></img>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
