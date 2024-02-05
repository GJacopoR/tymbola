import Button from "../button";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./restart-modal.module.scss";

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
              <h4 className={classes.title}>
                {`Sei sicuro di voler concludere la partita corrente?`}
              </h4>
              <p className={classes.subTitle}>
                {`Le cartelle verranno resettate`}
              </p>
            </header>

            <main>
              <Button label="Sì, concludi" onClick={onRestart} />
              <Button label="No, indietro" onClick={onClose} />
            </main>
          </motion.main>
        </aside>
      )}
    </AnimatePresence>
  );
}

export default CardSelectorModal;
