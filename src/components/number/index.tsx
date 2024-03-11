// import Number from './number';

// export default Number;

import NumberComponent from "./number";
import { useAppDispatch } from "../../slice/hooks";
import * as player from "../../slice/player-slice";

function Number({ checked, column, value }: player.PlayerNumber) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(player.setNumberStateChecked(value));
  };

  const handleDoubleClick = () => {
    dispatch(player.setNumberStateUnchecked(value));
  };

  return (
    <NumberComponent
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      checked={checked}
      column={column}
      value={value}
    />
  );
}

export default Number;
