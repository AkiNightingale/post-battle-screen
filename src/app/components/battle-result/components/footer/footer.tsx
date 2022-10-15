import * as React from "react";
import { Divider, Flex, FlexProps } from "@chakra-ui/react";

const Footer: React.FC<FlexProps> = (props: FlexProps) => {
  return (
    <Flex
      as="footer"
      position="sticky"
      bottom={ 0 }
      color="white"
      justifyContent="center"
      pb={12}
      zIndex={ 1 }
      flex={ { base: 1, md: "0" } }
      { ...props }
    >
      <Divider />
    </Flex>
  );
};

export default Footer;