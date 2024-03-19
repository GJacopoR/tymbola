import { useTranslation } from "react-i18next";
import Button from "../button";
import CloseButton from "../close-button";
import classes from "./save-cards-modal.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface SaveCardsModalProps {
  isModalOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function SaveCardsModal({ isModalOpen, onClose, onSave }: SaveCardsModalProps) {
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
                {t("playerView.saveModal.saveMessage")}
              </h4>
              <p className={classes.subTitle}>
                {t("playerView.saveModal.saveSubmessage")}
              </p>
            </header>

            <main>
              <Button
                label={t("playerView.saveModal.saveButton")}
                onClick={onSave}
              />
              <Button label={t("commons.noBackButton")} onClick={onClose} />
            </main>
          </motion.main>
        </aside>
      )}
    </AnimatePresence>
  );
}

export default SaveCardsModal;
