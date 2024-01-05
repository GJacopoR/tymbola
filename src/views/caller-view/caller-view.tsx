import BackButton from "../../components/back-button";
import Button from "../../components/button";
import classes from "./caller-view.module.scss"

interface CallerViewProps {
    history: number[]
    onCallClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onRepeatClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    repository?: number[]
}

function CallerView({history, onCallClick, onRepeatClick}:CallerViewProps) {
    return <section className={classes.callerSection}>
            <BackButton />
            <ol className={classes.historyList}>
                {history.map((number) => 
                <li className={classes.historyNumber} key={number}>
                    {`${number}${history.indexOf(number) === history.length -1 ? '' : ','}`}
                </li>)}
            </ol>
            <header className={classes.lastExtractedNumber}>
                {history && history[history.length - 1]}
            </header>
            <div className={classes.buttonsContainer}>
                <Button className={classes.button} label="Call" onClick={onCallClick} />
                <Button className={classes.button} label="Repeat" onClick={onRepeatClick} />
            </div>
        </section>
}

export default CallerView;