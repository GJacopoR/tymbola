import { InputHTMLAttributes } from 'react';
import classes from './slider-button.module.scss';

interface SliderButtonProps {
    checkboxId?: string
    isChecked: boolean,
    label?: string,
    onSwitchClick: (e: InputHTMLAttributes<HTMLInputElement>) => void,
}

function SliderButton ({checkboxId, isChecked, label, onSwitchClick}:SliderButtonProps) {
    return <label className={classes.switch}>
            <input
                checked={isChecked}
                id={checkboxId}
                onChange={onSwitchClick}
                type="checkbox" />
            <span className={classes.slider}></span>
            <span className={`${classes.label} ${!isChecked && classes.labelDeactive}`}>
                {label}
            </span>
        </label>
}

export default SliderButton;