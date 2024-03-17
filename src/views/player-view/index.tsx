import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import * as player from "../../slice/player-slice";
import PlayerViewComponent from "./player-view";
import * as modal from "../../slice/modal-slice";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { FireworksOptions } from "@fireworks-js/react";

const fireworksOptions: FireworksOptions = {
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.05,
  friction: 0.95,
  gravity: 2.5,
  particles: 100,
  traceLength: 1,
  traceSpeed: 15,
  explosion: 2,
  intensity: 30,
  flickering: 50,
  lineStyle: "round",
  hue: {
    min: 0,
    max: 360,
  },
  delay: {
    min: 30,
    max: 50,
  },
  rocketsPoint: {
    min: 50,
    max: 50,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 5,
    },
    trace: {
      min: 1,
      max: 1,
    },
  },
  brightness: {
    min: 50,
    max: 80,
  },
  decay: {
    min: 0.005,
    max: 0.035,
  },
  mouse: {
    click: true,
    move: false,
    max: 1,
  },
};
function PlayerView() {
  const navigate: NavigateFunction = useNavigate();

  const dispatch = useAppDispatch();

  const [isRestartModalOpen, setIsRestartModalOpen] = useState<boolean>(false);

  const cardsStructure: player.PlayerNumber[][][] = useAppSelector(
    player.selectCardsStructure
  );

  const winnerMode: player.WinnerMode = useAppSelector(player.selectWinnerMode);

  useEffect(() => {
    cardsStructure[0][0].length || navigate("/tymbola/");
  }, [cardsStructure, navigate]);

  // cardsStructure[0][0].length || navigate("/tymbola/");

  const handleRestartModalOpen = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setIsRestartModalOpen(true);
    dispatch(modal.toggle());
  };

  const handleSaveModalOpen = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setIsRestartModalOpen(false);
    dispatch(modal.toggle());
  };

  const handleSetIsTombola = (): { type: "player/setIsTombola" } =>
    dispatch(player.setIsTombola());

  const handleSetIsNotTombola = (): void => {
    winnerMode.winningNumber &&
      dispatch(player.setNumberStateUnchecked(winnerMode.winningNumber));
  };

  return (
    <PlayerViewComponent
      cardsStructure={cardsStructure}
      fireworksOptions={fireworksOptions}
      isRestartModalOpen={isRestartModalOpen}
      onRestartClick={handleRestartModalOpen}
      onSaveClick={handleSaveModalOpen}
      setIsTombola={handleSetIsTombola}
      setIsNotTombola={handleSetIsNotTombola}
      winnerMode={winnerMode}
    />
  );
}

export default PlayerView;
