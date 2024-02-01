import { Link } from "react-router-dom";
import BackButton from "../back-button";
import Button from "../button";
import classes from "./card-selector-modal.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const MAX_CARDS_PER_PLAYER: number = 6;

interface CardSelectorModalProps {
  bodySelectionContent: "options" | "new" | "load" | "create";
  isModalOpen: boolean;
  onBack: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNewCardsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNewCardsNumberClick: (cardsNumber: number) => void;
}

function CardSelectorModal({
  bodySelectionContent,
  isModalOpen,
  onBack,
  onClose,
  onNewCardsClick,
  onNewCardsNumberClick,
}: CardSelectorModalProps): JSX.Element {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <aside className={classes.modalContainer}>
          <motion.div
            className={classes.overlay}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          ></motion.div>

          <motion.main
            className={classes.modal}
            initial={{ translateY: 300, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 200, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {bodySelectionContent !== "options" && (
              <BackButton
                className={classes.backButton}
                onClick={onBack}
                size="small"
              />
            )}

            <button className={classes.closeButton} onClick={onClose}>
              X
            </button>

            {getBodyContent(
              bodySelectionContent,
              onNewCardsClick,
              onNewCardsNumberClick
            )}
          </motion.main>
        </aside>
      )}
    </AnimatePresence>
  );
}

export default CardSelectorModal;

function getBodyContent(
  bodySelectionContent: "options" | "new" | "load" | "create",
  onNewCardsClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onNewCardsNumberClick: (cardsNumber: number) => void
): JSX.Element {
  switch (bodySelectionContent) {
    case "new":
      return (
        <section className={classes.modalBody}>
          <header className={classes.header}>
            {`Quante cartelle creare?`}
          </header>

          <main className={classes.cardsNumberSelectorContainer}>
            {Array.from({ length: MAX_CARDS_PER_PLAYER }, (_, i) => i + 1).map(
              (cardsNumber) => (
                <Link
                  key={cardsNumber + "_card_per_player"}
                  to={"/tymbola/player"}
                >
                  <Button
                    className={classes.cardsNumberButton}
                    label={String(cardsNumber)}
                    onClick={() => onNewCardsNumberClick(cardsNumber)}
                  />
                </Link>
              )
            )}
          </main>
        </section>
      );

    case "load":
      return <section className={classes.modalBody}></section>;

    case "create":
      return <section className={classes.modalBody}></section>;

    default:
      return (
        <section className={classes.modalBody}>
          <header className={classes.header}>
            {`Come selezionare le cartelle?`}
          </header>

          <main>
            <Button label="Nuove cartelle" onClick={onNewCardsClick} />
            <Button label="Carica salvate" disabled />
            <Button label="Scegli numeri" disabled />
          </main>
        </section>
      );
  }
}
