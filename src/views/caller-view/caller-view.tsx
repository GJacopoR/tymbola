import BackButton from "../../components/back-button";
import Button from "../../components/button";
import classes from "./caller-view.module.scss"
import { TombolaNumber } from "../../slice/caller-slice";
import { InputHTMLAttributes } from "react";
import SliderButton from "../../components/slider-button";
import CallerCard from "../../components/caller-card";

interface CallerViewProps {
    callerCards: number[][],
    history: TombolaNumber[],
    isSmorfiaMode: boolean,
    onCallClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onRepeatClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onSwitchClick: (e: InputHTMLAttributes<HTMLInputElement>) => void,
    repository?: TombolaNumber[]
}

function CallerView({callerCards, history, isSmorfiaMode, onCallClick, onRepeatClick, onSwitchClick}:CallerViewProps) {
    return <section className={classes.callerSection}>
            <nav>
                <BackButton />
                <SliderButton
                    checkboxId={'smorfiaModeSwitch'}
                    isChecked={isSmorfiaMode}
                    label={'Smorfia mode'}
                    onSwitchClick={onSwitchClick} />
            </nav>
            <ol className={classes.historyList}>
                {history.map((tombolaNumber) => 
                <li className={classes.historyNumber} key={tombolaNumber?.number}>
                    {`${tombolaNumber.number}${history.indexOf(tombolaNumber) === history.length -1 ? '' : ','}`}
                </li>)}
            </ol>
            <header className={classes.lastExtractedNumber}>
                {history && history[history.length - 1]?.number}
            </header>
            <div className={classes.buttonsContainer}>
                <Button className={classes.button} label="Call" onClick={onCallClick} />
                <Button className={classes.button} label="Repeat" onClick={onRepeatClick} />
            </div>
            <div className={classes.callerCardsContainer}>
                {callerCards.map(callerCard => <CallerCard callerCard={callerCard}/>)}
            </div>
        </section>
}

export default CallerView;