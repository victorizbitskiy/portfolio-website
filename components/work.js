import NextLink from 'next/link';
import { Box, Heading, Link, Badge, Image } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronDownIcon />
      &nbsp;
    </span><Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => {
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
}

export const Meta = ({ children }) => {
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
}
