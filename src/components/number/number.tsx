import { PlayerNumber } from "../../slice/player-slice";
import classes from "./number.module.scss";

interface NumberProps extends PlayerNumber {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

function Number({
  checked,
  coordinateX,
  coordinateY,
  onClick,
  value,
}: NumberProps) {
  //   console.log(coordinateY, coordinateX, +coordinateY + 1, +coordinateX + 1);
  return (
    <div
      className={classes.boxContainer}
      style={{
        gridArea:
          coordinateY +
          "/" +
          coordinateX +
          "/" +
          (coordinateY + 1) +
          "/" +
          (coordinateX + 1),
      }}
    >
      <label htmlFor="numberCheckbox">{value}</label>
      <input
        // checked={checked}
        id="numberCheckbox"
        // onClick={onClick}
        type="checkbox"
      />
    </div>
  );
}

export default Number;
