import CallerViewComponent from './caller-view';
import * as caller from '../../slice/caller-slice'
import { useAppDispatch, useAppSelector } from '../../slice/hooks';
import { useEffect } from 'react';

function CallerView(){

    const utterance:SpeechSynthesisUtterance = new SpeechSynthesisUtterance()
    if (window.speechSynthesis.getVoices().find(voice => voice.name === 'Luca')){
        utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.name === 'Luca') || null
    } else {
        utterance.voice = window.speechSynthesis.getVoices().find(voice => voice.lang === 'it-IT') || null
    } // index 21 for Luca, 57 for Google italiano
    utterance.rate = utterance.voice?.name === 'Luca' ? 0.25 : 0.9
    utterance.pitch = 1
    utterance.volume = 1

    console.log(window.speechSynthesis.getVoices())

    const dispatch = useAppDispatch()

    const history:caller.TombolaNumber[] = useAppSelector(caller.selectHistory);

    const isSmorfiaMode:boolean = useAppSelector(caller.selectIsSmorfiaMode);

    const repository:caller.TombolaNumber[] = useAppSelector(caller.selectRepository);

    const lastTombolaNumber:caller.TombolaNumber = history[history.length - 1];

    // const callerCards = [Array.from({length: 15}, (_, i) => i + 1),
    //     Array.from({length: 15}, (_, i) => i + 16),
    //     Array.from({length: 15}, (_, i) => i + 31),
    //     Array.from({length: 15}, (_, i) => i + 46),
    //     Array.from({length: 15}, (_, i) => i + 61),
    //     Array.from({length: 15}, (_, i) => i + 76),
    // ]

    const callerCards = [
        [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25],
        [6, 7, 8, 9, 10, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55],
        [36, 37, 38, 39, 40, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60],
        [61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85],
        [66, 67, 68, 69, 70, 76, 77, 78, 79, 80, 86, 87, 88, 89, 90]
    ]

    const callNumber = (number:string):void => {
        utterance.text = number;
        
        window.speechSynthesis.speak(utterance);
    }

    useEffect(() => {
        if(lastTombolaNumber){
            const string = String(lastTombolaNumber.number);
            const smorfiaString = `${lastTombolaNumber.pronunciation},  ${lastTombolaNumber.smorfia_meaning}`;
            history.length && callNumber(isSmorfiaMode ? smorfiaString : string);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history])

    const handleExtract = ():void => {
        dispatch(caller.extract());
    }

    const handleRepeat = ():void => {
        const repeatedString:string = lastTombolaNumber.number <= 9 
        ? `${lastTombolaNumber.number}, ${lastTombolaNumber.smorfia_meaning}` 
        : `${lastTombolaNumber.number}, ${String(lastTombolaNumber.number)[0]}, ${String(lastTombolaNumber.number)[1]}, ${lastTombolaNumber.smorfia_meaning}`

        callNumber(repeatedString);
    }

    const handleRestart = ():void => {
        dispatch(caller.restart())
    }

    const handleSwitch = ():void => {
        dispatch(caller.switchIsSmorfiaMode())
    }

    return <CallerViewComponent 
        callerCards={callerCards}
        history={history}
        isSmorfiaMode={isSmorfiaMode}
        onCallClick={handleExtract}
        onRepeatClick={handleRepeat}
        onRestartClick={handleRestart}
        onSwitchClick={handleSwitch}
        repository={repository} />
}

export default CallerView;