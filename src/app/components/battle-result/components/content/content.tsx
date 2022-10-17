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
  const [isVictory, setIsVictory] = React.useState(false);
  const [winners, setWinners] = React.useState<sharedTypes.UserInfoType[]>([]);
  const [losers, setLosers] = React.useState<sharedTypes.UserInfoType[]>([]);

  React.useEffect(() => {
    /** Note: only for first render! */
    contentUtils.getWinners(setWinners, setLoadingW);
    contentUtils.getLosers(setLosers, setLoadingL);
  }, []);

  React.useEffect(() => {
    if (refresh) {
      contentUtils.getWinners(setWinners, undefined, setRefresh);
      contentUtils.getLosers(setLosers, undefined, setRefresh);
    }
  }, [refresh]);

  React.useMemo(() => {
    /** Note: use isVictory as a flag to understand in witch team is Current User */
    setIsVictory(!!winners.find((winner) => winner.currentUser));
  }, [winners]);

  return (
    <>
      <Center>
        <Heading
          fontFamily="serif"
          color="white"
          size={ "xl" }
        >
          { isVictory ? "Victory!" : "Defeat" }
        </Heading>
      </Center>

      <Wrapper withPadding>
        <RefreshContext.Provider value={ { refresh, setRefresh } }>
          <TableContainer
            display="flex"
          >
            <Flex w="full" direction="column">
              <Center mb={ 8 }>
                <Heading fontFamily="serif" color="white">
                  Your Team
                </Heading>
              </Center>
              {
                /** isVictory = current user in Winning team */
                isVictory ? (
                  <WinnersContext.Provider
                    value={ {
                      users: winners,
                    } }>
                    <ScoreTable
                      loading={ loadingW }
                      data={ winners }
                    />
                  </WinnersContext.Provider>
                ) : (
                  <LosersContext.Provider
                    value={ {
                      users: losers
                    } }>
                    <ScoreTable
                      loading={ loadingL }
                      data={ losers }
                    />
                  </LosersContext.Provider>
                )
              }
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
                  Enemy Team
                </Heading>
              </Center>
              {
                /** isVictory = current user in Winning team
                 * which means that in second table data should be shown vice versa */
                isVictory ? (
                  <LosersContext.Provider
                    value={ {
                      users: losers
                    } }>
                    <ScoreTable
                      loading={ loadingL }
                      data={ losers }
                    />
                  </LosersContext.Provider>
                ) : (
                  <WinnersContext.Provider
                    value={ {
                      users: winners,
                    } }>
                    <ScoreTable
                      loading={ loadingW }
                      data={ winners }
                    />
                  </WinnersContext.Provider>
                )
              }
            </Flex>
          </TableContainer>
        </RefreshContext.Provider>
      </Wrapper>
    </>
  );
};

export default Content;