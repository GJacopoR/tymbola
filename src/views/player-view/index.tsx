import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import * as player from "../../slice/player-slice";
import PlayerViewComponent from "./player-view";
import * as modal from "../../slice/modal-slice";

function PlayerView() {
  const dispatch = useAppDispatch();

  const cardsStructure: player.PlayerNumber[][][] = useAppSelector(
    player.selectCardsStructure
  );

  const handleModalOpen = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(modal.toggle());
  };

  return (
    <PlayerViewComponent
      cardsStructure={cardsStructure}
      onSaveClick={handleModalOpen}
    />
  );
}

export default PlayerView;
