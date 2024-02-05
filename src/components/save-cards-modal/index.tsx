import SaveCardsModalComponent from "./save-cards-modal";
import { useAppSelector } from "../../slice/hooks";
// import * as player from "../../slice/player-slice";
import * as modal from "../../slice/modal-slice";
import { useAppDispatch } from "../../slice/hooks";
import { setCookie } from "../../assets/cookie-helpers";

function SaveCardsModal() {
  const dispatch = useAppDispatch();

  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

  const structure = useAppSelector((state) => state.player.cardsStructure);

  const handleClose = (): void => {
    dispatch(modal.toggle());
  };

  const handleSave = (): void => {
    const jsonStructure = JSON.stringify(structure);
    setCookie("player-cards", jsonStructure, 390);
    dispatch(modal.toggle());
  };

  return (
    <SaveCardsModalComponent
      isModalOpen={isModalOpen}
      onClose={handleClose}
      onSave={handleSave}
    />
  );
}

export default SaveCardsModal;
