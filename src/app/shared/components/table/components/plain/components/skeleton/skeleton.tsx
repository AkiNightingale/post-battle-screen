import React from "react";
import { Skeleton as ChakraSkeleton } from "@chakra-ui/react";

const Skeleton: React.FC = () => {
  return (
    <tbody>
    {
      <ChakraSkeleton
        startColor="blue.100"
        endColor="gray.100"
        height={ 15 }
      />
    }
    </tbody>
  );
};

export default Skeleton;
