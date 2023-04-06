import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Victor Izbitskiy - Homepage</title>

        <Container maxW={"container.md"} pt={14}>
          {children}
        </Container>
      </Head>
    </Box>
  );
};

export default Main;