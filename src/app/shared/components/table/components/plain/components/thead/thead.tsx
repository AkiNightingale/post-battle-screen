import React from "react";
import {
  Th,
  Thead as UiTHead,
  Tr,
} from "@chakra-ui/react";
import { theadTypes } from "./duck";
import { ColumnProps } from "../../../column/duck/types";

const Thead: React.FC<theadTypes.THeadProps> = ({
  columns,
  thProps,
  ...rest
}) => {
  return (
    <UiTHead { ...rest } display="table-header-group">
      <Tr>
        { columns.map((column) => {
          const {
            props: { label },
          } = column as React.ReactElement<ColumnProps>;

          return (
            <Th
              key={ column.key }
              fontWeight="bold"
              whiteSpace="nowrap"
              color="white"
              fontFamily="serif"
              {...thProps}
            >
              { label }
            </Th>
          );
        }) }
      </Tr>
    </UiTHead>
  );
};

export default Thead;
