import React from "react";
import { TableProps, TableHeadProps, TableBodyProps } from "@chakra-ui/react";
import { ColumnProps } from "../../column/duck/types";

export interface PlainTableProps extends TableProps {
  data: any;
  theadProps?: TableHeadProps;
  tbodyProps?: TableBodyProps;
  loading?: boolean;
}

export type Columns = React.ReactElement<ColumnProps>[];
