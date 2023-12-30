import CallerViewComponent from './caller-view';
import * as caller from '../../slice/caller-slice'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../slice/hooks';
import { useEffect } from 'react';

function CallerView(){

    const utterance = new SpeechSynthesisUtterance()

    const dispatch = useAppDispatch()

    const history :number[] = useSelector(caller.selectHistory)

    const repository :number[] = useSelector(caller.selectRepository)

    const callNumber = (number:string):void => {
        utterance.text = number
        utterance.voice = window.speechSynthesis.getVoices()[21]
        utterance.rate = 0.25
        utterance.pitch = 1
        utterance.volume = 1
    
        window.speechSynthesis.speak(utterance)
    }

    useEffect(() => {
        history.length && callNumber(String(history[history.length - 1]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history])

    const handleExtract = ():void => {
        dispatch(caller.extract());
    }

    const handleRepeat = ():void => {
        const number = String(history[history.length - 1])
        // const repeatedString :string = [number, number.split('').join(', ')].join(', ')
        const repeatedString :string = number.length === 1 ? number : `${number}, ${number[0]}, ${number[1]}`

        callNumber(repeatedString);
    }

    return <CallerViewComponent 
        history={history}
        onCallClick={handleExtract}
        onRepeatClick={handleRepeat}
        repository={repository} />
}

export default CallerView;