import Link from 'next/link'
import FireflyIcon from '../icons/firefly'
import styled from '@emotion/styled'
import {Text, useColorModeValue } from '@chakra-ui/react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(0deg);
  }
`
const Logo = () => {

  return (
    <Link href="/">
      <LogoBox>
        <FireflyIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c'
          ml={0}
        >
          Victor Izbitskiy
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo;