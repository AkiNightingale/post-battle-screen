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
              backgroundColor="transparent"
              bgGradient={ record?.currentUser ? 'linear(to-r, green.900, green.300)' : "initial" }
              display="table-row"
              boxShadow="none"
              mx={ 0 }
              mb={ { base: 4, sm: 0 } }
              cursor="default"
            >
              { columns.map((column) => {
                const {
                  key,
                  props: { dataKey, render },
                } = column as React.ReactElement<ColumnProps>;
                const value = get(record, dataKey);

                return (
                  <Td
                    key={ key }
                    display="table-cell"
                    justifyContent="space-between"
                    borderBottom="initial"
                    py={ 4 }
                    _first={ {
                      paddingTop: 4,
                    } }
                    _last={ {
                      paddingBottom: 4,
                    } }
                    _before={ {
                      content: "none",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      fontSize: "xs",
                    } }
                    _ltr={ {
                      textAlign: "left",
                    } }
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
