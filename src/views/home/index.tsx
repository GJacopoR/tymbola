import HomeComponent from "./home";
import * as modal from "../../slice/modal-slice";
import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import * as player from "../../slice/player-slice";
import * as caller from "../../slice/caller-slice";

function Home() {
  const dispatch = useAppDispatch();

  const isCallerGameOngoing: boolean = useAppSelector(
    caller.selectIsCallerGameOngoing
  );

  const isPlayerGameOngoing: boolean = useAppSelector(
    player.selectIsPlayerGameOngoing
  );

  const handleEndCallerGame = (): void => {
    dispatch(caller.restart());
  };

  const handleEndPlayerGame = (): void => {
    dispatch(player.setEndGame());
  };

  const handleModalOpen = (): void => {
    dispatch(modal.toggle());
  };

  return (
    <HomeComponent
      isCallerGameOngoing={isCallerGameOngoing}
      isPlayerGameOngoing={isPlayerGameOngoing}
      onEndCallerGame={handleEndCallerGame}
      onEndPlayerGame={handleEndPlayerGame}
      onModalOpen={handleModalOpen}
    />
  );
}

export default Home;
