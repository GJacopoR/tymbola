import RestartModalComponent from "./restart-modal";
import { useAppSelector } from "../../slice/hooks";
import * as caller from "../../slice/caller-slice";
import * as player from "../../slice/player-slice";
import * as modal from "../../slice/modal-slice";
import { useAppDispatch } from "../../slice/hooks";

function RestartModal() {
  const dispatch = useAppDispatch();

  const isCallerGameOngoing = useAppSelector(caller.selectIsCallerGameOngoing);
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const isPlayerGameOngoing = useAppSelector(player.selectIsPlayerGameOngoing);

  const handleClose = (): void => {
    dispatch(modal.toggle());
  };

  const handleRestart = (): void => {
    isCallerGameOngoing && dispatch(caller.restart());
    isPlayerGameOngoing && dispatch(player.resetCardsStates());
    dispatch(modal.toggle());
  };

  return (
    <RestartModalComponent
      isModalOpen={isModalOpen}
      onClose={handleClose}
      onRestart={handleRestart}
    />
  );
}

export default RestartModal;
