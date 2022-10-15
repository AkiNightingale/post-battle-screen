import * as React from 'react';
import axios from "axios";
import { Wrapper } from "@shared";
import { Center, Divider, Flex, Heading, TableContainer } from "@chakra-ui/react";
import { Table } from "@shared/components";

const Content: React.FC = () => {
  const [loadingW, setLoadingW] = React.useState(false);
  const [loadingL, setLoadingL] = React.useState(false);
  const [winners, setWinners] = React.useState();
  const [losers, setLosers] = React.useState();

  const getWinners = async () => {
    setLoadingW(true);

    await axios.get('http://localhost:3500/winners')
      .then(({ data }) => {
        if (data) {
          setWinners(data);
        }
      }).catch(error => error.response.data)
      .finally(() => setLoadingW(false));
  };

  const getLosers = async () => {
    setLoadingL(true);

    await axios.get('http://localhost:3500/losers')
      .then(({ data }) => {
        if (data) {
          setLosers(data);
        }
      }).catch(error => error.response.data)
      .finally(() => setLoadingL(false));
  };

  React.useEffect(() => {
    getWinners();
    getLosers();
  }, []);

  return (
    <Wrapper withPadding>
      <TableContainer
        display="flex"
      >
        <Flex w="full" direction="column">
          <Center>
            <Heading fontFamily="serif" color="white">
              Your Squad
            </Heading>
          </Center>

          <Table
            key="winners"
            loading={ loadingW }
            data={ winners }
          >
            <Table.Column
              key="name"
              dataKey="nickname"
              label="nickname"
            />
          </Table>
        </Flex>

        <Center height='100hv'>
          <Divider
            orientation="vertical"
            opacity={ 1 }
            color="white"
            m={ 8 }
          />
        </Center>

        <Flex w="full" direction="column">
          <Center>
            <Heading fontFamily="serif" color="white">
              Enemy Squad
            </Heading>
          </Center>

          <Table
            key="losers"
            loading={ loadingL }
            data={ losers }
          >
            <Table.Column
              key="name"
              dataKey="nickname"
              label="nickname"
            />
          </Table>
        </Flex>

      </TableContainer>
    </Wrapper>
  );
};

export default Content;