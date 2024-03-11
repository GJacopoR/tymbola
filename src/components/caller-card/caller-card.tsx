import classes from "./caller-card.module.scss";
import * as caller from "../../slice/caller-slice";

interface CallerCardProps {
  boxes: number[];
  history: caller.TombolaNumber[];
}

function CallerCard({ boxes, history }: CallerCardProps) {
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
            </label>
          ))}
        </section>
      </main>
    </section>
  );
}

export default CallerCard;
