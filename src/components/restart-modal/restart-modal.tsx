import Button from '../button';
import classes from './restart-modal.module.scss'

interface CardSelectorModalProps {
    isModalOpen: boolean,
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onRestart: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

function CardSelectorModal({isModalOpen, onClose, onRestart}:CardSelectorModalProps) {
    return (isModalOpen && <aside className={classes.modalContainer}>
            <div className={classes.overlay}></div>
            <main className={`${classes.modal} ${isModalOpen && classes.openModal}`}>
                <button className={classes.closeButton} onClick={onClose}>X</button>

                <header className={classes.header}>{`Sei sicuro di voler concludere la partita corrente?`}</header>

                <main>
                    <Button label='Sì, concludi' onClick={onRestart}/>
                    <Button label='No, indietro' onClick={onClose} />
                </main>

            </main>
        </aside>)
}

export default CardSelectorModal;