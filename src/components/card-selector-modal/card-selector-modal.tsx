import Button from '../button';
import classes from './card-selector-modal.module.scss'

interface CardSelectorModalProps {
    isModalOpen: boolean
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function CardSelectorModal({isModalOpen, onClose}:CardSelectorModalProps) {
    return (isModalOpen && <aside className={classes.modalContainer}>
            <div className={classes.overlay}></div>
            <main className={`${classes.modal} ${isModalOpen && classes.openModal}`}>
                <button className={classes.closeButton} onClick={onClose}>X</button>

                <header className={classes.header}>{`Come selezionare le cartelle?`}</header>

                <main>
                    <Button label='New one' />
                    <Button label='Load' />
                    <Button label='Pick numbers' />
                </main>

            </main>
        </aside>)
}

export default CardSelectorModal;