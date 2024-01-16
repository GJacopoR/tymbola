import classes from './button.module.scss'

interface ButtonProps {
    children?: React.ReactNode,
    className?: string,
    disabled?: boolean,
    label?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    style?: React.CSSProperties,
}

function Button({children, className, disabled, label, onClick, style}:ButtonProps):JSX.Element{
    return <button
        className={className ? classes.defaultButton + ' ' + className : classes.defaultButton}
        disabled={disabled}
        onClick={onClick}
        style={style}>
            {children} {label}
    </button>
}

export default Button;