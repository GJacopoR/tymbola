import classes from './button.module.scss'

interface ButtonProps {
    children?: React.ReactNode,
    className?: string,
    label?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    style?: React.CSSProperties,
}

function Button({children, className, label, onClick, style}:ButtonProps){
    return <button
        className={className ? className : classes.defaultButton}
        onClick={onClick}
        style={style}>
            {children} {label}
    </button>
}

export default Button;