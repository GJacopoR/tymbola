import { Link } from "react-router-dom";
import classes from './home.module.scss'
import CardSelectorModal from "../../components/card-selector-modal";
import Button from "../../components/button";

interface HomeComponentProps{
    onModalOpen: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Home({onModalOpen}:HomeComponentProps) {

    return <>
	{/* <Route path="users/:id" element={<Users />} /> */}
    <section className={classes.buttons}>
        <Button className={classes.button} children={
            <Link to={'/tymbola/caller'} className={classes.link}>
                Caller
            </Link>
        }/>

        <Button className={classes.button} label={"Player"} onClick={onModalOpen} />
    </section>

    <section>
        <CardSelectorModal />
    </section>

    </>
}

export default Home;