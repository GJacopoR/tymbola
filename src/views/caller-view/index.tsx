import CallerViewComponent from './caller-view';
import * as caller from '../../slice/caller-slice'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../slice/hooks';
import { useEffect } from 'react';

function CallerView(){

    const utterance = new SpeechSynthesisUtterance()

    const dispatch = useAppDispatch()

    const history = useSelector(caller.selectHistory)

    const repository = useSelector(caller.selectRepository)

    const callNumber = (number:string) => {
        console.log(number)
        utterance.text = number
        utterance.voice = window.speechSynthesis.getVoices()[0]
        utterance.rate = 0.2
        utterance.pitch = 0
    
        window.speechSynthesis.speak(utterance)
    }

    useEffect(() => {
        callNumber(String(history[history.length - 1]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history])

    const handleExtract = () => {
        dispatch(caller.extract());
    }

    const handleRepeat = () => {
        const number = String(history[history.length - 1])
        callNumber(`${number}, ${number[0]}, ${number[1]}`);
    }

    return <CallerViewComponent onCallClick={handleExtract} onRepeatClick={handleRepeat} history={history} repository={repository} />
}

export default CallerView;