import * as React from 'react';
import { Wrapper } from "@shared";
import { Center, Divider, Flex, Heading, TableContainer } from "@chakra-ui/react";
import { contentUtils } from "./duck";
import { ScoreTable } from "./components";
import { LosersContext, sharedTypes, WinnersContext, RefreshContext } from '@shared/duck';

const Content: React.FC = () => {
  const [loadingW, setLoadingW] = React.useState(false);
  const [loadingL, setLoadingL] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const [winners, setWinners] = React.useState<sharedTypes.UserInfoType[]>([]);
  const [losers, setLosers] = React.useState<sharedTypes.UserInfoType[]>([]);

  React.useEffect(() => {
    /** Note: only for first render! */
    contentUtils.getWinners(setLoadingW, setWinners);
    contentUtils.getLosers(setLoadingL, setLosers);
  }, []);

  React.useEffect(() => {
    if (refresh) {
      contentUtils.getWinners(setLoadingW, setWinners, setRefresh);
      contentUtils.getLosers(setLoadingL, setLosers, setRefresh);
    }
  }, [refresh]);

  return (
    <Wrapper withPadding>
      <RefreshContext.Provider value={ { refresh, setRefresh } }>
        <TableContainer
          display="flex"
        >
          <Flex w="full" direction="column">
            <Center mb={ 8 }>
              <Heading fontFamily="serif" color="white">
                Your Squad
              </Heading>
            </Center>

            <WinnersContext.Provider
              value={ {
                users: winners,
              } }>
              <ScoreTable
                loading={ loadingW }
                data={ winners }
              />
            </WinnersContext.Provider>
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
            <Center mb={ 8 }>
              <Heading fontFamily="serif" color="white">
                Enemy Squad
              </Heading>
            </Center>

            <LosersContext.Provider
              value={ {
                users: losers
              } }>
              <ScoreTable
                loading={ loadingL }
                data={ losers }
              />
            </LosersContext.Provider>
          </Flex>
        </TableContainer>
      </RefreshContext.Provider>
    </Wrapper>
  );
};

export default Content;