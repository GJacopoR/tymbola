import { PlayerNumber } from "../../slice/player-slice";
import classes from "./number.module.scss";

interface NumberProps extends PlayerNumber {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // onDoubleClick: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Number({ checked, onClick, onDoubleClick, value }: NumberProps) {
  return (
    <div className={classes.boxContainer}>
      <button
        className={`${classes.label} ${checked && classes.checkedLabel}`}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        // htmlFor={`numberCheckbox_${value}`}
      >
        {value}
      </button>

      {/* <input
        checked={checked}
        id={`numberCheckbox_${value}`}
        onChange={onClick}
        type="checkbox"
      /> */}

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
