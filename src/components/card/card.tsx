import Number from "../number";
import { PlayerNumber } from "../../slice/player-slice";
import classes from "./card.module.scss";

interface CardStructure {
  structure: PlayerNumber[][];
}

function Card({ structure }: CardStructure) {
  console.log(structure);

  return (
    <>
      {structure.map((currentCard: PlayerNumber[], i: number) => (
        <section className={classes.card} key={i + "_player_card"}>
          {currentCard.map((currentNumber: PlayerNumber, i: number) =>
            currentNumber ? (
              <Number
                key={currentNumber.value + "_number_box"}
                checked={currentNumber.checked}
                coordinateX={currentNumber.coordinateX}
                coordinateY={currentNumber.coordinateY}
                value={currentNumber.value}
                onClick={() => null}
              />
            ) : (
              <div className={classes.emptyBox} key={i + "_empty_number_box"}>
                {null}
              </div>
            )
          )}
        </section>
      ))}
    </>
  );
}

export default Card;
