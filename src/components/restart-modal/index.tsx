import RestartModalComponent from './restart-modal';
import { useAppSelector } from '../../slice/hooks';
import * as caller from '../../slice/caller-slice'
import * as modal from '../../slice/modal-slice';
import { useAppDispatch } from '../../slice/hooks';

function RestartModal() {
    const dispatch = useAppDispatch()

    const isModalOpen = useAppSelector(state => state.modal.isOpen)

    const handleClose = ():void => {
        dispatch(modal.toggle())
    }

    const handleRestart = ():void => {
        dispatch(caller.restart());
        dispatch(modal.toggle());
    }

    return <RestartModalComponent isModalOpen={isModalOpen} onClose={handleClose} onRestart={handleRestart}/>
}

export default RestartModal;
