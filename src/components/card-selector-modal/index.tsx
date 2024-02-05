import CardSelectorModalComponent from "./card-selector-modal";
import { useAppSelector } from "../../slice/hooks";
import * as modal from "../../slice/modal-slice";
import * as player from "../../slice/player-slice";
import { useAppDispatch } from "../../slice/hooks";

function CardSelectorModal() {
  const dispatch = useAppDispatch();

  const savedCards = localStorage.getItem("player-cards");

  const bodySelectionContent: "options" | "new" | "load" | "create" =
    useAppSelector((state) => state.modal.bodySelectionContent);

  const isModalOpen: boolean = useAppSelector((state) => state.modal.isOpen);

  const handleBack = (): void => {
    dispatch(modal.setBodySelectionContent("options"));
  };

  const handleClose = (): void => {
    dispatch(modal.toggle());
  };

  const handleLoad = (): void => {
    savedCards && dispatch(player.setSavedNumbers(JSON.parse(savedCards)));
    dispatch(modal.toggle());
  };

  const handleNewCardsClick = (): void => {
    dispatch(modal.setBodySelectionContent("new"));
  };

  const handleNewCardsNumberClick = (cardsNumber: number): void => {
    dispatch(player.setRandomNumbers(cardsNumber));
    dispatch(modal.toggle());
  };

  return (
    <CardSelectorModalComponent
      areCardsSaved={!!savedCards}
      bodySelectionContent={bodySelectionContent}
      isModalOpen={isModalOpen}
      onBack={handleBack}
      onClose={handleClose}
      onLoad={handleLoad}
      onNewCardsClick={handleNewCardsClick}
      onNewCardsNumberClick={handleNewCardsNumberClick}
    />
  );
}

export default CardSelectorModal;
