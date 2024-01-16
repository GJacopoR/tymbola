import { Link } from "react-router-dom";
import classes from './home.module.scss'
import CardSelectorModal from "../../components/card-selector-modal";
import Button from "../../components/button";
import Header from "../../components/header";

interface HomeComponentProps{
    onModalOpen: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Home({onModalOpen}:HomeComponentProps) {

    return <>
        {/* <Route path="users/:id" element={<Users />} /> */}
        <header>
            <Header />
        </header>
        <main className={classes.buttons}>
            <Link to={'/tymbola/caller'} className={classes.link}>
                <Button className={classes.button} label={"Tenitore \n (chi chiama)"}/>
            </Link>

            <Button className={classes.button} label={"Giocatore \n (chi spunta)"} onClick={onModalOpen} />
        </main>

        <section>
            <CardSelectorModal />
        </section>
    </>
}

export default Home;