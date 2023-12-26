import HomeComponent from './home';
import * as modal from '../../slice/modal-slice';
import { useAppDispatch } from '../../slice/hooks';

function Home(){
    const dispatch = useAppDispatch()
    const handleModalOpen = () => dispatch(modal.toggle())

    return <HomeComponent onModalOpen={handleModalOpen}/>
}

export default Home;