import { Link } from "react-router-dom";
import classes from './home.module.scss'

function Home() {
    return <>
	{/* <Route path="users/:id" element={<Users />} /> */}
    <section>
        <button className={classes.button}>
            <Link to={'/caller'} className={classes.link}>
                Caller
            </Link>
        </button>
    </section>
    <section>
        <button className={classes.button}>
            <Link to={'/constructor'} className={classes.link}>
                Player
            </Link>
        </button>
    </section>

    </>
}

export default Home;