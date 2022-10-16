import * as React from "react";
import { Table as ChakraTable } from "@chakra-ui/react";

import { THead, TBody, Skeleton } from "./components";
import { plainTableTypes } from "./duck";

const Table: React.FC<plainTableTypes.PlainTableProps> = ({
  data = [],
  children,
  theadProps,
  tbodyProps,
  thHeadProps,
  trBodyProps,
  loading,
  ...rest
}) => {
  const columns = React.Children.toArray(children) as plainTableTypes.Columns;

  return (
    <ChakraTable fontSize="sm" {...rest}>
      <THead
        columns={columns}
        thProps={thHeadProps}
        {...theadProps}
      />
      {loading ? (
        <Skeleton />
      ) : (
        <TBody
          data={data}
          columns={columns}
          trProps={trBodyProps}
          {...tbodyProps}
        />
      )}
    </ChakraTable>
  );
};

export default Table;
