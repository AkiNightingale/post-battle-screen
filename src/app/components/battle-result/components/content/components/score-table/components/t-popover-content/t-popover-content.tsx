import React from "react";
import {
  Button, Center, Divider, Flex, Grid, GridItem, Image,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader
} from "@chakra-ui/react";
import { UserInfoType } from "../../../../duck";
import { BiTargetLock } from "react-icons/bi";
import { GiSkullCrack } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";

interface TPopoverContentProps {
  user: UserInfoType
}

const TPopoverContent: React.FC<TPopoverContentProps> = ({
  user
}) => {
  return (
    <PopoverContent
      color='black'
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
      <PopoverCloseButton />

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
                borderColor="black"
                p={ 2 }
              >
                <Image as={ BiTargetLock } color="black" fontSize="2rem" />
              </GridItem>

              <GridItem
                borderLeft="1px"
                borderBottom="1px"
                borderColor="black"
                p={ 2 }
              >
                <Image as={ GiSkullCrack } color="black" fontSize="2rem" />
              </GridItem>
            </>

            <>
              <GridItem
                borderRight="1px"
                borderTop="1px"
                borderColor="black"
                color="black"
                fontSize="2rem"
                lineHeight="2rem"
                p={ 2 }
              >
                { user.kills }
              </GridItem>

              <GridItem
                borderLeft="1px"
                borderTop="1px"
                borderColor="black"
                color="black"
                fontSize="2rem"
                lineHeight="2rem"
                p={ 2 }
              >
                { user.deaths }
              </GridItem>
            </>
          </Grid>

          <Button
            ml={ 4 }
            leftIcon={ <FaHandshake fontSize="1.5rem" /> }
            backgroundColor="#608F4A"
            _hover={ {
              backgroundColor: "#6da155"
            } }
            _focus={ {
              backgroundColor: "#6da155"
            } }
            color="black"
            fontFamily="serif"
          >
            ADD TO FRIENDS
          </Button>
        </Flex>
      </PopoverBody>
    </PopoverContent>
  )
}

export default TPopoverContent;