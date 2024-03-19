import Button from "../button";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./restart-modal.module.scss";
import CloseButton from "../close-button";
import { useTranslation } from "react-i18next";

interface CardSelectorModalProps {
  isModalOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRestart: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function CardSelectorModal({
  isModalOpen,
  onClose,
  onRestart,
}: CardSelectorModalProps) {
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
            exit={{ translateY: 200, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <CloseButton
              className={classes.closeButton}
              size="small"
              onClick={onClose}
            />

            <header className={classes.header}>
              <h4 className={classes.title}>
                {t("commons.endGameModal.endGameMessage")}
              </h4>
              <p className={classes.subTitle}>
                {t("commons.endGameModal.endGameSubmessage")}
              </p>
            </header>

            <main>
              <Button
                label={t("commons.endGameModal.endGameButton")}
                onClick={onRestart}
              />
              <Button label={t("commons.noBackButton")} onClick={onClose} />
            </main>
          </motion.main>
        </aside>
      )}
    </AnimatePresence>
  );
}

export default CardSelectorModal;
