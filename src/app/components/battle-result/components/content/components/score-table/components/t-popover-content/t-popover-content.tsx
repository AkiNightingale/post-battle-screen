import React from "react";
import {
  Center, Divider, Flex, Grid, GridItem, Image,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader
} from "@chakra-ui/react";
import { BiTargetLock } from "react-icons/bi";
import { GiSkullCrack } from "react-icons/gi";
import { FriendsBtn } from "./components";
import { sharedTypes } from "@shared/duck";

interface TPopoverContentProps {
  user: sharedTypes.UserInfoType
}

const TPopoverContent: React.FC<TPopoverContentProps> = ({
  user
}) => {
  return (
    <PopoverContent
      color='white'
      bgGradient='linear(to bottom right, gray.600 20%, orange.700 50%, gray.600 80%)'
      borderColor='gray.600'
      fontFamily="serif"
    >
      <PopoverArrow />
      <PopoverHeader
        pt={ 4 }
        fontSize={ 18 }
        border='0'
        textAlign="center"
      >
        { user.nickname }
      </PopoverHeader>

      <Center borderColor="initial">
        <Divider color="gray.400" w="90%" />
      </Center>

      <PopoverBody>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            templateColumns='1fr 1fr'
            gap={ 0 }
            textAlign="center"
            fontFamily="serif"
          >
            <>
              <GridItem
                borderRight="1px"
                borderBottom="1px"
                borderColor="white"
                p={ 2 }
              >
                <Image as={ BiTargetLock } color="white" fontSize="2rem" />
              </GridItem>

              <GridItem
                borderLeft="1px"
                borderBottom="1px"
                borderColor="white"
                p={ 2 }
              >
                <Image as={ GiSkullCrack } color="white" fontSize="2rem" />
              </GridItem>
            </>

            <>
              <GridItem
                borderRight="1px"
                borderTop="1px"
                borderColor="white"
                color="white"
                fontSize="2rem"
                lineHeight="2rem"
                p={ 2 }
              >
                { user.kills }
              </GridItem>

              <GridItem
                borderLeft="1px"
                borderTop="1px"
                borderColor="white"
                color="white"
                fontSize="2rem"
                lineHeight="2rem"
                p={ 2 }
              >
                { user.deaths }
              </GridItem>
            </>
          </Grid>
          {
            !user.currentUser && (
              <FriendsBtn selectedUser={ user } />
            )
          }
        </Flex>
      </PopoverBody>
    </PopoverContent>
  )
}

export default TPopoverContent;