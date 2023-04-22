import { Box, Button, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="7px"
          bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hi there! Welcome to my web page!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" >
              Victor Izbitskiy
            </Heading>
            <p>Software engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/victorizbitskiy.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1} >
          <Heading as="h3" variant="section-title" >
            Work
          </Heading>
          <Paragraph>
            I&apos;m a software engineer and I love creating digital things.
            Also, I like to find elegant solutions to problems through code.
            When not online, I like to go for walks, play chess and exercise.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              // colorScheme="cyan"
              bgColor="#7f9eaa"
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1991</BioYear>
            I was born
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Completed the Master&apos;s Program in the Faculty of Computer Science and Applied Mathematics at the Belgorod State National Research University.
          </BioSection>
          <BioSection>
            <BioYear>2017 to present</BioYear>
            I Work as a software engineer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Chess, Art, Music, Drawing
          </Paragraph>
        </Section>

      </Container>
    </Layout>
  )
}

export default Page