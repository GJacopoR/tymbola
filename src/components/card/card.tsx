import Number from "../number";
import { PlayerNumber } from "../../slice/player-slice";
import classes from "./card.module.scss";

interface CardStructure {
  cardStructure: PlayerNumber[][];
}

function Card({ cardStructure }: CardStructure) {
  return (
    <article className={classes.card}>
      {cardStructure.map((currentRow: PlayerNumber[], i: number) => (
        <div className={classes.cardRow} key={i + "_player_row"}>
          {currentRow.map((currentNumber: PlayerNumber, j: number) =>
            currentNumber.value ? (
              <Number
                key={currentNumber.value + "_number_box"}
                checked={currentNumber.checked}
                column={currentNumber.column}
                value={currentNumber.value}
              />
            ) : (
              <span
                className={classes.emptyBox}
                key={j + "_empty_number_box"}
              ></span>
            )
          )}
        </div>
      ))}
    </article>
  );
}

export default Card;
