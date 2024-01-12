import CallerViewComponent from './caller-view';
import * as caller from '../../slice/caller-slice'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../slice/hooks';
import { useEffect } from 'react';

function CallerView(){

    const utterance:SpeechSynthesisUtterance = new SpeechSynthesisUtterance()
    utterance.voice = window.speechSynthesis.getVoices()[21]
    utterance.rate = 0.25
    utterance.pitch = 1
    utterance.volume = 1

    const dispatch = useAppDispatch()

    const history:caller.TombolaNumber[] = useSelector(caller.selectHistory);

    const isSmorfiaMode:boolean = useSelector(caller.selectIsSmorfiaMode);

    const repository:caller.TombolaNumber[] = useSelector(caller.selectRepository);

    const lastTombolaNumber:caller.TombolaNumber = history[history.length - 1];

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
        history={history}
        isSmorfiaMode={isSmorfiaMode}
        onCallClick={handleExtract}
        onRepeatClick={handleRepeat}
        onSwitchClick={handleSwitch}
        repository={repository} />
}

export default CallerView;