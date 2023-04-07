import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="7px"
        bg="red" 
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer based in Russia
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" >
            Victor Izbitskiy
          </Heading>
          <p>Developer</p>
        </Box>
      </Box>
    </Container>

  )
}

export default Page