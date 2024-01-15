import CallerViewComponent from './caller-view';
import * as caller from '../../slice/caller-slice'
import { useAppDispatch, useAppSelector } from '../../slice/hooks';
import { useEffect } from 'react';

function CallerView(){

    const utterance:SpeechSynthesisUtterance = new SpeechSynthesisUtterance()
    utterance.voice = window.speechSynthesis.getVoices()[57] // 21 for Luca, 57 for Google italiano
    utterance.rate = 0.9 // 0.25 only for Luca
    utterance.pitch = 1
    utterance.volume = 1

    console.log(window.speechSynthesis.getVoices())

    const dispatch = useAppDispatch()

    const history:caller.TombolaNumber[] = useAppSelector(caller.selectHistory);

    const isSmorfiaMode:boolean = useAppSelector(caller.selectIsSmorfiaMode);

    const repository:caller.TombolaNumber[] = useAppSelector(caller.selectRepository);

    const lastTombolaNumber:caller.TombolaNumber = history[history.length - 1];

    // const callerCards = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]]

    const callerCards = [Array.from({length: 15}, (_, i) => i + 1),
        Array.from({length: 15}, (_, i) => i + 16),
        Array.from({length: 15}, (_, i) => i + 31),
        Array.from({length: 15}, (_, i) => i + 46),
        Array.from({length: 15}, (_, i) => i + 61),
        Array.from({length: 15}, (_, i) => i + 76),
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

    const handleSwitch = ():void => {
        dispatch(caller.switchIsSmorfiaMode())
    }

    return <CallerViewComponent 
        callerCards={callerCards}
        history={history}
        isSmorfiaMode={isSmorfiaMode}
        onCallClick={handleExtract}
        onRepeatClick={handleRepeat}
        onSwitchClick={handleSwitch}
        repository={repository} />
}

export default CallerView;