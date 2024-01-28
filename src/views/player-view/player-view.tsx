import BackButton from "../../components/back-button";
import Card from "../../components/card";
import * as player from "../../slice/player-slice";
import classes from "./player-view.module.scss";

interface PlayerViewProps {
  cardsNumbers: player.PlayerNumber[][];
  getCardStructure: (card: player.PlayerNumber[]) => player.PlayerNumber[][];
}

function PlayerView({
  cardsNumbers,
  getCardStructure,
}: PlayerViewProps): JSX.Element {
  return (
    <section className={classes.viewContainer}>
      <BackButton className={classes.backButton} size="small" />
      <main className={classes.cardsContainer}>
        {cardsNumbers.map((cardNumbers, i) => (
          <Card
            key={i + "_player_card"}
            cardStructure={getCardStructure(cardNumbers)}
          />
        ))}
      </main>
    </section>
  );
}

export default PlayerView;
