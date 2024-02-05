import Button from "../button";
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
            <button className={classes.closeButton} onClick={onClose}>
              X
            </button>

            <header className={classes.header}>
              Sei sicuro di voler salvare le cartelle attuali?
            </header>

            <p className={classes.subTitle}>
              Eventuali cartelle già salvate verranno sovrascritte`
            </p>

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
