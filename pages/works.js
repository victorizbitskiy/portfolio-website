import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCCGTB from '../public/images/works/ccgtb/ccgtb_01.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 2, 1]} gap={6} justifyContent="center">
          <Section >
            <WorkGridItem
              id="ccgtb"
              title="Clean Code Guides Telegram Bot"
              thumbnail={thumbCCGTB}

            >
              This is a Telegram bot that has been created to help you make your
              code cleaner. It provides an interface to work with adaptations of
              Robert C. Martin&apos;s Clean Code for several programming
              languages.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
