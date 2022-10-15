import { Content, Footer, Header } from "./components";
import { Flex } from "@chakra-ui/react";
import backgroundImage from "../../assets/bgc.jpg"

const BattleResult = () => {
  return (
    <Flex
      w="full"
      h="full"
      flexDirection="column"
      bgImage={backgroundImage}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Header />

      <Content />

      <Footer />
    </Flex>
  );
};

export default BattleResult;