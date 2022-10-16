import React from "react";
import { TableProps, TableHeadProps, TableBodyProps } from "@chakra-ui/react";
import { ColumnProps } from "../../column/duck/types";
import { TableColumnHeaderProps, TableRowProps } from "@chakra-ui/table";

export interface PlainTableProps extends TableProps {
  data: any;
  theadProps?: TableHeadProps;
  tbodyProps?: TableBodyProps;
  loading?: boolean;
  thHeadProps?: TableColumnHeaderProps;
  trBodyProps?: TableRowProps;
}

export type Columns = React.ReactElement<ColumnProps>[];
