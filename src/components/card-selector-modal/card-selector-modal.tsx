import Button from "../button";
import classes from "./card-selector-modal.module.scss";

interface CardSelectorModalProps {
  isModalOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onNewCardsClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function CardSelectorModal({
  isModalOpen,
  onClose,
  onNewCardsClick,
}: CardSelectorModalProps): JSX.Element {
  return isModalOpen ? (
    <aside className={classes.modalContainer}>
      <div className={classes.overlay}></div>
      <main className={`${classes.modal} ${isModalOpen && classes.openModal}`}>
        <button className={classes.closeButton} onClick={onClose}>
          X
        </button>

        <section className={classes.modalBody}>
          <header
            className={classes.header}
          >{`Come selezionare le cartelle?`}</header>

          <main>
            <Button label="Nuove cartelle" onClick={onNewCardsClick} />
            <Button label="Carica salvate" />
            <Button label="Scegli numeri" />
          </main>
        </section>
      </main>
    </aside>
  ) : (
    <></>
  );
}

export default CardSelectorModal;

// function getBodyContent(isModalOpen: boolean): JSX.Element {
//   return <section className={classes.modalBody}></section>;
// }
