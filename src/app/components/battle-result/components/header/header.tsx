import * as React from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/react";

const Header: React.FC<FlexProps> = (props: FlexProps) => {
  return (
    <Flex
      as="header"
      position="sticky"
      top={ 0 }
      color="white"
      justifyContent="center"
      p={ 4 }
      zIndex={ 1 }
      flex={ { base: 1, md: "0" } }
      { ...props }
    >
      <Text
        fontFamily="serif"
        fontSize="6xl"
        textTransform="uppercase"
      >
        Scoreboard
      </Text>
    </Flex>
  );
};

export default Header;