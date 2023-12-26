import CardSelectorModalComponent from './card-selector-modal';
import { useAppSelector } from '../../slice/hooks';
import * as modal from '../../slice/modal-slice';
import { useAppDispatch } from '../../slice/hooks';

function CardSelectorModal() {
    const dispatch = useAppDispatch()

    const isModalOpen = useAppSelector(state => state.modal.isOpen)

    const handleClose = () => dispatch(modal.toggle())

    return <CardSelectorModalComponent isModalOpen={isModalOpen} onClose={handleClose}/>
}

export default CardSelectorModal;
