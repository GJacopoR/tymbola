import classes from './caller-card.module.scss'

function CallerCard () {
    return <section>
        <main className={classes.cardsContainer}>
            <section className={classes.card}>
                <label htmlFor="number"></label>
                <input type="checkbox" name="number" id="number" />
            </section>
        </main>
    </section>
}

export default CallerCard;