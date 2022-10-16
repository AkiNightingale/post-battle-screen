import * as React from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { FaHandshake } from "react-icons/fa";
import { LosersContext, sharedTypes, WinnersContext } from "@shared/duck";
import { RefreshContext } from "@shared/duck/context";

interface FriendsBtnProps {
  selectedUser: sharedTypes.UserInfoType
}

const FriendsBtn: React.FC<FriendsBtnProps> = ({
  selectedUser
}) => {
  const [pathUrl, setPathUrl] = React.useState("");
  const { users: winners } = React.useContext(WinnersContext);
  const { users: losers } = React.useContext(LosersContext);
  const { setRefresh } = React.useContext(RefreshContext);

  React.useEffect(() => {
    if (pathUrl) {
      const fetchData = async () => {
        await axios.patch(`${ pathUrl }/${ selectedUser.id }`, {
          isFriendOfCurrent: !selectedUser.isFriendOfCurrent,
        }).then(() => setPathUrl(""))
          .catch(error => error.response.data)
          .finally(() => {
            if (setRefresh) {
              setRefresh(true);
            }
          });
      }

      fetchData();
    }
  }, [pathUrl])

  const handleBtnClick = () => {
    if (winners && losers) {
      const isWinnerTeam = !!winners.find((winner) => winner.id === selectedUser.id);
      const isLoserTeam = !!winners.find((winner) => winner.id === selectedUser.id);

      setPathUrl(isWinnerTeam ? "http://localhost:3500/winners" :
        isLoserTeam ? "http://localhost:3500/losers" : "");
    }
  }

  return (
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
        textTransform="uppercase"
        onClick={ handleBtnClick }
      >
        { selectedUser.isFriendOfCurrent ? "Remove" : "Add to friends" }
      </Button>
  )
};

export default FriendsBtn;