/* eslint-disable react-refresh/only-export-components */
import HomeComponent from "./home";
import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import * as caller from "../../slice/caller-slice";
import * as player from "../../slice/player-slice";
import * as modal from "../../slice/modal-slice";

function Home() {
  const dispatch = useAppDispatch();

  const isCallerGameOngoing: boolean = useAppSelector(
    caller.selectIsCallerGameOngoing
  );

  const isPlayerGameOngoing: boolean = useAppSelector(
    player.selectIsPlayerGameOngoing
  );

  const isModalOpen: boolean = useAppSelector(modal.selectIsOpen);

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
      isModalOpen={isModalOpen}
      onEndCallerGame={handleEndCallerGame}
      onEndPlayerGame={handleEndPlayerGame}
      onModalOpen={handleModalOpen}
    />
  );
}

export default Home;
