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
            <ol className={classes.historyList}>
                {history.map((number) => 
                <li className={classes.historyNumber} key={number}>
                    {`${number}${history.indexOf(number) === history.length -1 ? '' : ','}`}
                </li>)}
            </ol>
            <header className={classes.lastExtractedNumber} >{history && history[history.length - 1]}</header>
            <Button label="Call" onClick={onCallClick} />
            <Button label="Repeat" onClick={onRepeatClick} />
        </section>
}

export default CallerView;