import classes from "./caller-card.module.scss";
import * as caller from "../../slice/caller-slice";

interface CallerCardProps {
  boxes: number[];
  history: caller.TombolaNumber[];
}

function CallerCard({ boxes, history }: CallerCardProps) {
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <section>
      <main className={classes.cardsContainer}>
        <section className={classes.card}>
          {boxes.map((box) => (
            <label
              className={classes.boxContainer}
              htmlFor="box"
              key={box + "_box"}
            >
              <span
                className={`${classes.boxLabel} ${
                  history.some(
                    (tombolaNumber) => tombolaNumber.number === box
                  ) && classes.boxLabelChecked
                }`}
              >
                <p>{box}</p>
              </span>
              {/* <input
                        className={classes.box}
                        id="box"
                        name="box" 
                        type="checkbox"
                        checked={history.some((tombolaNumber) => tombolaNumber.number === box)}
                        readOnly/> */}
            </label>
          ))}
        </section>
      </main>
    </section>
  );
}

export default CallerCard;
