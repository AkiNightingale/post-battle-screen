import { TableBodyProps } from "@chakra-ui/react";
import { plainTableTypes } from "../../../duck";
import { TableRowProps } from "@chakra-ui/table";

export interface TBodyProps extends TableBodyProps {
  data: any[];
  columns: plainTableTypes.Columns;
  trProps?: TableRowProps;
}
