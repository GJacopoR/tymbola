import classes from "./button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "sm" | "lg";
  style?: React.CSSProperties;
}

function Button({
  children,
  className,
  disabled,
  label,
  onClick,
  size,
  style,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={
        className
          ? classes.defaultButton +
            " " +
            classes[size + "Button"] +
            " " +
            className
          : classes.defaultButton + " " + classes[size + "Button"]
      }
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children} {label}
    </button>
  );
}

export default Button;
