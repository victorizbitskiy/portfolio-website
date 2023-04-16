import { Box, Container } from "@chakra-ui/react";
import Navbar from '../navbar'
import Head from "next/head";
import VocelFireflies from "../voxel-fireflies";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Victor Izbitskiy - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW={"container.md"} pt={14}>
      <VocelFireflies />
        {children}
      </Container>
    </Box>
  );
};

export default Main;