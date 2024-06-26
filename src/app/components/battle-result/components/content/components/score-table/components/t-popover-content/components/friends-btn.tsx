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
  const [loading, setLoading] = React.useState(false);
  const { users: winners } = React.useContext(WinnersContext);
  const { users: losers } = React.useContext(LosersContext);
  const { setRefresh } = React.useContext(RefreshContext);

  React.useEffect(() => {
    if (pathUrl) {
      setLoading(true);

      const fetchData = async () => {
        await axios.patch(`${ pathUrl }/${ selectedUser.id }`, {
          isFriendOfCurrent: !selectedUser.isFriendOfCurrent,
        }).then(() => setPathUrl(""))
          .catch(error => error.response.data)
          .finally(() => {
            if (setRefresh) {
              setLoading(false);
              setRefresh(true);
            }
          });
      }

      fetchData();
    }
  }, [pathUrl, selectedUser, setRefresh])

  const handleBtnClick = () => {
    if (winners && losers) {
      const isWinnerTeam = !!winners.find((winner) => winner.id === selectedUser.id);
      const isLoserTeam = !!losers.find((loser) => loser.id === selectedUser.id);

      setPathUrl(isWinnerTeam ? "http://localhost:3500/winners" :
        isLoserTeam ? "http://localhost:3500/losers" : "");
    }
  }

  return (
    <Button
      ml={ 4 }
      leftIcon={ <FaHandshake fontSize="1.5rem" /> }
      backgroundColor={ selectedUser.isFriendOfCurrent ? "red.700" : "#608F4A" }
      _hover={ {
        backgroundColor: selectedUser.isFriendOfCurrent ? "red.500" : "#6da155"
      } }
      _focus={ {
        backgroundColor: selectedUser.isFriendOfCurrent ? "red.500" : "#6da155"
      } }
      color="white"
      fontFamily="serif"
      textTransform="uppercase"
      disabled={ loading }
      onClick={ handleBtnClick }
    >
      { selectedUser.isFriendOfCurrent ? "Remove" : "Add to friends" }
    </Button>
  )
};

export default FriendsBtn;