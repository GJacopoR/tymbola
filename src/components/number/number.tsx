import { ChangeEvent } from "react";
import { PlayerNumber } from "../../slice/player-slice";
import classes from "./number.module.scss";

interface NumberProps extends PlayerNumber {
  onClick: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Number({
  checked,
  //   column,
  //   coordinateY,
  onClick,
  value,
}: NumberProps) {
  return (
    <div className={classes.boxContainer}>
      <label
        className={`${classes.label} ${checked && classes.checkedLabel}`}
        htmlFor={`numberCheckbox_${value}`}
      >
        {value}
      </label>

      <input
        checked={checked}
        id={`numberCheckbox_${value}`}
        onChange={onClick}
        type="checkbox"
      />

      <span
        className={`${classes.fakeLabel} ${
          checked && classes.checkedFakeLabel
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default Number;

//   style={{
//     gridArea:
//       coordinateY +
//       "/" +
//       column +
//       "/" +
//       (coordinateY + 1) +
//       "/" +
//       (column + 1),
//   }}
