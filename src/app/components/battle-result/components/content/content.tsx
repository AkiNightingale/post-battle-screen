import * as React from 'react';
import { Wrapper } from "../../../../shared";
import { Text } from "@chakra-ui/react";

const Content: React.FC = () => {
  return (
    <Wrapper withPadding>
      <Text color="white">
        Content
      </Text>
    </Wrapper>
  );
};

export default Content;