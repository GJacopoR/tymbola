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
                Sei sicuro di voler salvare le cartelle attuali?
              </h4>
              <p className={classes.subTitle}>
                Eventuali cartelle già salvate verranno sovrascritte
              </p>
            </header>

            <main>
              <Button label="Sì, salva" onClick={onSave} />
              <Button label="No, indietro" onClick={onClose} />
            </main>
          </motion.main>
        </aside>
      )}
    </AnimatePresence>
  );
}

export default SaveCardsModal;
