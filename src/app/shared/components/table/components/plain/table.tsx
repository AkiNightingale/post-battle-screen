import * as React from "react";
import { Table as ChakraTable } from "@chakra-ui/react";

import { THead, TBody, Skeleton } from "./components";
import { plainTableTypes } from "./duck";

const Table: React.FC<plainTableTypes.PlainTableProps> = ({
  data = [],
  children,
  theadProps,
  tbodyProps,
  loading,
  ...rest
}) => {
  const columns = React.Children.toArray(children) as plainTableTypes.Columns;

  return (
    <ChakraTable fontSize="sm" {...rest}>
      <THead
        {...theadProps}
        columns={columns}
      />
      {loading ? (
        <Skeleton />
      ) : (
        <TBody
          {...tbodyProps}
          data={data}
          columns={columns}
        />
      )}
    </ChakraTable>
  );
};

export default Table;
