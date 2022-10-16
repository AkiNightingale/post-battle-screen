import { TableHeadProps as UiTHeadProps } from "@chakra-ui/react";
import { plainTableTypes } from "../../../duck";
import { TableColumnHeaderProps } from "@chakra-ui/table";

export interface THeadProps extends UiTHeadProps {
  columns: plainTableTypes.Columns;
  thProps?: TableColumnHeaderProps;
}
