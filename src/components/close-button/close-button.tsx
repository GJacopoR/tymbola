import Button from "../button";
import classes from "./close-button.module.scss";

interface CloseButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "large";
}

function CloseButton({
  className,
  onClick,
  size,
}: CloseButtonProps): JSX.Element {
  return (
    <Button
      className={`${classes.closeButton} ${size && classes[size + "Button"]} ${
        className && className
      }`}
      label="×"
      onClick={onClick}
    />
  );
}

export default CloseButton;
