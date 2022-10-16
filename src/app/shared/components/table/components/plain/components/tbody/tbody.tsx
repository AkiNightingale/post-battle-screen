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
import { columnTypes } from "../../../column/duck";
import { tbodyTypes } from "./duck";

const TBody: React.FC<tbodyTypes.TBodyProps> = ({
  data,
  columns,
  trProps,
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
              bgGradient={ record?.isFriendOfCurrent ?
                'linear(to-r, rgba(96, 143, 74, 0.1) 30%, rgba(109, 161, 85, 0.1) 85%)' :
                "initial"
            }
              _hover={ {
                bgGradient: 'linear(to-r, gray.600 20%, orange.700 50%, gray.600 80%)'
              } }
              { ...trProps }
            >
              { columns.map((column) => {
                const {
                  key,
                  props: { dataKey, render, ...tdProps },
                } = column as React.ReactElement<columnTypes.ColumnProps>;
                const value = get(record, dataKey);

                return (
                  <Td
                    key={ key }
                    display="table-cell"
                    justifyContent="space-between"
                    borderBottom="initial"
                    fontWeight="semibold"
                    py={ 2 }
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
              <Text fontSize={ 16 }>{ "Empty Data" }</Text>
            </VStack>
          </Td>
        </Tr>
      ) }
    </UiTBody>
  );
};

export default TBody;
