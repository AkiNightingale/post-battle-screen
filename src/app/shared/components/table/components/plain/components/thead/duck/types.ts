import { TableHeadProps as UiTHeadProps } from "@chakra-ui/react";
import { plainTableTypes } from "../../../duck";

export interface THeadProps extends UiTHeadProps {
  columns: plainTableTypes.Columns;
}
