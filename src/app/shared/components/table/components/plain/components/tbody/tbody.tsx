import React from "react";
import {
  Icon,
  Tbody as UiTBody,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { BsInboxes } from "react-icons/bs";
import { get } from "lodash-es";
import { ColumnProps } from "../../../column/duck/types";
import { tbodyTypes } from "./duck";

const TBody: React.FC<tbodyTypes.TBodyProps> = ({
  data,
  columns,
  ...rest
}) => {
  return (
    <UiTBody { ...rest }>
      { data.length > 0 ? (
        data.map((record, index) => {
          return (
            <Tr
              key={ record.id }
              color="white"
              border={ record?.currentUser ? "1px" : "initial" }
              display="table-row"
              boxShadow="none"
              mx={ 0 }
              mb={ { base: 4, sm: 0 } }
              cursor="default"
              _hover={ {
                bgGradient: 'linear(to-r, gray.600 20%, orange.700 50%, gray.600 80%)'
              } }
            >
              { columns.map((column) => {
                const {
                  key,
                  props: { dataKey, render, ...tdProps },
                } = column as React.ReactElement<ColumnProps>;
                const value = get(record, dataKey);

                return (
                  <Td
                    key={ key }
                    display="table-cell"
                    justifyContent="space-between"
                    borderBottom="initial"
                    fontWeight="semibold"
                    { ...tdProps }
                  >
                    { render ? render(value, data[index]) : value }
                  </Td>
                );
              }) }
            </Tr>
          );
        })
      ) : (
        <Tr>
          <Td colSpan={ columns.length } textAlign="center">
            <VStack my={ 20 }>
              <Icon as={ BsInboxes } color="blue.500" fontSize={ 50 } mb={ 2 } />
              <Text fontSize={ 16 }>{ "emptyData" }</Text>
            </VStack>
          </Td>
        </Tr>
      ) }
    </UiTBody>
  );
};

export default TBody;
