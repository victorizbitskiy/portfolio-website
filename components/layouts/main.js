import { Box, Container } from "@chakra-ui/react";
import Navbar from '../navbar'
import Head from "next/head";
import THREEObject from "../THREEObject";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={0}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Victor Izbitskiy - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW={"container.md"} pt={14}>
        <THREEObject/>
        {children}
      </Container>
    </Box>
  );
};

export default Main;