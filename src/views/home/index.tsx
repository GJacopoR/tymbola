/* eslint-disable react-refresh/only-export-components */
import HomeComponent from "./home";
import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import * as caller from "../../slice/caller-slice";
import * as player from "../../slice/player-slice";
import * as modal from "../../slice/modal-slice";
import { NavigateFunction, useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useAppDispatch();

  const navigate: NavigateFunction = useNavigate();

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

  const handleGameReturn = (): void => {
    navigate(1);
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
      onGameReturn={handleGameReturn}
      onModalOpen={handleModalOpen}
    />
  );
}

export default Home;
