import CardSelectorModalComponent from "./card-selector-modal";
import { useAppSelector } from "../../slice/hooks";
import * as modal from "../../slice/modal-slice";
import * as player from "../../slice/player-slice";
import { useAppDispatch } from "../../slice/hooks";

function CardSelectorModal() {
  const dispatch = useAppDispatch();

  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

  const handleClose = () => dispatch(modal.toggle());

  const handleNewCardsClick = () => dispatch(player.getRandomNumbers(6));

  return (
    <CardSelectorModalComponent
      isModalOpen={isModalOpen}
      onClose={handleClose}
      onNewCardsClick={handleNewCardsClick}
    />
  );
}

export default CardSelectorModal;
