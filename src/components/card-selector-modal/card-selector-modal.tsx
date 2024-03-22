import { Link } from "react-router-dom";
import BackButton from "../back-button";
import Button from "../button";
import classes from "./card-selector-modal.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import CloseButton from "../close-button";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const MAX_CARDS_PER_PLAYER: number = 6;

interface CardSelectorModalProps {
  areCardsSaved: boolean;
  bodySelectionContent: "options" | "new" | "load" | "create";
  isModalOpen: boolean;
  onBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onLoad: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNewCardsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNewCardsNumberClick: (cardsNumber: number) => void;
}

function CardSelectorModal({
  areCardsSaved,
  bodySelectionContent,
  isModalOpen,
  onBack,
  onClose,
  onLoad,
  onNewCardsClick,
  onNewCardsNumberClick,
}: CardSelectorModalProps): JSX.Element {
  const { t } = useTranslation();

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
            exit={{ translateY: 100, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {bodySelectionContent !== "options" && (
              <BackButton
                className={classes.backButton}
                onClick={onBack}
                size="small"
              />
            )}

            <CloseButton
              className={classes.closeButton}
              size="small"
              onClick={onClose}
            />

            {getBodyContent(
              areCardsSaved,
              bodySelectionContent,
              onLoad,
              onNewCardsClick,
              onNewCardsNumberClick,
              t
            )}
          </motion.main>
        </aside>
      )}
    </AnimatePresence>
  );
}

export default CardSelectorModal;

function getBodyContent(
  areCardsSaved: boolean,
  bodySelectionContent: "options" | "new" | "load" | "create",
  onLoad: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onNewCardsClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onNewCardsNumberClick: (cardsNumber: number) => void,
  t: TFunction<"translation", undefined>
): JSX.Element {
  switch (bodySelectionContent) {
    case "new":
      return (
        <section className={classes.modalBody}>
          <header className={classes.header}>
            {t("home.cardSelectorModal.newCardsMessage")}
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

    // case "load":
    //   return <section className={classes.modalBody}></section>;

    case "create":
      return <section className={classes.modalBody}></section>;

    default:
      return (
        <section className={classes.modalBody}>
          <header className={classes.header}>
            {t("home.cardSelectorModal.baseMessage")}
          </header>

          <main className={classes.defaultContent}>
            <Button
              label={t("home.cardSelectorModal.newCardsButton")}
              onClick={onNewCardsClick}
            />
            <Link to={"/tymbola/player"}>
              <Button
                label={t("home.cardSelectorModal.loadCardsButton")}
                disabled={!areCardsSaved}
                onClick={onLoad}
              />
            </Link>
            <Button
              label={t("home.cardSelectorModal.chooseCardsButton")}
              disabled
            />
          </main>
        </section>
      );
  }
}
