import CardSelectorModalComponent from "./card-selector-modal";
import { useAppSelector } from "../../slice/hooks";
import * as modal from "../../slice/modal-slice";
import * as player from "../../slice/player-slice";
import { useAppDispatch } from "../../slice/hooks";

function CardSelectorModal() {
  const dispatch = useAppDispatch();

  const bodySelectionContent: "options" | "new" | "load" | "create" =
    useAppSelector((state) => state.modal.bodySelectionContent);

  const isModalOpen: boolean = useAppSelector((state) => state.modal.isOpen);

  const handleBack = (): void => {
    dispatch(modal.setBodySelectionContent("options"));
  };

  const handleClose = (): void => {
    dispatch(modal.toggle());
  };

  const handleNewCardsClick = (): void => {
    // dispatch(player.getRandomNumbers(6));
    dispatch(modal.setBodySelectionContent("new"));
  };

  const handleNewCardsNumberClick = (cardsNumber: number): void => {
    dispatch(player.getRandomNumbers(cardsNumber));
  };

  return (
    <CardSelectorModalComponent
      bodySelectionContent={bodySelectionContent}
      isModalOpen={isModalOpen}
      onBack={handleBack}
      onClose={handleClose}
      onNewCardsClick={handleNewCardsClick}
      onNewCardsNumberClick={handleNewCardsNumberClick}
    />
  );
}

export default CardSelectorModal;
