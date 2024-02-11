import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import * as player from "../../slice/player-slice";
import PlayerViewComponent from "./player-view";
import * as modal from "../../slice/modal-slice";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

function PlayerView() {
  const navigate: NavigateFunction = useNavigate();

  const dispatch = useAppDispatch();

  const [isRestartModalOpen, setIsRestartModalOpen] = useState<boolean>(false);

  const cardsStructure: player.PlayerNumber[][][] = useAppSelector(
    player.selectCardsStructure
  );

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

  return (
    <PlayerViewComponent
      cardsStructure={cardsStructure}
      isRestartModalOpen={isRestartModalOpen}
      onRestartClick={handleRestartModalOpen}
      onSaveClick={handleSaveModalOpen}
    />
  );
}

export default PlayerView;
