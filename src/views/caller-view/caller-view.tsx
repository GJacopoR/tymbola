import BackButton from "../../components/back-button";
import Button from "../../components/button";
import classes from "./caller-view.module.scss"
import { TombolaNumber } from "../../slice/caller-slice";
import { InputHTMLAttributes } from "react";
import SliderButton from "../../components/slider-button";
import CallerCard from "../../components/caller-card";
import RestartModal from "../../components/restart-modal";

interface CallerViewProps {
    callerCards: number[][],
    history: TombolaNumber[],
    isSmorfiaMode: boolean,
    onCallClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onRepeatClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onRestartClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onSwitchClick: (e: InputHTMLAttributes<HTMLInputElement>) => void,
    repository?: TombolaNumber[]
}

function CallerView({
    callerCards,
    history,
    isSmorfiaMode,
    onCallClick,
    onRepeatClick,
    onRestartClick,
    onSwitchClick}:CallerViewProps){

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
            <main className={classes.lastExtractedNumber}>
                {history && history[history.length - 1]?.number}
            </main>
            <aside className={classes.buttonsContainer}>
                <Button className={classes.button} label="Chiama" onClick={onCallClick} />
                <Button className={classes.button} disabled={!history.length} label="Ripeti" onClick={onRepeatClick} />
            </aside>
            <article className={classes.callerCardsContainer}>
                {callerCards.map(callerCard => <CallerCard callerCard={callerCard}/>)}
            </article>
            <Button className={classes.restartButton} disabled={!history.length} label="FINE PARTITA" onClick={onRestartClick} 
                children={
                    <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-12.14 -12.14 327.88 327.88" xmlSpace="preserve" fill={history.length ? "#ff0000" : "#f08080"} stroke={history.length ? "#ff0000" : "#f08080"} strokeWidth="7.589924999999999">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.214388"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path style={history.length ? {fill:"#ff0000"} : {fill:"#f08080"}} d="M57.866,268.881c25.982,19.891,56.887,30.403,89.369,30.402h0.002c6.545,0,13.176-0.44,19.707-1.308 c39.055-5.187,73.754-25.272,97.702-56.557c14.571-19.033,24.367-41.513,28.329-65.01c0.689-4.084-2.064-7.954-6.148-8.643 l-19.721-3.326c-1.964-0.33-3.974,0.131-5.595,1.284c-1.621,1.153-2.717,2.902-3.048,4.864 c-3.019,17.896-10.49,35.032-21.608,49.555c-18.266,23.861-44.73,39.181-74.521,43.137c-4.994,0.664-10.061,1-15.058,1 c-24.757,0-48.317-8.019-68.137-23.191c-23.86-18.266-39.18-44.73-43.136-74.519c-3.957-29.787,3.924-59.333,22.189-83.194 c21.441-28.007,54.051-44.069,89.469-44.069c24.886,0,48.484,7.996,68.245,23.122c6.55,5.014,12.43,10.615,17.626,16.754 l-36.934-6.52c-1.956-0.347-3.973,0.101-5.604,1.241c-1.631,1.141-2.739,2.882-3.085,4.841l-3.477,19.695 c-0.72,4.079,2.003,7.969,6.081,8.689l88.63,15.647c0.434,0.077,0.869,0.114,1.304,0.114c1.528,0,3.031-0.467,4.301-1.355 c1.63-1.141,2.739-2.882,3.084-4.841l15.646-88.63c0.721-4.079-2.002-7.969-6.081-8.69l-19.695-3.477 c-4.085-0.723-7.97,2.003-8.689,6.082l-6.585,37.3c-7.387-9.162-15.87-17.463-25.248-24.642 c-25.914-19.838-56.86-30.324-89.495-30.324c-46.423,0-89.171,21.063-117.284,57.787C6.454,93.385-3.878,132.123,1.309,171.178 C6.497,210.236,26.583,244.933,57.866,268.881z"></path>
                        </g>
                    </svg>
                }
            />

            <RestartModal />
        </section>
}

export default CallerView;