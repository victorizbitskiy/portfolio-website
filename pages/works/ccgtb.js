import { Container, List } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import { Title } from "../../components/work";
import P from "../../components/paragraph";

const Work = () => {
  return (
    <Layout title="ccgtb">
      <Container>
        <Title>
          Clean Code Guides Telegram Bot
        </Title>
        <P>
          A Telegram bot that has been created to help you make your code cleaner. 
          It provides an interface to work with adaptations of Robert 
          C. Martin&apos;s Clean Code for several programming languages.
        </P>
        <List ml={4} my={4}></List>
      </Container>
    </Layout>
  );
};

export default Work;