import React from "react";
import { Table } from "@shared";
import { ScoreTableProps } from "./duck";
import { Icon, Text } from "@chakra-ui/react";
import { GiDeathSkull } from "react-icons/gi";
import { UserInfoType } from "../../duck";

const ScoreTable: React.FC<ScoreTableProps> = ({
  loading,
  data
}) => {
  return (
    <Table
      loading={ loading }
      data={ data }
    >
      <Table.Column
        key="position"
        dataKey="id"
        label=""
        w="5%"
        render={ (id, user: UserInfoType) => {
          return (
            <>
              { data?.length && user && (
                <Text color={ user?.isAlive ? "white" : "gray.500" }>
                  { data.indexOf(user) + 1 }
                </Text>
              ) }
            </>
          )
        } }
      />

      <Table.Column
        key="name"
        dataKey="nickname"
        label="nickname"
        render={ (nickname, user: UserInfoType) => {
          return (
            <Text color={ user?.isAlive ? "white" : "gray.500" }>
              { nickname }
            </Text>
          )
        } }
      />

      <Table.Column
        key="score"
        dataKey="score"
        label="score"
        w="20%"
      />

      <Table.Column
        key="state"
        dataKey="isAlive"
        label="state"
        w="20%"
        render={ (isAlive) => {
          return (
            <>
              {
                !isAlive && (
                  <Icon as={ GiDeathSkull } color="white" fontSize={ 18 } />
                )
              }
            </>
          )
        } }
      />
    </Table>
  )
}

export default ScoreTable;