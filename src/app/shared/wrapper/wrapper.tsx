import * as React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface WrapperProps extends BoxProps {
  withPadding?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  withPadding,
  ...props
}) => (
  <Box
    flex={1}
    backgroundColor="transparent"
    borderRadius={{ md: "xl" }}
    boxShadow={"none"}
    mx={{ md: 4, lg: 8, xl: 12 }}
    my={{ md: 6, xl: 10 }}
    px={withPadding ? { base: 5, md: 9 } : 0}
    py={withPadding ? { base: 4, md: 7 } : 0}
    overflow="auto"
    {...props}
  >
    {children}
  </Box>
);

export default Wrapper;
