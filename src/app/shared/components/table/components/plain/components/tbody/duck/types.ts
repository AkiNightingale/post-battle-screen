import { TableBodyProps } from "@chakra-ui/react";
import { plainTableTypes } from "../../../duck";

export interface TBodyProps extends TableBodyProps {
  data: any[];
  columns: plainTableTypes.Columns;
}
