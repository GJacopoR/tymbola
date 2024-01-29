import BackButton from "../../components/back-button";
import Card from "../../components/card";
import * as player from "../../slice/player-slice";
import PageTransition from "../../page-transition";
import classes from "./player-view.module.scss";

interface PlayerViewProps {
  cardsStructure: player.PlayerNumber[][][];
  // getCardStructure: (card: player.PlayerNumber[]) => player.PlayerNumber[][];
}

function PlayerView({ cardsStructure }: PlayerViewProps): JSX.Element {
  return (
    <PageTransition isDirectionBack={true}>
      <section className={classes.viewContainer}>
        <BackButton className={classes.backButton} size="small" />

        <main className={classes.cardsContainer}>
          {cardsStructure.map((cardStructure, i) => (
            <Card key={i + "_player_card"} cardStructure={cardStructure} />
          ))}
        </main>
      </section>
    </PageTransition>
  );
}

export default PlayerView;
