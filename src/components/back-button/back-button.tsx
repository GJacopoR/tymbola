import { NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../button";
import classes from "./back-button.module.scss";

interface BackButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "large";
}

function BackButton({
  className,
  onClick,
  size,
}: BackButtonProps): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Button
      className={`${classes.backButton}
        ${size && classes[size + "Button"]}
        ${className && className}`}
      onClick={onClick ? onClick : () => navigate(-1)}
      children={
        <svg
          className={classes.backIcon}
          fill="#ff0000"
          height="111px"
          width="111px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-35.06 -35.06 289.27 289.27"
          xmlSpace="preserve"
          stroke="#ff0000"
          strokeWidth="12.491606999999998"
          transform="rotate(0)"
        >
          <g id="SVGRepo_iconCarrier">
            <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"></path>
          </g>
        </svg>
      }
    />
  );
}

export default BackButton;
