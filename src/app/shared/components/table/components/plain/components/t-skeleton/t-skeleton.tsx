import React from "react";
import { plainTableTypes } from "@shared/components/table/components/plain/duck";
import { Td, Tr } from "@chakra-ui/react";
import { Skeleton as ChakraSkeleton } from "@chakra-ui/skeleton";

interface TSkeletonProps {
  columns: plainTableTypes.Columns;
  rowCount?: number;
}

const TSkeleton: React.FC<TSkeletonProps> = ({
  columns,
  rowCount = 10
}) => {
  return (
    <tbody>
    { Array.from(Array(rowCount).keys()).map((tr) => (
      <Tr key={ tr }>
        { columns.map((column) => (
          <Td key={ column.key }>
            <ChakraSkeleton
              startColor="gray.600"
              endColor="gray.500"
              height={ 15 }
            />
          </Td>
        )) }
      </Tr>
    )) }
    </tbody>
  )
};

export default TSkeleton;